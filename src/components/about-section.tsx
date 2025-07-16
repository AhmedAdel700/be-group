'use client';

import missionIcon from '@/app/assets/ourMission.svg';
import valuesIcon from '@/app/assets/ourValues.svg';
import visionIcon from '@/app/assets/ourVision.svg';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-main-black">
            {t('About Se-University')}
          </h2>
          <p className="text-xl font-normal text-black-tint-80 max-w-3xl leading-relaxed">
            {t(
              'We are dedicated to providing world-class education that empowers students to achieve their dreams and build successful careers in the digital age'
            )}
          </p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-black-tint-10"
          >
            <div className="bg-p-tints-tint-5 w-[54px] h-[54px] flex items-center justify-center mb-6 rounded-[8px]">
              <Image
                src={missionIcon}
                alt="mission-icon"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
            </div>
            <h3 className="text-2xl font-bold text-main-black mb-4">
              {t('Our Mission')}
            </h3>
            <p className="text-black-tint-80 font-medium leading-relaxed text-lg">
              {t(
                'To democratize quality education by making it accessible affordable and engaging for learners worldwide through innovative online learning experiences'
              )}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-black-tint-10"
          >
            <div className="bg-p-tints-tint-5 w-[54px] h-[54px] flex items-center justify-center mb-6 rounded-[8px]">
              <Image
                src={visionIcon}
                alt="vision-icon"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
            </div>
            <h3 className="text-2xl font-bold text-main-black mb-4">
              {t('Our Vision')}
            </h3>
            <p className="text-black-tint-80 font-medium leading-relaxed text-lg">
              {t(
                'To become the leading global platform for professional development and academic excellence fostering a community of lifelong learners'
              )}
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-black-tint-10"
          >
            <div className="bg-p-tints-tint-5 w-[54px] h-[54px] flex items-center justify-center mb-6 rounded-[8px]">
              <Image
                src={valuesIcon}
                alt="values-icon"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
            </div>
            <h3 className="text-2xl font-bold text-main-black mb-4">
              {t('Our Values')}
            </h3>
            <p className="text-black-tint-80 font-medium leading-relaxed text-lg">
              {t(
                'Excellence innovation inclusivity and student success drive everything we do We believe in the transformative power of education'
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
