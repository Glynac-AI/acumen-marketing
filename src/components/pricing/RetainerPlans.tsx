// src/components/pricing/RetainerPlans.tsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  HelpCircle,
  X,
  Shield,
  BarChart,
  Users,
  ArrowRight // kept for the "Transparent Reporting" icon only
} from "lucide-react";

/**
 * 2026 UI/UX upgrades:
 * - Frosted glass cards over a soft radial gradient grid background
 * - Clear visual hierarchy: plan ribbon, price band, meta chips
 * - Reduced-motion support + subtle hover lift and focus outlines
 * - Accessible tooltips (aria-expanded + Esc to close)
 * - Compact feature list with improved density + readable spacing
 * - Monthly/Annual toggle (Annual shows 10% savings in-line)
 * - No CTAs rendered (per your previous request)
 */

type PlanKey = "Foundation" | "Growth" | "Enterprise";

type Plan = {
  name: PlanKey;
  subtitle: string;
  aumRange: string;
  priceMonthly: number; // numeric for easy calc
  period: "per month";
  minTerm: string;
  highlight?: boolean;
  description: string;
  features: string[];
  tooltips?: Record<string, string>;
};

const BASE_PLANS: Plan[] = [
  {
    name: "Foundation",
    subtitle: "For smaller RIAs and independent advisors",
    aumRange: "$50M - $250M AUM",
    priceMonthly: 8000,
    period: "per month",
    minTerm: "6-month minimum term",
    highlight: false,
    description:
      "Essential marketing services to establish a strong digital presence and begin generating qualified leads.",
    features: [
      "Compliance-reviewed content (6-8 pieces monthly)",
      "Website optimization & SEO fundamentals",
      "Digital presence management",
      "Social media strategy & execution",
      "Monthly compliance review sessions",
      "Quarterly strategy meetings",
      "Email newsletter management",
      "Basic performance reporting",
    ],
    tooltips: {
      "Website optimization & SEO fundamentals":
        "On-page SEO, metadata optimization, content structure improvements, and technical SEO recommendations.",
      "Compliance-reviewed content (6-8 pieces monthly)":
        "Blog posts, articles, and social content reviewed by our compliance specialists before publication.",
    },
  },
  {
    name: "Growth",
    subtitle: "For established wealth management firms",
    aumRange: "$250M - $1B AUM",
    priceMonthly: 14000,
    period: "per month",
    minTerm: "6-month minimum term",
    highlight: true,
    description:
      "Comprehensive marketing program for firms seeking significant growth through multi-channel strategies.",
    features: [
      "All Foundation services",
      "Advanced content strategy",
      "Paid media campaign management",
      "Personalized thought leadership",
      "Webinar & event support",
      "Quarterly marketing attribution reports",
      "Monthly strategy sessions",
      "Dedicated account manager",
      "Lead nurturing workflows",
      "Competitive analysis & insights",
    ],
    tooltips: {
      "Advanced content strategy":
        "Comprehensive content calendar with premium assets like whitepapers, research reports, and targeted client education materials.",
      "Quarterly marketing attribution reports":
        "Detailed reporting showing how marketing activities contribute to prospect engagement, lead generation, and AUM growth.",
    },
  },
  {
    name: "Enterprise",
    subtitle: "For larger wealth management institutions",
    aumRange: "$1B+ AUM",
    priceMonthly: 25000,
    period: "per month",
    minTerm: "12-month minimum term",
    highlight: false,
    description:
      "Premium, fully-managed marketing solution for wealth management firms with sophisticated needs and ambitious growth targets.",
    features: [
      "All Growth services",
      "Account-based marketing",
      "Custom research & whitepapers",
      "Executive positioning program",
      "Marketing technology integration",
      "Comprehensive digital strategy",
      "Advanced analytics dashboard",
      "Bi-weekly strategy sessions",
      "Priority support & expedited delivery",
      "Multi-location coordination",
    ],
    tooltips: {
      "Account-based marketing":
        "Targeted, personalized marketing campaigns directed at specific high-value prospects and institutions.",
      "Executive positioning program":
        "Comprehensive strategy to position key executives as thought leaders through ghostwritten articles, speaking opportunities, and media placements.",
    },
  },
];

