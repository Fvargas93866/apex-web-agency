"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Bot,
  Briefcase,
  Check,
  CheckCircle2,
  Feather,
  Home,
  Image as ImageIcon,
  LifeBuoy,
  Mail,
  MonitorSmartphone,
  Palette,
  Phone,
  Receipt,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Wand2,
  X,
  Zap,
} from "lucide-react";

type PageId = "home" | "services" | "pricing" | "portfolio" | "contact" | "concept";
type AccentKey = "rose" | "stone" | "sky";
type ConceptKey = "velour" | "northline" | "aurelia";

type ServiceItem = {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
};

type PortfolioItem = {
  name: string;
  type: string;
  image: string;
  accent: AccentKey;
  tagline: string;
  style: string;
  detailPage: ConceptKey;
};

export default function AgencyWebsite() {
  // FONT SETUP:
  // Put your licensed font file in /public/fonts/PluvixLuxury-Regular.otf

  // BRAND:
  // Change your agency name and tagline here.
  const brand = {
    name: "Apex Web Agency",
    tagline: "Premium-looking websites for modern businesses.",
  };

  // EMAIL SETUP:
  // Replace only if you want a different email later.
  const contactEmail = "vargasapex01@gmail.com";

  // PAGE STATE:
  // Main page switcher + intro overlay + thank-you popup.
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [entered, setEntered] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [activeConcept, setActiveConcept] = useState<PortfolioItem | null>(null);

  // NAVIGATION:
  // Add/remove top nav items here.
  const navItems = [
    { id: "home" as const, label: "Home", icon: Home },
    { id: "services" as const, label: "Services", icon: Briefcase },
    { id: "pricing" as const, label: "Pricing", icon: Receipt },
    { id: "portfolio" as const, label: "Portfolio", icon: ImageIcon },
    { id: "contact" as const, label: "Contact", icon: Phone },
  ];

  // SERVICES:
  // Edit what you offer here.
  const services: ServiceItem[] = [
    {
      title: "Custom Website Design",
      text: "I design high-end websites for your business so your customers see you as more professional, premium, and worth choosing.",
      icon: Wand2,
    },
    {
      title: "Build & Launch",
      text: "I build your website to feel smooth, modern, and polished so it creates a strong first impression for your customers.",
      icon: MonitorSmartphone,
    },
    {
      title: "Hosting & Care",
      text: "I keep your website updated, secure, and running smoothly so you don’t have to worry about anything.",
      icon: ShieldCheck,
    },
    {
      title: "AI Assistant Add-on",
      text: "I can add an AI assistant to your website that helps your customers, answers questions, and captures leads automatically.",
      icon: Bot,
      featured: true,
    },
  ];

  // FEATURES:
  // Main benefits clients care about.
  const features = [
    "Your website looks more professional and trustworthy",
    "Your business stands out from competitors",
    "Your customers get a smooth and modern experience",
    "Your site is built to convert visitors into leads",
    "You create a stronger first impression instantly",
    "You can scale with more features later",
  ];

  // HERO IMAGES:
  // Manual next/prev gallery on the homepage.
  const heroSlides = [
    {
      title: "Luxury studio aesthetic",
      subtitle: "Elegant, warm, and premium",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Modern business aesthetic",
      subtitle: "Clean, sharp, and professional",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "High-end brand aesthetic",
      subtitle: "Bold visuals with polished depth",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // VISUAL CONCEPTS:
  // Each card opens a hidden concept preview page.
  const portfolio: PortfolioItem[] = [
    {
      name: "Velour Studio",
      type: "Beauty & wellness brand",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      accent: "rose",
      tagline: "Soft, elegant beauty branding",
      style: "Warm neutrals, editorial spacing, calm luxury",
      detailPage: "velour",
    },
    {
      name: "Northline Build",
      type: "Premium construction website",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
      accent: "stone",
      tagline: "Clean and confident construction presence",
      style: "Architectural layout, bold typography, grounded tones",
      detailPage: "northline",
    },
    {
      name: "Aurelia Dental",
      type: "Luxury local business site",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
      accent: "sky",
      tagline: "Bright, polished healthcare aesthetic",
      style: "Airy sections, premium trust signals, refined clarity",
      detailPage: "aurelia",
    },
  ];

  // PRICING:
  // Change these prices anytime.
  const pricing = [
    {
      name: "Starter",
      price: "€300",
      subtitle: "A simple, clean website to get your business online with style.",
      monthly: "€19/mo care plan",
      items: [
        "1–3 page website",
        "Mobile responsive design",
        "Contact form",
        "Basic SEO setup",
        "Domain connection help",
      ],
    },
    {
      name: "Growth",
      price: "€500",
      subtitle: "The best-value option if you want a stronger and more complete online presence.",
      monthly: "€35/mo hosting + maintenance",
      items: [
        "Up to 6 pages",
        "Premium custom design",
        "Smooth animations",
        "Testimonials / gallery / FAQ",
        "Stronger SEO structure",
      ],
      featured: true,
    },
    {
      name: "Premium",
      price: "€1,200",
      subtitle: "A more standout website for brands that want a higher-end look and more features.",
      monthly: "€59/mo priority care",
      items: [
        "Larger custom website",
        "Advanced visuals and polish",
        "Lead funnel or booking flow",
        "More revisions included",
        "Priority support",
      ],
    },
  ];

  // ADD-ONS:
  const addons = [
    "Extra page: €90",
    "Blog setup: €120",
    "Copywriting help: €120",
    "Logo refresh: €90",
    "AI assistant add-on: €150 setup + €29/mo",
  ];

  // PROCESS:
  const process = [
    "Discovery and style direction",
    "Visual concept and layout",
    "Build and content setup",
    "Revisions and launch",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  const pageTitle: Record<PageId, string> = {
    home: "High-end websites that make your business look more professional.",
    services: "What I can build for your business.",
    pricing: "Simple pricing for a premium website.",
    portfolio: "See the level your website could reach.",
    contact: "Tell me what you want your website to look like.",
    concept: activeConcept ? `${activeConcept.name} concept preview` : "Concept preview",
  };

  const SectionHeader = ({
    eyebrow,
    title,
    text,
  }: {
    eyebrow: string;
    title: string;
    text?: string | null;
  }) => (
    <div className="max-w-3xl">
      <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6b00]">{eyebrow}</div>
      <h2 className="mt-3 text-3xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-pluvix)" }}>
        {title}
      </h2>
      {text ? <p className="mt-4 text-lg leading-8 text-zinc-600">{text}</p> : null}
    </div>
  );

  const NavButton = ({ item }: { item: (typeof navItems)[number] }) => {
    const Icon = item.icon;
    const active = currentPage === item.id;
    return (
      <button
        onClick={() => setCurrentPage(item.id)}
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
          active
            ? "bg-[linear-gradient(135deg,#d4af37,#c0c0c0,#ffffff)] text-zinc-900 shadow"
            : "text-zinc-600 hover:text-[#b8860b]"
        }`}
      >
        <Icon className="h-4 w-4" />
        {item.label}
      </button>
    );
  };

  const HomePage = () => (
    <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.45 }}>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-white/80 px-4 py-2 text-sm text-[#8b6b00] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Luxury-feel websites for modern businesses
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl tracking-tight text-zinc-950 md:text-7xl" style={{ fontFamily: "var(--font-pluvix)" }}>
              Clean websites that look premium.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
              You get a polished website that helps your business look more premium, more credible, and more worth choosing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setCurrentPage("portfolio")}
                className="rounded-full bg-[linear-gradient(135deg,#d4af37,#c0c0c0,#f5deb3)] px-6 py-3 text-sm font-medium text-zinc-900 shadow-lg shadow-[#d4af37]/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                See Example Sites
              </button>
              <button
                onClick={() => setCurrentPage("pricing")}
                className="rounded-full border border-zinc-200 bg-white/85 px-6 py-3 text-sm font-medium text-zinc-800 transition hover:border-[#d4af37]/40 hover:bg-[#fff9e8]"
              >
                View Pricing
              </button>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                ["Luxury look", "You look clean and modern"],
                ["Fair pricing", "You keep things simple"],
                ["Future-ready", "You can add AI later"],
              ].map(([title, text]) => (
                <motion.div key={title} whileHover={{ y: -4 }} className="rounded-3xl border border-black/5 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="mt-1 text-sm text-zinc-500">{text}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,#18181b,#3f3f46,#111827)] p-4 shadow-2xl shadow-black/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_35%)]" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <img src={heroSlides[heroSlide].image} alt={heroSlides[heroSlide].title} className="h-64 w-full object-cover shadow-lg" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent p-5 text-white">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#f3d67a]">{heroSlides[heroSlide].subtitle}</div>
                  <div className="mt-1 text-2xl font-semibold">{heroSlides[heroSlide].title}</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-[1.25rem] bg-white/90 p-4">
                  <Palette className="h-5 w-5 text-[#b8860b]" />
                  <div className="mt-2 text-sm font-semibold text-zinc-900">Premium style</div>
                </div>
                <div className="rounded-[1.25rem] bg-white/90 p-4">
                  <Zap className="h-5 w-5 text-[#b8860b]" />
                  <div className="mt-2 text-sm font-semibold text-zinc-900">Smooth motion</div>
                </div>
                <div className="rounded-[1.25rem] bg-white/90 p-4">
                  <Star className="h-5 w-5 text-[#b8860b]" />
                  <div className="mt-2 text-sm font-semibold text-zinc-900">High-end feel</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                >
                  Next →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-black/5 bg-[linear-gradient(135deg,#111827,#3f3f46,#1f2937)] p-8 text-white shadow-xl">
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#f8e7a1]">Why clients buy</div>
            <h2 className="mt-4 text-3xl tracking-tight" style={{ fontFamily: "var(--font-pluvix)" }}>
              Gives your website an aesthetic that feels sleek, modern, and premium.
            </h2>
            <p className="mt-4 leading-8 text-zinc-300">
              You immediately look more established, more trustworthy, and more worth contacting.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <motion.div key={feature} whileHover={{ y: -4 }} className="flex items-start gap-3 rounded-[1.5rem] border border-black/5 bg-white/85 p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#b8860b]" />
                <div className="text-zinc-700">{feature}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );

  const ServicesPage = () => (
    <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.45 }} className="mx-auto max-w-7xl px-6 py-14">
      <SectionHeader
        eyebrow="Services"
        title="Everything I can build for your business."
        text="You can offer your customers a better first impression with cleaner design, stronger structure, and a more premium online presence."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.title} whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className={`rounded-[2rem] border p-6 shadow-sm backdrop-blur ${service.featured ? "border-[#d4af37]/40 bg-[linear-gradient(180deg,#fffdf8,#fff4cc)] shadow-[#d4af37]/15 ring-1 ring-[#d4af37]/30" : "border-black/5 bg-white/80"}`}>
              <div className={`inline-flex rounded-2xl p-3 ${service.featured ? "bg-[linear-gradient(135deg,#d4af37,#fff2b8)] text-[#7a5b00] shadow-md" : "bg-[#fff7dd] text-[#b8860b]"}`}>
                <Icon className="h-5 w-5" />
              </div>
              {service.featured ? <div className="mt-4 inline-flex rounded-full bg-[linear-gradient(135deg,#d4af37,#c0c0c0)] px-3 py-1 text-xs font-medium text-zinc-900">Powerful upgrade</div> : null}
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{service.text}</p>
              {service.featured ? <div className="mt-4 rounded-2xl border border-[#d4af37]/30 bg-white/70 p-4 text-sm leading-6 text-zinc-700">Add this when you want your website to answer questions, collect leads, and work for you around the clock.</div> : null}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-14 rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-sm backdrop-blur md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6b00]">Process</div>
            <h2 className="mt-3 text-3xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-pluvix)" }}>
              A smooth process from idea to launch.
            </h2>
          </div>
          <div className="max-w-xl text-zinc-600">You get a clear path from first idea to finished website, without the process feeling confusing or messy.</div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {process.map((step, i) => (
            <motion.div key={step} whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-zinc-200 bg-[#fcfbf8] p-5">
              <div className="text-sm font-medium text-[#b8860b]">0{i + 1}</div>
              <div className="mt-3 text-lg font-semibold">{step}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const PricingPage = () => (
    <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.45 }} className="mx-auto max-w-7xl px-6 py-14">
      <SectionHeader
        eyebrow="Pricing"
        title="Fair pricing that still feels premium."
        text="You choose a simple upfront build fee and, if needed, a monthly plan for hosting, edits, updates, and maintenance."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {pricing.map((plan) => (
          <motion.div key={plan.name} whileHover={{ y: -8 }} transition={{ duration: 0.25 }} className={`rounded-[2rem] border p-7 shadow-sm ${plan.featured ? "border-[#d4af37]/50 bg-[linear-gradient(180deg,#ffffff,#fff8e1)] shadow-[#d4af37]/10" : "border-black/5 bg-white/85"}`}>
            {plan.featured ? <div className="mb-4 inline-flex rounded-full bg-[linear-gradient(135deg,#d4af37,#b8860b)] px-3 py-1 text-xs font-medium text-white">Most Popular</div> : null}
            <div className="text-lg font-semibold">{plan.name}</div>
            <div className="mt-2 text-4xl tracking-tight" style={{ fontFamily: "var(--font-pluvix)" }}>{plan.price}</div>
            <div className="mt-2 text-zinc-500">{plan.subtitle}</div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
              <BadgeDollarSign className="h-4 w-4 text-[#b8860b]" />
              {plan.monthly}
            </div>
            <div className="mt-6 space-y-3">
              {plan.items.map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#b8860b]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setCurrentPage("contact")} className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-medium transition ${plan.featured ? "bg-[linear-gradient(135deg,#d4af37,#c0c0c0)] text-zinc-900 hover:shadow-lg" : "border border-zinc-200 bg-white text-zinc-900 hover:border-[#d4af37]/40 hover:bg-[#fff9e8]"}`}>
              Choose {plan.name}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/85 p-7 shadow-sm">
          <div className="flex items-center gap-3">
            <LifeBuoy className="h-5 w-5 text-[#b8860b]" />
            <h3 className="text-xl font-semibold">What monthly plans should cover</h3>
          </div>
          <div className="mt-4 space-y-3 text-zinc-600">
            <p>You can keep your website updated with hosting, backups, small edits, dependency updates, uptime checks, and light support.</p>
            <p>A fair range to start is usually <span className="font-semibold text-zinc-900">€19–€59/month</span>.</p>
            <p>Your domain is often around <span className="font-semibold text-zinc-900">€10–€25/year</span>.</p>
          </div>
        </div>

        <motion.div whileHover={{ y: -6, scale: 1.01 }} className="relative overflow-hidden rounded-[2rem] border border-[#d4af37]/40 bg-[linear-gradient(180deg,#ffffff,#fff2bf)] p-7 shadow-lg shadow-[#d4af37]/10 ring-1 ring-[#d4af37]/20">
          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#d4af37]/20 blur-3xl" />
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-[linear-gradient(135deg,#d4af37,#fff2b8)] p-3 text-[#7a5b00] shadow-md">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">AI assistant add-on</h3>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#8b6b00]">High-value upgrade</div>
            </div>
          </div>
          <div className="mt-4 space-y-3 text-zinc-700">
            <p>You can turn your website into something that answers questions, captures leads, and supports customers even when you are not available.</p>
            <p>A strong entry point is <span className="font-semibold text-zinc-900">€150 setup + €29/month</span>.</p>
            <p>This is the kind of upgrade that makes your website feel smarter, more useful, and harder to leave behind.</p>
          </div>
          <button onClick={() => setCurrentPage("contact")} className="mt-6 rounded-full bg-[linear-gradient(135deg,#d4af37,#c0c0c0,#fff9dc)] px-5 py-3 text-sm font-medium text-zinc-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
            Add AI Assistant
          </button>
        </motion.div>
      </div>

      <div className="mt-10 rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-sm">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6b00]">Add-ons</div>
        <h2 className="mt-3 text-3xl tracking-tight" style={{ fontFamily: "var(--font-pluvix)" }}>
          Extra upgrades that raise your website’s value.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {addons.map((item) => (
            <motion.div key={item} whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-zinc-200 bg-[#fcfbf8] p-5 text-sm font-medium text-zinc-700">
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const PortfolioPage = () => {
    const accentStyles: Record<AccentKey, { chip: string; panel: string; pill: string }> = {
      rose: {
        chip: "text-[#9f496e]",
        panel: "from-[#fff7fb] to-[#fff1f5]",
        pill: "bg-[#fff0f6] text-[#9f496e]",
      },
      stone: {
        chip: "text-[#8a6a44]",
        panel: "from-[#fcfaf7] to-[#f5efe6]",
        pill: "bg-[#f6efe5] text-[#8a6a44]",
      },
      sky: {
        chip: "text-[#47739d]",
        panel: "from-[#f7fbff] to-[#edf6ff]",
        pill: "bg-[#eef6ff] text-[#47739d]",
      },
    };

    return (
      <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.45 }} className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Visual concepts" title="Show clients the standard they could have." text={null} />
          <div className="max-w-xl text-zinc-600">These concepts are styled to feel different from Apex so clients can picture a website tailored to their own brand, not yours.</div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {portfolio.map((item) => {
            const accent = accentStyles[item.accent];
            return (
              <motion.button
                key={item.name}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  setActiveConcept(item);
                  setCurrentPage("concept");
                }}
                className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white text-left shadow-sm"
              >
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
                </div>
                <div className={`bg-gradient-to-b ${accent.panel} p-6`}>
                  <div className={`text-sm uppercase tracking-[0.18em] ${accent.chip}`}>{item.type}</div>
                  <div className="mt-2 text-2xl font-semibold">{item.name}</div>
                  <div className="mt-2 text-sm text-zinc-600">{item.tagline}</div>

                  <div className="mt-5 rounded-[1.5rem] border border-black/5 bg-white/80 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Style direction</div>
                        <div className="mt-1 text-sm font-medium text-zinc-800">{item.style}</div>
                      </div>
                      <div className={`rounded-full px-3 py-1 text-xs font-medium ${accent.pill}`}>Custom feel</div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="h-3 w-24 rounded-full bg-black/10" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-2xl bg-white shadow-sm" />
                        <div className="h-16 rounded-2xl bg-white/80 shadow-sm" />
                        <div className="h-16 rounded-2xl bg-white/60 shadow-sm" />
                      </div>
                      <div className="h-24 rounded-[1.25rem] bg-white/90 shadow-sm" />
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-700">
                    View concept page <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    );
  };

  const ConceptPage = () => {
    if (!activeConcept) return null;

    const conceptDetails: Record<ConceptKey, { hero: string; bg: string; chip: string; button: string }> = {
      velour: {
        hero: "A beauty website with a softer, editorial luxury feel.",
        bg: "from-[#fff9fb] via-[#fff4f7] to-[#ffffff]",
        chip: "text-[#9f496e]",
        button: "bg-[#9f496e] text-white",
      },
      northline: {
        hero: "A construction website with a stronger, architectural presence.",
        bg: "from-[#faf7f2] via-[#f3ede4] to-[#ffffff]",
        chip: "text-[#8a6a44]",
        button: "bg-[#8a6a44] text-white",
      },
      aurelia: {
        hero: "A dental website with a bright, clean, trust-focused aesthetic.",
        bg: "from-[#f8fbff] via-[#eef6ff] to-[#ffffff]",
        chip: "text-[#47739d]",
        button: "bg-[#47739d] text-white",
      },
    };

    const detail = conceptDetails[activeConcept.detailPage];

    return (
      <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.45 }} className="mx-auto max-w-7xl px-6 py-14">
        <div className={`overflow-hidden rounded-[2.5rem] border border-black/5 bg-gradient-to-b ${detail.bg} shadow-sm`}>
          <div className="grid gap-10 p-8 md:grid-cols-[1fr_0.95fr] md:p-12">
            <div>
              <button
                onClick={() => {
                  setCurrentPage("portfolio");
                  setActiveConcept(null);
                }}
                className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-white"
              >
                ← Back to concepts
              </button>
              <div className={`mt-8 text-sm uppercase tracking-[0.2em] ${detail.chip}`}>{activeConcept.type}</div>
              <h2 className="mt-4 text-4xl tracking-tight md:text-6xl" style={{ fontFamily: "var(--font-pluvix)" }}>
                {activeConcept.name}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">{detail.hero}</p>
              <p className="mt-4 max-w-2xl text-zinc-600">This hidden concept page shows a more tailored preview so your clients can imagine what their own website could feel like beyond the main portfolio card.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className={`rounded-full px-6 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 ${detail.button}`}>
                  Book this style
                </button>
                <button onClick={() => setCurrentPage("contact")} className="rounded-full border border-black/10 bg-white/85 px-6 py-3 text-sm font-medium text-zinc-800 transition hover:bg-white">
                  Ask for a similar website
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <img src={activeConcept.image} alt={activeConcept.name} className="h-72 w-full rounded-[2rem] object-cover shadow-lg" />
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[1.5rem] border border-black/5 bg-white/85 p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Mood</div>
                  <div className="mt-2 text-lg font-semibold">{activeConcept.tagline}</div>
                </div>
                <div className="rounded-[1.5rem] border border-black/5 bg-white/85 p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Direction</div>
                  <div className="mt-2 text-lg font-semibold">{activeConcept.style}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-t border-black/5 bg-white/50 p-8 md:grid-cols-3 md:p-12">
            <div className="rounded-[1.75rem] bg-white/85 p-6 shadow-sm">
              <div className="text-sm uppercase tracking-[0.18em] text-zinc-500">Hero section</div>
              <div className="mt-3 text-xl font-semibold">Clear value statement</div>
              <p className="mt-2 leading-7 text-zinc-600">A strong first impression with a style that fits the business, not a generic template look.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white/85 p-6 shadow-sm">
              <div className="text-sm uppercase tracking-[0.18em] text-zinc-500">Content blocks</div>
              <div className="mt-3 text-xl font-semibold">Premium page flow</div>
              <p className="mt-2 leading-7 text-zinc-600">Sections can be styled around services, trust, visuals, and clear actions for the customer.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white/85 p-6 shadow-sm">
              <div className="text-sm uppercase tracking-[0.18em] text-zinc-500">Conversion</div>
              <div className="mt-3 text-xl font-semibold">Professional lead capture</div>
              <p className="mt-2 leading-7 text-zinc-600">The final site can guide visitors into contacting the business, booking, or requesting a quote.</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const ContactPage = () => (
    <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.45 }} className="mx-auto max-w-7xl px-6 py-14">
      <div className="overflow-hidden rounded-[2.25rem] border border-black/5 bg-[linear-gradient(135deg,#111827,#3f3f46,#18181b)] p-8 text-white shadow-2xl md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#f8e7a1]">Start a project</div>
            <h2 className="mt-4 max-w-2xl text-3xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-pluvix)" }}>
              Leave an inquiry and tell me what you want built.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
              Share your name, email, phone number, the type of website you want, and what you want it to feel like.
            </p>
            <a href={`mailto:${contactEmail}`} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15">
              <Mail className="h-4 w-4" />
              Email Me Directly
            </a>
          </div>

          <form action={`https://formsubmit.co/${contactEmail}`} method="POST" onSubmit={() => setShowThankYou(true)} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            {/* FORM SETTINGS: replace _next later with your real thank-you URL if needed. */}
            <input type="hidden" name="_subject" value="New Apex Web Agency Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://example.com/thanks" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <span className="mb-2 block text-zinc-300">Name</span>
                <input name="name" required className="w-full rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-zinc-900 outline-none transition focus:border-[#d4af37]" placeholder="Your name" />
              </label>
              <label className="text-sm">
                <span className="mb-2 block text-zinc-300">Email</span>
                <input type="email" name="email" required className="w-full rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-zinc-900 outline-none transition focus:border-[#d4af37]" placeholder="you@example.com" />
              </label>
              <label className="text-sm">
                <span className="mb-2 block text-zinc-300">Phone number</span>
                <input name="phone" className="w-full rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-zinc-900 outline-none transition focus:border-[#d4af37]" placeholder="Your number" />
              </label>
              <label className="text-sm">
                <span className="mb-2 block text-zinc-300">Website type</span>
                <input name="website_type" className="w-full rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-zinc-900 outline-none transition focus:border-[#d4af37]" placeholder="Portfolio, business site, landing page..." />
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <span className="mb-2 block text-zinc-300">Project description</span>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full rounded-[1.5rem] border border-white/10 bg-white/95 px-4 py-3 text-zinc-900 outline-none transition focus:border-[#d4af37]"
                placeholder="Tell me what you want, what style you like, and what your website should do for your business."
              />
            </label>

            <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#d4af37,#c0c0c0,#ffffff)] px-6 py-3 text-sm font-medium text-zinc-950 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
              <Send className="h-4 w-4" />
              Leave an Inquiry
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "services":
        return <ServicesPage />;
      case "pricing":
        return <PricingPage />;
      case "portfolio":
        return <PortfolioPage />;
      case "contact":
        return <ContactPage />;
      case "concept":
        return <ConceptPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'PluvixLuxury';
          src: url('/fonts/PluvixLuxury-Regular.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        :root {
          --font-pluvix: 'PluvixLuxury', 'Times New Roman', serif;
        }
      `}</style>

      <div className="min-h-screen bg-[#f5f3ef] text-zinc-900">
        {/* BACKGROUND: edit these gradients for the overall mood. */}
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(192,192,192,0.16),transparent_30%),linear-gradient(to_bottom,#faf9f7,#f2f0eb,#ffffff)]" />

        {/* INTRO OVERLAY */}
        <AnimatePresence>
          {!entered && (
            <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.8 } }} className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.16),transparent_25%),linear-gradient(135deg,#0f172a,#3f3f46,#111827)]">
              <motion.button onClick={() => setEntered(true)} whileHover={{ scale: 1.04, rotate: -2 }} whileTap={{ scale: 0.97 }} className="group rounded-[2.5rem] border border-white/20 bg-white/10 px-12 py-10 text-white shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-center gap-4">
                  <Feather className="h-14 w-14 -rotate-[34deg] text-[#f3d67a] drop-shadow-[0_0_18px_rgba(212,175,55,0.35)] md:h-16 md:w-16" />
                  <div className="bg-[linear-gradient(135deg,#f8e7a1,#d4af37,#c0c0c0,#ffffff)] bg-clip-text text-4xl tracking-[0.28em] text-transparent md:text-6xl" style={{ fontFamily: "var(--font-pluvix)" }}>
                    APEX
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70 transition group-hover:opacity-100" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* THANK YOU POPUP */}
        <AnimatePresence>
          {showThankYou && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-6 backdrop-blur-sm">
              <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98, y: 10 }} transition={{ duration: 0.25 }} className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-[#d4af37]/30 bg-[linear-gradient(180deg,#ffffff,#fbf7ea)] p-8 shadow-2xl">
                <button onClick={() => setShowThankYou(false)} className="absolute right-4 top-4 rounded-full border border-zinc-200 bg-white p-2 text-zinc-600 transition hover:bg-zinc-50" aria-label="Close popup">
                  <X className="h-4 w-4" />
                </button>
                <motion.div initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 240, damping: 16 }} className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d4af37,#fff2b8)] text-[#7a5b00] shadow-md">
                  <Check className="h-8 w-8" />
                </motion.div>
                <div className="mt-5 text-center">
                  <div className="text-sm uppercase tracking-[0.2em] text-[#8b6b00]">Inquiry sent</div>
                  <h3 className="mt-3 text-3xl tracking-tight text-zinc-900" style={{ fontFamily: "var(--font-pluvix)" }}>
                    Thank you for reaching out.
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-600">Your message is on its way to Apex Web Agency. You should hear back soon after your inquiry is reviewed.</p>
                </div>
                <div className="mt-6 flex justify-center">
                  <button onClick={() => setShowThankYou(false)} className="rounded-full bg-[linear-gradient(135deg,#d4af37,#c0c0c0,#ffffff)] px-6 py-3 text-sm font-medium text-zinc-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div animate={{ opacity: entered ? 1 : 0.2 }} transition={{ duration: 0.8 }}>
          <header className="sticky top-0 z-30 border-b border-black/5 bg-white/65 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-[#d4af37]/30 bg-white/70 p-2 shadow-sm">
                  <Feather className="h-5 w-5 -rotate-[34deg] text-[#b8860b]" />
                </div>
                <div>
                  <div className="text-lg tracking-tight" style={{ fontFamily: "var(--font-pluvix)" }}>{brand.name}</div>
                  <div className="text-sm text-zinc-500">Luxury web design • launch • support</div>
                </div>
              </div>

              <nav className="hidden items-center gap-2 md:flex">
                {navItems.map((item) => (
                  <NavButton key={item.id} item={item} />
                ))}
              </nav>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-6 pt-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/70 px-6 py-5 shadow-sm backdrop-blur">
              <div className="text-sm uppercase tracking-[0.18em] text-[#8b6b00]">Apex Web Agency</div>
              <div className="mt-2 text-2xl tracking-tight text-zinc-900 md:text-3xl" style={{ fontFamily: "var(--font-pluvix)" }}>
                {pageTitle[currentPage]}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.main key={currentPage + (activeConcept?.detailPage ?? "")} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }}>
              {renderPage()}
            </motion.main>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
