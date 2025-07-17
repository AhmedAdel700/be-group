'use client';
import { easeInOut, motion } from 'framer-motion';
import { Calendar, Clock, SaudiRiyal } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { DiplomaResponseData } from '../types/diplomasApiTypes';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setDiplomas } from '@/app/api/diplomas/diplomasApiSlice';
import { formatDateByLocale } from '@/utils/formatDateByLocale';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

export default function DiplomasSection({
  diplomasData,
}: {
  diplomasData: DiplomaResponseData;
}) {
  const locale = useLocale();
  const t = useTranslations('diplomas');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDiplomas(diplomasData));
  }, [diplomasData, dispatch]);

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black-tint-90 self-start">
            {t('Our Diplomas')}
          </h2>
          <p className="text-xl max-w-6xl text-[28px] text-black-tint-80 leading-relaxed self-start text-start">
            {t(
              'Choose from our wide range of expertly designed diplomas to advance your career and achieve your learning goals'
            )}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {diplomasData?.data?.diplomas.map((diploma) => (
            <motion.div
              key={diploma._id}
              variants={cardVariants}
              className="bg-white rounded-[8px] p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full border border-black-tint-10"
            >
              <div className="relative">
                <Image
                  src={diploma.image}
                  alt={locale === 'en' ? diploma.title : diploma.titleAr}
                  className="w-full h-48 object-cover max-w-full rounded-sm"
                  width={330}
                  height={192}
                />
              </div>

              <div className="flex flex-col pt-4 flex-grow gap-4">
                <h3 className="text-xl font-bold line-clamp-2">
                  {locale === 'en' ? diploma.title : diploma.titleAr}
                </h3>

                <div className="flex items-center gap-2 text-black-tint-60 text-base">
                  <Clock className="w-4 h-4" />
                  <span>
                    {diploma.hours} {t('Hours')}
                  </span>

                  <div className="h-5 w-[2px] bg-black-tint-10"></div>

                  <Calendar className="w-4 h-4" />
                  {formatDateByLocale(
                    diploma.semesters[0].configuration.duration.startDate,
                    locale
                  )}
                </div>

                <div className="flex items-center text-black-tint-90 gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-base text-black-tint-60">
                      {t('Program price')}
                    </div>
                    <div className="flex items-center font-bold text-base gap-1">
                      {diploma.semesterCost * diploma.semesters.length + 100}
                      <SaudiRiyal className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-black-tint-90 gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-base text-black-tint-60">
                      {t('Semester')}
                    </div>
                    <div className="flex items-center font-bold text-base gap-1">
                      {diploma.semesterCost}
                      <SaudiRiyal className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link href={`/${locale}/diploma/${diploma._id}`}>
                    <Button className="w-full h-12 bg-main-primary hover:bg-p-shades-shade-80 transition-colors duration-200 text-sm rounded-[8px]">
                      {t('View Details')}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
