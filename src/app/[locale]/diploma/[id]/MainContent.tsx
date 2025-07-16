/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Check, ChevronDown, ChevronUp, SaudiRiyal, Star } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Function to format date as day-month-year
const formatDate = (dateString: string) => {
  if (!dateString) return '';

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // If it's already in DD-MM-YYYY format, return as is
      if (dateString.includes('-') && dateString.split('-').length === 3) {
        return dateString;
      }
      return dateString;
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  } catch {
    return dateString;
  }
};

export default function MainContent({
  course,
  t,
  openSemesters,
  toggleSemesterOpen,
  locale,
}: any) {
  const tEnroll = useTranslations('enroll');

  return (
    <div className="lg:col-span-7">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Diploma Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <Image
            src={course.image || '/placeholder.svg'}
            alt={course.title}
            className="rounded-lg"
            width={350}
            height={300}
          />

          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold">
              {locale === 'en' ? course.title : course.titleAr}
            </h1>

            <p className="text-black-tint-80 text-base font-medium">
              {locale === 'en' ? course.brief : course.briefAr}
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <p>{tEnroll('Diploma price')}:</p>
              <div className="flex items-center gap-1">
                <p>{course.diplomaCost}</p>
                <SaudiRiyal className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-xl font-bold">
              <p>{tEnroll('Tuition fee for the academic year')}:</p>
              <div className="flex items-center gap-1">
                <p>{course.semesterCost}</p>
                <SaudiRiyal className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant={'option1'}>
                {course.semesterNumber} {tEnroll('years')}
              </Badge>
              <Badge variant={'option2'}>
                {course.hours} {tEnroll('hour')}
              </Badge>
              <Badge variant={'option3'}>{tEnroll('Remote')}</Badge>
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="bg-white rounded-md border border-gray-200 shadow-sm">
          <Tabs defaultValue="description" className="w-full">
            <TabsList
              className={`flex ${
                locale === 'ar' ? 'flex-row-reverse' : ''
              } justify-between sm:justify-start items-center gap-1 sm:gap-4 w-full py-4 rounded-t-xl bg-transparent border-b border-gray-200 rounded-none h-12`}
            >
              <TabsTrigger
                value="description"
                className="data-[state=active]:bg-main-primary data-[state=active]:text-white !shadow-none !font-old relative !h-10 !rounded-sm"
              >
                {t('Description')}
              </TabsTrigger>
              <TabsTrigger
                value="schedule"
                className="data-[state=active]:bg-main-primary data-[state=active]:text-white !shadow-none !font-old relative !h-10 !rounded-sm"
              >
                {t('Schedule')}
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-main-primary data-[state=active]:text-white !shadow-none !font-old relative !h-10 !rounded-sm"
              >
                {t('Reviews')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="reviews" className="p-6">
              <div className="flex flex-col gap-6">
                {/* Removed star, rating, and (reviews) count */}
                {locale === 'en' ? (
                  course.reviews && course.reviews.length > 0 ? (
                    course.reviews.map((review: any, index: any) => (
                      <div
                        key={index}
                        className="border-dashed border-b-2 flex flex-col gap-4 p-4 border-gray-200"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-main-primary">
                            {review.name}
                          </span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-black-tint-80">{review.text}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-400 py-8 text-lg font-semibold border border-dashed border-gray-200 rounded-md bg-gray-50">
                      No reviews yet
                    </div>
                  )
                ) : course?.reviewsAr && course.reviewsAr.length > 0 ? (
                  course.reviewsAr.map((review: any, index: any) => (
                    <div
                      key={index}
                      className="border-dashed border-b-2 flex flex-col gap-4 p-4 border-gray-200"
                    >
                      <div
                        className={`flex items-center gap-2 ${
                          locale === 'ar' ? 'flex-row-reverse' : ''
                        }`}
                      >
                        <span className="font-semibold text-main-primary">
                          {review.name}
                        </span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-black-tint-80 text-right rtl:text-right ltr:text-left">
                        {review.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-400 py-8 text-lg font-semibold border border-dashed border-gray-200 rounded-md bg-gray-50">
                    لا توجد مراجعات بعد
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="p-3 sm:p-6">
              <div className="flex flex-col gap-4">
                {locale === 'en'
                  ? course.semesters.map((semester: any) => (
                      <Collapsible
                        key={semester.id}
                        open={openSemesters.includes(semester.id)}
                        onOpenChange={() => toggleSemesterOpen(semester.id)}
                        className="flex flex-col gap-4"
                      >
                        <CollapsibleTrigger
                          className={`flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${
                            locale === 'ar' ? 'flex-row-reverse' : ''
                          }`}
                        >
                          <span className="font-semibold text-main-primary text-base">
                            {semester.name}
                          </span>
                          {openSemesters.includes(semester.id) ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="flex flex-col gap-4">
                            {semester.modules.map(
                              (module: any, moduleIndex: any) => (
                                <div
                                  key={moduleIndex}
                                  className={`flex items-center justify-between p-3  border-dashed border-b-2 border-gray-200 ${
                                    locale === 'ar' ? 'flex-row-reverse' : ''
                                  }`}
                                >
                                  <div className="flex flex-col gap-4">
                                    <h4 className="font-bold text-base text-black-tint-80">
                                      {module.name}
                                    </h4>
                                    <p className="text-base text-black-tint-80">
                                      {t('Date and Time')}:{' '}
                                      {formatDate(module.startDate)}
                                    </p>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))
                  : course?.semestersAr?.map((semester: any) => (
                      <Collapsible
                        key={semester.id}
                        open={openSemesters.includes(semester.id)}
                        onOpenChange={() => toggleSemesterOpen(semester.id)}
                        className="flex flex-col gap-4"
                      >
                        <CollapsibleTrigger
                          className={`flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${
                            locale === 'ar' ? 'flex-row-reverse' : ''
                          }`}
                        >
                          <span className="font-semibold text-main-primary text-base">
                            {semester.name}
                          </span>
                          {openSemesters.includes(semester.id) ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="flex flex-col gap-4">
                            {semester.modules.map(
                              (module: any, moduleIndex: any) => (
                                <div
                                  key={moduleIndex}
                                  className={`flex items-center justify-between p-3  border-dashed border-b-2 border-gray-200 ${
                                    locale === 'ar' ? 'flex-row-reverse' : ''
                                  }`}
                                >
                                  <div className="flex flex-col gap-4">
                                    <h4 className="font-bold text-base text-black-tint-80">
                                      {module.name}
                                    </h4>
                                    <p className="text-base text-black-tint-80 self-end">
                                      {t('Date and Time')}:{' '}
                                      {formatDate(module.startDate)}
                                    </p>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
              </div>
            </TabsContent>

            <TabsContent value="description" className="p-6 flex-row-reverse">
              <div className="flex flex-col gap-8">
                {course.description && course.description.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {locale === 'en'
                      ? course.description.map(
                          (
                            item: { title: string; items: string[] },
                            index: number
                          ) => (
                            <div key={index} className="flex flex-col gap-4">
                              <h3 className="text-xl font-bold text-main-primary text-right rtl:text-right ltr:text-left">
                                {item.title}
                              </h3>

                              <ul className="flex flex-col gap-2">
                                {item.items.map(
                                  (subItem: string, subIndex: number) => (
                                    <li
                                      key={subIndex}
                                      className="flex items-start gap-2"
                                    >
                                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                      <span className="text-black-tint-80">
                                        {subItem}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )
                        )
                      : course.descriptionAr.map(
                          (
                            item: { title: string; items: string[] },
                            index: number
                          ) => (
                            <div key={index} className="flex flex-col gap-4">
                              <h3 className="text-xl font-bold text-main-primary text-right rtl:text-right ltr:text-left">
                                {item.title}
                              </h3>

                              <ul className="flex flex-col gap-2">
                                {item.items.map((subItem, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="flex items-start gap-2 rtl:flex-row-reverse"
                                  >
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-black-tint-80">
                                      {subItem}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
}
