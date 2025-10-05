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
import Image from "next/image";
import xLogo from "@/app/assets/x-logo.svg";

export type Service = {
  id: number;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  blurb: string;
  content: React.ReactNode;
  image?: { src: string; alt: string } | null;
  slug: string;
  description: string;
  features: string[];
  benefits: string[];
};

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Animation Video",
    icon: Clapperboard,
    blurb: "Tell your story with motion.",
    slug: "animation-video",
    description:
      "Embark on a journey of creativity and excellence with Be Group's Animation Video service. We turn ideas into mesmerizing visuals that captivate minds and hearts—perfect for explainers, product demos, or unforgettable brand stories.",
    features: [
      "Custom animation design",
      "Motion graphics",
      "2D & 3D animation",
      "Character animation",
      "Explainer videos",
      "Product demos",
    ],
    benefits: [
      "Enhanced brand storytelling",
      "Increased engagement",
      "Professional visual communication",
      "Versatile content creation",
    ],
    content: (
      <>
        <p className="leading-relaxed opacity-90">
          Embark on a journey of creativity and excellence with Be Group is
          Animation Video service. We turn ideas into mesmerizing visuals that
          captivate minds and hearts—perfect for explainers, product demos, or
          unforgettable brand stories.
        </p>
        <p className="leading-relaxed opacity-90 mt-4">
          Our creative team crafts standout videos with striking style,
          meticulous detail, and emotional pull—leaving a lasting impact. Let is
          turn your vision into a magical reality.
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
    slug: "social-media-management",
    description:
      "We plan, create, and manage content that grows communities and drives results—tailored for each platform's culture and algorithm.",
    features: [
      "Content strategy & planning",
      "Community management",
      "Performance analytics",
      "Multi-platform posting",
      "Brand consistency",
      "Engagement optimization",
    ],
    benefits: [
      "Increased brand visibility",
      "Better audience engagement",
      "Data-driven growth",
      "Time-saving automation",
    ],
    content: (
      <>
        <p className="text-lg leading-relaxed opacity-95 font-medium">
          We plan, create, and manage content that grows communities and drives
          results—tailored for each platform is culture and algorithm.
        </p>
        <div className="mt-8">
          <div className="max-w-2xl mx-auto">
            {/* First row - 2 items */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <Instagram className="w-5 h-5 text-pink-400 shrink-0" />
                <span className="text-sm font-medium">Instagram</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <Youtube className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-sm font-medium">YouTube</span>
              </div>
            </div>

            {/* Second row - 3 items */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                <Image
                  src={xLogo}
                  alt={"X Logo"}
                  width={20}
                  height={20}
                  className="shrink-0 object-contain"
                />
                <span className="text-xs font-medium">Twitter/X</span>
              </div>
              <div className="flex items-center justify-center gap-1 p-3 rounded-lg bg-white/5 border border-white/10">
                <Facebook className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-medium">Facebook</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                <Linkedin className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-xs font-medium">LinkedIn</span>
              </div>
            </div>

            {/* Third row - 2 items */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="w-4 h-4 rounded bg-black flex items-center justify-center">
                  <span className="text-white text-xs font-bold shrink-0">
                    T
                  </span>
                </div>
                <span className="text-sm font-medium">TikTok</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-white text-xs font-bold shrink-0">
                    S
                  </span>
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
    slug: "web-development",
    description:
      "Since 2009, Be Group has delivered high-impact web and e-commerce solutions across MENA. We use modern stacks and Agile/Scrum to ship robust, maintainable products—on time.",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Mobile applications",
      "API development",
      "Cloud hosting",
      "Performance optimization",
    ],
    benefits: [
      "Modern technology stack",
      "Scalable architecture",
      "Fast loading times",
      "Mobile-responsive design",
    ],
    content: (
      <>
        <p className="text-lg leading-relaxed opacity-95 font-medium">
          Since 2009, Be Group has delivered high-impact web and e-commerce
          solutions across MENA. We use modern stacks and Agile/Scrum to ship
          robust, maintainable products—on time.
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
    slug: "google-ads",
    description:
      "Be Group is a 2023 Google Premier Partner with certified strategists, strong optimization scores, and proven spend management. We build data-driven campaigns that scale.",
    features: [
      "Keyword research & strategy",
      "Campaign optimization",
      "Performance tracking",
      "Quality Score improvement",
      "Bid management",
      "Conversion tracking",
    ],
    benefits: [
      "Google Premier Partner status",
      "Certified strategists",
      "Data-driven campaigns",
      "Proven ROI results",
    ],
    content: (
      <>
        <p className="text-lg leading-relaxed opacity-95 font-medium">
          Be Group is a 2023 Google Premier Partner with certified strategists,
          strong optimization scores, and proven spend management. We build
          data-driven campaigns that scale.
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
    slug: "seo",
    description:
      "Full-stack SEO: technical audits, on-page optimization, content strategy, and high-quality link building. We pair research with clean IA and UX to grow qualified traffic sustainably.",
    features: [
      "Technical SEO audits",
      "On-page optimization",
      "Content strategy",
      "Link building",
      "Local SEO",
      "Performance monitoring",
    ],
    benefits: [
      "Long-term visibility",
      "Organic traffic growth",
      "Higher search rankings",
      "Cost-effective marketing",
    ],
    content: (
      <>
        <p className="text-lg leading-relaxed opacity-95 font-medium">
          Full-stack SEO: technical audits, on-page optimization, content
          strategy, and high-quality link building. We pair research with clean
          IA and UX to grow qualified traffic sustainably.
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
          We communicate transparently with regular reporting—so you see what is
          moving the needle.
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
    slug: "google-maps",
    description:
      "Optimize your Business Profile to win local intent across Search and Maps. We manage photos, posts, offers, reviews, and messaging to convert discovery into visits and calls.",
    features: [
      "Business Profile optimization",
      "Photo management",
      "Review management",
      "Local SEO",
      "Post scheduling",
      "Analytics tracking",
    ],
    benefits: [
      "Increased local visibility",
      "More foot traffic",
      "Better online reputation",
      "Higher conversion rates",
    ],
    content: (
      <>
        <p className="text-lg leading-relaxed opacity-95 font-medium">
          Optimize your Business Profile to win local intent across Search and
          Maps. We manage photos, posts, offers, reviews, and messaging to
          convert discovery into visits and calls.
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
    slug: "media-production",
    description:
      "End-to-end production: scripting, directing, shooting, editing, motion graphics, VFX, and sound design. We deliver broadcast-grade results tailored to your brand voice.",
    features: [
      "Video production",
      "Motion graphics",
      "Sound design",
      "Post-production",
      "VFX & animation",
      "Broadcast quality",
    ],
    benefits: [
      "Professional quality output",
      "Complete production pipeline",
      "Brand-aligned content",
      "Broadcast-ready results",
    ],
    content: (
      <>
        <p className="text-lg leading-relaxed opacity-95 font-medium">
          End-to-end production: scripting, directing, shooting, editing, motion
          graphics, VFX, and sound design. We deliver broadcast-grade results
          tailored to your brand voice.
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
    slug: "branding",
    description:
      "Research-backed visual identities—logos, palettes, typography, guidelines, and assets—that align with your positioning and scale across print and digital touchpoints.",
    features: [
      "Logo design",
      "Brand identity",
      "Typography design",
      "Color palette creation",
      "Brand guidelines",
      "Asset creation",
    ],
    benefits: [
      "Cohesive brand identity",
      "Professional appearance",
      "Brand consistency",
      "Scalable design system",
    ],
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
    slug: "consultation",
    description:
      "Marketing and product consulting: market analysis, opportunity mapping, brand development, CX/CRM improvements, and measurable go-to-market plans.",
    features: [
      "Market analysis",
      "Strategy planning",
      "Brand development",
      "CX/CRM optimization",
      "Go-to-market plans",
      "Performance measurement",
    ],
    benefits: [
      "Strategic guidance",
      "Data-driven insights",
      "Competitive advantage",
      "Measurable results",
    ],
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
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find(service => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map(service => service.slug);
};
