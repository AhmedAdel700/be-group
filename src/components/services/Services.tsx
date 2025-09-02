"use client";

import { useMemo, useState, useCallback } from "react";
import { useLocale } from "next-intl";
import {
  BadgeCheck,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Code2,
  MapPin,
  MessagesSquare,
  Search,
  Share2,
  Target,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Smartphone,
  Globe,
  Database,
  Zap,
  TrendingUp,
  BarChart3,
  Users,
  Palette,
  PenTool,
  Lightbulb,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";
import { Link } from "@/navigations";

type Service = {
  id: number;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  blurb: string;
  content: React.ReactNode;
  image?: { src: string; alt: string } | null;
};

const ACCENT = "text-main-primary";

export default function Services() {
  const locale = useLocale();
  const isRTL = locale === "ar";

  const services: Service[] = useMemo(
    () => [
      {
        id: 1,
        title: "Animation Video",
        icon: Clapperboard,
        blurb: "Tell your story with motion.",
        content: (
          <>
            <p className="leading-relaxed opacity-90">
              Embark on a journey of creativity and excellence with Be Group’s
              Animation Video service. We turn ideas into mesmerizing visuals
              that captivate minds and hearts—perfect for explainers, product
              demos, or unforgettable brand stories.
            </p>
            <p className="leading-relaxed opacity-90 mt-4">
              Our creative team crafts standout videos with striking style,
              meticulous detail, and emotional pull—leaving a lasting impact.
              Let’s turn your vision into a magical reality.
            </p>
          </>
        ),
        image: null,
      },
      {
        id: 2,
        title: "Social Media Management",
        icon: Share2,
        blurb: "Strategy, content, growth.",
        content: (
          <>
            <p className="text-lg leading-relaxed opacity-95 font-medium">
              We plan, create, and manage content that grows communities and
              drives results—tailored for each platform is culture and algorithm.
            </p>
            <div className="mt-8">
              <div className="max-w-2xl mx-auto">
                {/* First row - 2 items */}
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Instagram className="w-5 h-5 text-pink-400" />
                    <span className="text-sm font-medium">Instagram</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Youtube className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-medium">YouTube</span>
                  </div>
                </div>
                
                {/* Second row - 3 items */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Twitter className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-medium">Twitter/X</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium">Facebook</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </div>
                </div>
                
                {/* Third row - 2 items */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-4 h-4 rounded bg-black flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <span className="text-sm font-medium">TikTok</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span className="text-sm font-medium">Snapchat</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg leading-relaxed opacity-95 mt-8 font-medium">
              We handle calendars, copy, design, posting, moderation, and
              performance analytics—so your brand stays consistent and
              conversion-focused.
            </p>
          </>
        ),
        image: null,
      },
      {
        id: 3,
        title: "Web Development",
        icon: Code2,
        blurb: "Fast, scalable, secure.",
        content: (
          <>
            <p className="text-lg leading-relaxed opacity-95 font-medium">
              Since 2009, Be Group has delivered high-impact web and e-commerce
              solutions across MENA. We use modern stacks and Agile/Scrum to
              ship robust, maintainable products—on time.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Custom websites</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Database className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">E-commerce</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Smartphone className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">Mobile apps</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">APIs</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium">Cloud hosting</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <BarChart3 className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium">Analytics</span>
                </div>
              </div>
            </div>
          </>
        ),
        image: null,
      },
      {
        id: 4,
        title: "Google Ads (AdWords)",
        icon: Target,
        blurb: "Premier Partner performance.",
        content: (
          <>
            <p className="text-lg leading-relaxed opacity-95 font-medium">
              Be Group is a 2023 Google Premier Partner with certified
              strategists, strong optimization scores, and proven spend
              management. We build data-driven campaigns that scale.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <Search className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Keyword research & bid strategy</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Quality Score optimization</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium">Performance tracking</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">Campaign optimization</span>
                </div>
              </div>
            </div>
          </>
        ),
        image: null,
      },
      {
        id: 5,
        title: "SEO",
        icon: Search,
        blurb: "Visibility that lasts.",
        content: (
          <>
            <p className="text-lg leading-relaxed opacity-95 font-medium">
              Full-stack SEO: technical audits, on-page optimization, content
              strategy, and high-quality link building. We pair research with
              clean IA and UX to grow qualified traffic sustainably.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Search className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Technical audits</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <PenTool className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">Content strategy</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">Link building</span>
                </div>
              </div>
            </div>
            <p className="text-lg leading-relaxed opacity-95 mt-8 font-medium">
              We communicate transparently with regular reporting—so you see
              what is moving the needle.
            </p>
          </>
        ),
        image: null,
      },
      {
        id: 6,
        title: "Google Maps",
        icon: MapPin,
        blurb: "Be found locally.",
        content: (
          <>
            <p className="text-lg leading-relaxed opacity-95 font-medium">
              Optimize your Business Profile to win local intent across Search
              and Maps. We manage photos, posts, offers, reviews, and messaging
              to convert discovery into visits and calls.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Camera className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-medium">Photo management</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Review optimization</span>
                </div>
              </div>
            </div>
          </>
        ),
        image: null,
      },
      {
        id: 7,
        title: "Media Production",
        icon: Camera,
        blurb: "Video, audio, motion.",
        content: (
          <>
            <p className="text-lg leading-relaxed opacity-95 font-medium">
              End-to-end production: scripting, directing, shooting, editing,
              motion graphics, VFX, and sound design. We deliver broadcast-grade
              results tailored to your brand voice.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Camera className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium">Video production</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">Motion graphics</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <PenTool className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">Sound design</span>
                </div>
              </div>
            </div>
          </>
        ),
        image: null,
      },
      {
        id: 8,
        title: "Branding",
        icon: BadgeCheck,
        blurb: "Identity with purpose.",
        content: (
          <>
            <p className="text-lg leading-relaxed opacity-95 font-medium">
              Research-backed visual identities—logos, palettes, typography,
              guidelines, and assets—that align with your positioning and scale
              across print and digital touchpoints.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Palette className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-medium">Logo design</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <PenTool className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Typography</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <BadgeCheck className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">Brand guidelines</span>
                </div>
              </div>
            </div>
          </>
        ),
        image: null,
      },
      {
        id: 9,
        title: "Consultation",
        icon: MessagesSquare,
        blurb: "Roadmaps & strategy.",
        content: (
          <>
            <p className="text-lg leading-relaxed opacity-95 font-medium">
              Marketing and product consulting: market analysis, opportunity
              mapping, brand development, CX/CRM improvements, and measurable
              go-to-market plans.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Lightbulb className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">Strategy planning</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Market analysis</span>
                </div>
              </div>
            </div>
          </>
        ),
        image: null,
      },
    ],
    []
  );

  const [start, setStart] = useState(0);
  const [active, setActive] = useState(0);

  // Responsive window size: 2 on mobile, 5 on desktop
  const windowSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 5;
  const maxStart = services.length - windowSize;

  const move = useCallback(
    (dir: -1 | 1) => {
      setStart((s) => Math.max(0, Math.min(maxStart, s + dir)));
    },
    [maxStart]
  );

  const select = useCallback((i: number) => {
    setActive(i);
    // keep selected visible within window
    setStart((s) => {
      if (i < s) return i;
      if (i > s + windowSize - 1) return i - windowSize + 1;
      return s;
    });
  }, [windowSize]);

  // shift in % - responsive based on window size
  const shiftPct = (isRTL ? start : -start) * (100 / windowSize);

  const ActiveIcon = services[active].icon;

  return (
    <section className="w-full min-h-fit xl:min-h-screen bg-main-black text-main-white py-8 xl:py-20 border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="uppercase py-3 px-4 border rounded-full w-fit mx-auto"
          >
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-7xl lg:max-w-[80%] xl:max-w-[65%] font-bold text-center capitalize mx-auto"
          >
            We provide the full stack of creative services
          </motion.h2>
        </div>

        {/* Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* arrows */}
          <button
            aria-label="Previous"
            onClick={() => move(isRTL ? 1 : -1)}
            className={`absolute -left-2 top-1/2 -translate-y-1/2 z-10 rounded-full border p-3 backdrop-blur-sm transition-all duration-300 ${
              start === (isRTL ? maxStart : 0)
                ? "border-gray-600 bg-gray-800/50 cursor-not-allowed"
                : "border-main-primary/50 hover:border-main-primary bg-main-primary/10 hover:bg-main-primary/20 hover:scale-105 cursor-target"
            }`}
            disabled={start === (isRTL ? maxStart : 0)}
          >
            <ChevronLeft
              className={`w-5 h-5 transition-colors ${
                start === (isRTL ? maxStart : 0)
                  ? "text-gray-500"
                  : "text-main-primary"
              }`}
            />
          </button>
          <button
            aria-label="Next"
            onClick={() => move(isRTL ? -1 : 1)}
            className={`absolute -right-2 top-1/2 -translate-y-1/2 z-10 rounded-full border p-3 backdrop-blur-sm transition-all duration-300 ${
              start === (isRTL ? 0 : maxStart)
                ? "border-gray-600 bg-gray-800/50 cursor-not-allowed"
                : "border-main-primary/50 hover:border-main-primary bg-main-primary/10 hover:bg-main-primary/20 hover:scale-105 cursor-target"
            }`}
            disabled={start === (isRTL ? 0 : maxStart)}
          >
            <ChevronRight
              className={`w-5 h-5 transition-colors ${
                start === (isRTL ? 0 : maxStart)
                  ? "text-gray-500"
                  : "text-main-primary"
              }`}
            />
          </button>

          {/* track */}
          <div className="overflow-hidden border-b border-white/10">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(${shiftPct}%)`,
                direction: isRTL ? "rtl" : "ltr",
              }}
            >
              {services.map((s, i) => {
                const Icon = s.icon;
                const activeItem = i === active;
                return (
                  <button
                    key={s.id}
                    onClick={() => select(i)}
                    className={`group basis-1/5 shrink-0 px-4 py-8 text-center relative focus:outline-none cursor-target`}
                    dir="ltr"
                  >
                    <Icon
                      className={`mx-auto mb-4 h-8 w-8 ${
                        activeItem ? ACCENT : "text-white"
                      }`}
                      strokeWidth={1.75}
                    />
                    <div
                      className={`text-sm md:text-base font-medium ${
                        activeItem
                          ? "opacity-100"
                          : "opacity-70 group-hover:opacity-100"
                      }`}
                    >
                      {s.title}
                    </div>

                    {/* underline */}
                    <span
                      className={`pointer-events-none absolute bottom-0 left-0 h-[2px] w-full ${
                        activeItem
                          ? "bg-main-primary"
                          : "bg-transparent group-hover:bg-white/30"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Content panel */}
        <motion.div
          className="mt-12 flex flex-col items-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* icon + heading */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col items-center gap-4">
              <motion.span
                className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-main-primary/30 bg-main-primary/10 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ActiveIcon className={`h-8 w-8 ${ACCENT}`} />
              </motion.span>
              <div>
                <motion.h3
                  className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  {services[active].title}
                </motion.h3>
                <motion.p
                  className="text-base text-main-primary/80 mt-2 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {services[active].blurb}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* body */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={services[active].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-center space-y-6"
              >
                <motion.div
                  className="prose prose-invert prose-lg max-w-none mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {services[active].content}
                </motion.div>

                {/* Enhanced call-to-action area */}
                <motion.div
                  className="flex items-center justify-center gap-3 pt-6 border-t border-white/10 max-w-full mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link href={"/services"} className="w-full">
                    <Button
                      className="uppercase bg-main-primary text-main-text hover:bg-main-secondary p-6 !rounded-[4px] w-full sm:w-[20%] cursor-target"
                      variant="default"
                    >
                      More Details
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