const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const RetainerPlans: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  // Close tooltips with Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTooltipOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const plans = useMemo(() => BASE_PLANS, []);

  const calcPrice = (monthly: number) => {
    if (billingCycle === "monthly") return { label: formatUSD(monthly), note: "per month" };
    const annual = Math.round(monthly * 12 * 0.9); // 10% off
    const eqMonthly = Math.round(annual / 12);
    return {
      label: `${formatUSD(annual)} / yr`,
      note: `≈ ${formatUSD(eqMonthly)}/mo (10% off)`,
    };
  };

  return (
    <div className="relative">
      {/* Background: subtle grid + radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(58,86,232,0.18),rgba(58,86,232,0)_60%)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)] opacity-40"
             style={{
               backgroundImage:
                 "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
               backgroundSize: "28px 28px",
             }}
        />
      </div>

      <div className="container mx-auto px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header + Billing toggle */}
          <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground">
                Retainer Plans
              </h2>
              <p className="mt-2 text-muted-foreground">
                Purpose-built programs for wealth management growth — compliance-aware, data-driven, and scalable.
              </p>
            </div>

            <div className="flex items-center">
              <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm">
                <button
                  type="button"
                  aria-pressed={billingCycle === "monthly"}
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-4 py-2 text-sm rounded-full transition ${
                    billingCycle === "monthly"
                      ? "bg-ph text-white"
                      : "text-foreground hover:bg-gray-50"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  aria-pressed={billingCycle === "annual"}
                  onClick={() => setBillingCycle("annual")}
                  className={`px-4 py-2 text-sm rounded-full transition ${
                    billingCycle === "annual"
                      ? "bg-ph text-white"
                      : "text-foreground hover:bg-gray-50"
                  }`}
                >
                  Annual <span className="ml-1 text-xs opacity-80">(10% off)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const price = calcPrice(plan.priceMonthly);
              const glass =
                "backdrop-blur-md bg-white/65 supports-[backdrop-filter]:bg-white/55 dark:bg-white/10";
              const ring =
                plan.highlight ? "ring-1 ring-ph/40 shadow-[0_10px_40px_-10px_rgba(58,86,232,0.35)]" : "ring-1 ring-gray-200/80 shadow-sm";

              return (
                <motion.article
                  key={plan.name}
                  className={`relative overflow-hidden rounded-2xl ${glass} ${ring} group`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.06 * index }}
                  whileHover={{ y: -6 }}
                >
                  {/* Glow bar for highlight */}
                  {plan.highlight && (
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-ph via-indigo-500 to-ph" />
                  )}

                  {/* Decorative orb */}
                  <div
                    aria-hidden
                    className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gradient-to-br from-ph/20 to-transparent blur-2xl"
                  />

                  <div className="p-7">
                    {/* Plan header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-medium text-foreground">{plan.name}</h3>
                        {plan.highlight && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-ph/10 text-ph border border-ph/20">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mt-2">{plan.subtitle}</p>
                      <div className="mt-3 inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#F8FAFF] border border-gray-200 text-muted-foreground text-xs">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                        {plan.aumRange}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-display text-foreground">{price.label}</span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                        <span>{plan.minTerm}</span>
                        <span className="opacity-50">•</span>
                        <span>{price.note}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>

                    {/* Features */}
                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-foreground mb-4">
                        Included in this plan
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => {
                          const tipKey = `${plan.name}-${idx}`;
                          const hasTip = !!plan.tooltips?.[feature];

                          return (
                            <li key={tipKey} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-ph mr-3 mt-0.5 flex-shrink-0" />
                              <div className="flex items-start gap-2">
                                <span className="text-muted-foreground">{feature}</span>

                                {hasTip && (
                                  <div className="relative">
                                    <button
                                      type="button"
                                      aria-haspopup="dialog"
                                      aria-expanded={tooltipOpen === tipKey}
                                      onClick={() =>
                                        setTooltipOpen((p) => (p === tipKey ? null : tipKey))
                                      }
                                      className="mt-0.5 text-muted-foreground hover:text-ph transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ph/50 rounded"
                                    >
                                      <HelpCircle className="w-4 h-4" />
                                      <span className="sr-only">More info</span>
                                    </button>

                                    <AnimatePresence>
                                      {tooltipOpen === tipKey && (
                                        <motion.div
                                          role="dialog"
                                          aria-modal="true"
                                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                          animate={{ opacity: 1, y: 0, scale: 1 }}
                                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                          transition={{ duration: 0.18 }}
                                          className="absolute z-50 bottom-full left-0 mb-2 w-72 rounded-lg border border-gray-200 bg-white p-3 shadow-xl"
                                        >
                                          <button
                                            type="button"
                                            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground focus:outline-none"
                                            onClick={() => setTooltipOpen(null)}
                                            aria-label="Close tooltip"
                                          >
                                            <X className="w-4 h-4" />
                                          </button>
                                          <p className="text-sm text-muted-foreground pr-6">
                                            {plan.tooltips?.[feature]}
                                          </p>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {/* (No per-plan CTA, intentionally omitted) */}
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Value-add section */}
          <motion.section
            className="mt-16 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <h3 className="text-xl font-medium text-foreground mb-2">Every Plan Includes</h3>
                <p className="text-muted-foreground">
                  Core services and benefits provided with all retainer engagements
                </p>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Compliance Integration",
                    description:
                      "SEC and FINRA compliance considerations built into every aspect of your marketing",
                  },
                  {
                    icon: <BarChart className="w-5 h-5" />,
                    title: "Performance Tracking",
                    description:
                      "Clear measurement of marketing activities and their impact on business goals",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Dedicated Team",
                    description: "Marketing specialists with deep wealth management expertise",
                  },
                  {
                    icon: <ArrowRight className="w-5 h-5" />,
                    title: "Transparent Reporting",
                    description: "Regular updates on progress, activities, and results",
                  },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-3 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Strategy Phase note */}
          <motion.section
            className="mt-8 p-6 border border-gray-200 bg-white rounded-2xl flex items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 mr-4 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-medium text-foreground mb-1">Initial Strategy Phase</h4>
              <p className="text-sm text-muted-foreground">
                All engagements begin with a paid strategy phase ($5,000–10,000) to establish goals,
                compliance requirements, and create a customized marketing roadmap. This ensures our
                approach is tailored specifically to your firm's needs and objectives.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default RetainerPlans;
