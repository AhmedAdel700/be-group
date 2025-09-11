"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  BadgeCheck,
  Camera,
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
import TiltedCard from "@/components/TittedCard";
import SplitText from "@/components/SplitText";
import MotionModal from "./MotionModal";

type CardInfo = {
  id: number;
  title: string;
  blurb: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  content: React.ReactNode;
};


export default function Page() {
  // scroll-motion variants (added)
  const easeOut = [0.22, 1, 0.36, 1] as const;
  const listVar = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
      },
    }),
    []
  );
  const itemVar = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24, scale: 0.98 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: easeOut },
      },
    }),
    []
  );

  const CARDS: CardInfo[] = useMemo(
    () => [
      {
        id: 1,
        title: "Animation Video",
        Icon: Clapperboard,
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
        Icon: Share2,
        blurb: "Strategy, content, growth.",
        content: (
          <>
            <p className="text-lg leading-relaxed opacity-95 font-medium">
              We plan, create, and manage content that grows communities and
              drives results—tailored for each platform is culture and
              algorithm.
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
        Icon: Code2,
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
        Icon: Target,
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
                  <span className="text-sm font-medium">
                    Keyword research & bid strategy
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">
                    Quality Score optimization
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium">
                    Performance tracking
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">
                    Campaign optimization
                  </span>
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
        Icon: Search,
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
        Icon: MapPin,
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
                  <span className="text-sm font-medium">
                    Review optimization
                  </span>
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
        Icon: Camera,
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
        Icon: BadgeCheck,
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
        Icon: MessagesSquare,
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

  const [openKey, setOpenKey] = useState<number | null>(null);
  const active = CARDS.find((c) => c.id === openKey);

  return (
    <section className="min-h-screen bg-main-black2 text-main-white flex flex-col items-center">
      <div className="w-full bg-main-black2 text-main-primary flex flex-col items-center justify-end xl:justify-center py-6 xl:py-0 h-[140px] sm:h-[180px] lg:h-[220px] xl:h-[63vh]">
        <SplitText
          text="Our Services"
          tag="h1"
          className="font-extrabold leading-[1.2] text-[clamp(44px,10vw,128px)] relative"
          delay={80}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0} // fire as soon as it's on screen
          rootMargin="0px" // no waiting
          textAlign="center"
          initialHidden // start hidden → show on mount
        />
      </div>

      {/* scroll-animated cards list (added) */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-10 pb-12"
        variants={listVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      >
        {CARDS.map(({ id, title, blurb, Icon }) => (
          <motion.div key={id} variants={itemVar}>
            <TiltedCard
              altText={title}
              containerHeight="320px"
              containerWidth="320px"
              imageHeight="320px"
              imageWidth="320px"
              rotateAmplitude={12}
              scaleOnHover={1.12}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              onClick={() => setOpenKey(id)}
              overlayContent={
                <div className="h-[320px] w-[320px] rounded-[15px] overflow-hidden bg-main-black">
                  <div className="h-full w-full rounded-[15px] border border-main-secondary bg-white/5 backdrop-blur-sm flex flex-col items-center pt-6 justify-start gap-4 text-center">
                    <span className="inline-flex items-center justify-center h-20 w-20 rounded-full border border-main-primary/30 bg-main-primary/10">
                      <Icon className="h-10 w-10 text-main-primary" />
                    </span>
                    <div className="flex flex-col items-center gap-2">
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="text-sm opacity-80 max-w-[240px]">
                        {blurb}
                      </p>
                    </div>
                    <div className="text-xs uppercase tracking-wide text-main-primary/80 mt-auto mb-5">
                      Click for details
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>
        ))}
      </motion.div>

      <MotionModal
        open={!!active}
        onClose={() => setOpenKey(null)}
        title={active?.title ?? ""}
        icon={active?.Icon ?? Clapperboard}
        content={active?.content ?? null}
      />
    </section>
  );
}
