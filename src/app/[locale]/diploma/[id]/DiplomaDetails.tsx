'use client';

import { DiplomaDetailsData } from '@/types/diplomasApiTypes';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { SaudiRiyal } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import MainContent from './MainContent';
import { useRouter } from '@/navigations';

export default function DiplomaDetails({
  DetailsData: initialData,
}: {
  DetailsData: DiplomaDetailsData;
}) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('diplomas');

  const diploma = {
    id: initialData.data._id,
    title: initialData.data.title,
    titleAr: initialData.data.titleAr,
    diploma: initialData.data.category,
    image: initialData.data.image,
    brief: initialData.data.brief,
    briefAr: initialData.data.briefAr,
    description: initialData.data.description,
    descriptionAr: initialData.data.descriptionAr,
    startDate: new Date(
      initialData.data.semesters[0].configuration.duration.startDate
    ).toLocaleDateString("en-GB"),
    endDate: new Date(
      initialData.data.semesters[
        initialData.data.semesters.length - 1
      ].configuration.duration.endDate
    ).toLocaleDateString("en-GB"),
    semester: initialData.data.semesterCost?.toString(),
    available: initialData.data.isActive,
    semesters:
      initialData.data.semesters?.map((s, idx) => ({
        id: idx + 1,
        name: (locale === "ar" ? s.titleAr : s.title) || `Semester ${idx + 1}`,
        price: s.credits || 0,
        duration: s.courseIds?.map((c) => ({
          duration: c.duration.hours,
        })),
        modules:
          s.courseIds?.map((c) => ({
            name: locale === "ar" ? c.titleAr : c.title,
            startDate: c.date,
          })) || [],
      })) || [],
    semestersAr:
      initialData.data.semesters?.map((s, idx) => ({
        id: idx + 1,
        name: s.titleAr || `الفصل الدراسي ${idx + 1}`,
        modules:
          s.courseIds?.map((c) => ({
            name: c.titleAr,
            startDate: c.date,
          })) || [],
      })) || [],
    semesterCost: initialData.data.semesterCost,
    semesterNumber: initialData.data.semesters[0].semesterNumber,
    hours: initialData.data.hours,
    diplomaCost:
      initialData.data.semesters[0].semesterNumber *
      initialData.data.semesterCost,
  };
  const [openSemesters, setOpenSemesters] = useState<number[]>([]);

  const toggleSemesterOpen = (semesterId: number) => {
    setOpenSemesters((prev) =>
      prev.includes(semesterId)
        ? prev.filter((id) => id !== semesterId)
        : [...prev, semesterId]
    );
  };
console.log(`############################`, diploma);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-10 gap-8 pt-24">
          {/* Main Content - 70% */}
          <MainContent
            t={t}
            locale={locale}
            course={diploma}
            openSemesters={openSemesters}
            toggleSemesterOpen={toggleSemesterOpen}
          />

          {/* Sidebar - 30% */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-28"
            >
              <Card className="shadow-sm rounded-xl pt-6">
                <CardContent className="flex flex-col gap-6">
                  <h3 className="text-lg font-bold text-main-primary">
                    {t('Application requirements')}
                  </h3>

                  <div className="mx-6">
                    <ol className="list-decimal">
                      <li>{t('Enter all personal information completely')}</li>
                      <li>{t('A high school certificate is required')}</li>
                      <li>{t('Enter your preferred choices')}</li>
                      <li>
                        {t('Pay the registration fees for the applied college')}
                      </li>
                    </ol>
                  </div>

                  <div className="border-b-2 border-s-tints-tint-5"></div>

                  <div
                    className={`flex items-center justify-center gap-1 w-full p-4 font-bold text-base border-2 border-dashed border-s-tints-tint-30 bg-s-tints-tint-5 rounded-md ${
                      locale === 'en' && '!text-sm'
                    }`}
                  >
                    {t('The registration fee is 100')}
                    <SaudiRiyal className="w-4 h-4" />
                    {t('Non-refundable')}
                  </div>

                  <Button
                    onClick={() =>
                      router.push(`/place-order?diploma=${diploma.id}`)
                    }
                    className="w-full bg-main-primary hover:bg-p-shades-shade-80 h-[48px]"
                  >
                    {t('Apply now')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
