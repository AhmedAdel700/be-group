'use client';

import type React from 'react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  EyeOff,
  GraduationCap,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from 'react';
// import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import ColorfulLogo from '@/app/assets/ColorfulLogo.svg';
import eyeView from '@/app/assets/view.svg';
import { signIn, getSession } from 'next-auth/react';

export default function Signin() {
  const locale = useLocale();
    const router = useRouter();
  const t = useTranslations('signin');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //   const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const res = await signIn('credentials', {
        emailOrPhone: formData.email.trim(),
        password: formData.password.trim(),
        redirect: false,
      });

      router.push(`/${locale}/enrollment-status`);

      if (!res?.ok) throw new Error(res?.error || 'Internal Server Error');

      const session = await getSession();

      if (!session) throw new Error('Internal Server Error');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#323B7F] via-[#63C8CD] to-[#A166DE] flex items-center justify-center relative overflow-hidden px-4 py-[120px] xl:py-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Books */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 text-[#0EC5C7] opacity-10"
        >
          <BookOpen className="w-20 h-20" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-20 right-20 text-[#0EC5C7] opacity-10"
        >
          <GraduationCap className="w-24 h-24" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 bg-[#0EC5C7] rounded-full"
            style={{
              left: `${10 + i * 7}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#0EC5C7] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#5F289E] rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="flex flex-col gap-6">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-white hover:underline transition-colors duration-200 font-medium"
          >
            {locale === 'en' ? (
              <ArrowLeft className="w-5 h-5" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
            {t('Back to Home')}
          </Link>

          <Card className="shadow-2xl bg-white backdrop-blur-sm border-0">
            <CardHeader className="text-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto color-gradient-to-r from-[#001C71] to-[#0EC5C7] flex items-center justify-center mb-4"
              >
                <Image
                  src={ColorfulLogo}
                  alt="University Logo"
                  width={48}
                  height={48}
                />
              </motion.div>
              <CardTitle className="text-2xl font-bold text-main-primary">
                {t('Welcome Back')}
              </CardTitle>
              <CardDescription className="text-main-black text-base font-medium">
                {t('Sign in to your Se-University account')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col gap-4"
                >
                  <Label htmlFor="email" className="text-base">
                    {t('Email')}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('Enter your email')}
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${
                      errors.email ? 'border-red-500' : ''
                    } h-[48px]`}
                  />
                  {errors.email && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.email}</AlertDescription>
                    </Alert>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <Label htmlFor="password" className="text-base">
                    {t('Password')}
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder={t('Enter your password')}
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`${
                        errors.password ? 'border-red-500' : ''
                      } h-[48px]`}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className={`absolute top-0 h-full hover:bg-transparent ${
                        locale === 'en' ? 'right-0' : 'left-0'
                      }`}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Image
                          src={eyeView}
                          alt="eyePasswordView"
                          width={18}
                          height={18}
                        />
                      )}
                    </Button>
                  </div>
                  {errors.password && (
                    <Alert variant="destructive">
                      <AlertDescription>{errors.password}</AlertDescription>
                    </Alert>
                  )}
                  {/* <div className="flex justify-between items-center">
                    <label className="flex items-center gap-2 text-sm">
                      <Checkbox
                        id="rememberMe"
                        checked={rememberMe}
                        onCheckedChange={(checked) =>
                          setRememberMe(checked === true)
                        }
                        className=""
                      />
                      {t('Remember Me')}
                    </label>
                    <Link
                      href={`/${locale}/forgot-password`}
                      className="text-main-primary hover:text-[#0EC5C7] text-sm font-medium transition-colors"
                    >
                      {t('Forgot Password')}
                    </Link>
                  </div> */}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    className="w-full h-[48px] bg-main-primary hover:bg-p-shades-shade-90 transition-all duration-300 transform "
                    disabled={isLoading}
                  >
                    {isLoading ? t('Signing In') : t('Sign In')}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
