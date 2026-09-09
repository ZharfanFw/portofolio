"use client";

import React, { useState } from "react";
import { DiagonalSection } from "@/components/shared/diagonal-section";
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from "@/components/shared/motion-reveal";
import { SectionHeader } from "@/components/shared/section-header";

interface ArchitecturalFeature {
  title: string;
  badge: string;
  problem: string;
  solution: string;
  impact: string;
}

const architecturalFeatures: ArchitecturalFeature[] = [
  {
    title: "Order Snapshot Integrity Pattern",
    badge: "Database & Drizzle ORM",
    problem: "In traditional relational designs, changing a menu item's price or name in master tables retroactively corrupts historical bookkeeping reports.",
    solution: "Engineered immutable transaction line-items that capture deep JSON snapshots of price, variant choices, and tax rules at exact checkout timestamp.",
    impact: "Zero historical data drift; audit-ready sales records even through dynamic menu adjustments."
  },
  {
    title: "Zero-Driver Thermal Receipt Pipeline",
    badge: "Hardware & Web API",
    problem: "Installing proprietary printer drivers across multiple Android/iPad tablets in a cafe is error-prone and breaks during OS updates.",
    solution: "Designed raw CSS Print API media queries (@media print) optimized for 58mm/80mm ESC/POS hardware, combined with automatic kitchen/customer slip splitting.",
    impact: "Instant plug-and-play receipt printing from any browser or tablet with sub-100ms print dispatch."
  },
  {
    title: "Runtime Adaptability: Elysia to Hono Migration",
    badge: "Runtime & Infrastructure",
    problem: "Initially developed with Elysia on Bun, the on-premise home server environment had hardware CPU architecture constraints that prevented Bun from running reliably.",
    solution: "Refactored routing to Hono's universal web standard API. Enabled seamless execution on standard Node.js & Docker environments while keeping lightweight overhead and TypeBox/Zod validations.",
    impact: "Hardware-agnostic deployment across home server CPUs with <20ms response time and rock-solid service stability."
  }
];

export function CaseStudy() {
  const [activeTab, setActiveTab] = useState<"flow" | "schema" | "stack">("flow");

  return (
    <DiagonalSection id="case-study" bgClassName="bg-paper" direction="left">
      <div className="flex flex-col gap-8 py-4 w-full">
        {/* Section Header */}
        <SectionHeader 
          number="04" 
          title="CASE STUDY" 
          subtitle="ARCHITECTURAL DEEP DIVE // WARGI KOPI PRODUCTION POS" 
        />

        {/* Introduction Banner */}
        <MotionReveal variant="fade-up" className="bg-paper-2 border border-rule/80 rounded-xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              // Real-World Systems Engineering
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink uppercase tracking-wide">
              Engineering A Resilient Point-of-Sale System
            </h3>
            <p className="font-body text-sm sm:text-base text-ink-2 leading-relaxed">
              WarKop POS is a complete operational suite built for coffee shop retail. 
              Instead of generic CRUD, it tackles mission-critical retail challenges: split-slip kitchen routing, offline-capable tablet UX, and historical revenue immutability.
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0 bg-paper-3 p-4 rounded-lg border border-rule/60 w-full md:w-auto">
            <div className="flex items-center justify-between gap-4 text-xs font-mono">
              <span className="text-muted">Target Architecture:</span>
              <span className="text-accent font-bold">Modular Monolith</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs font-mono">
              <span className="text-muted">Framework Runtime:</span>
              <span className="text-ink font-bold">Hono (Web Standards)</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs font-mono">
              <span className="text-muted">Database Engine:</span>
              <span className="text-ink font-bold">PostgreSQL 16</span>
            </div>
          </div>
        </MotionReveal>

        {/* Interactive Architecture Visualization */}
        <MotionReveal variant="fade-up" delay={0.15} className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-rule pb-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
              System Pipeline & Data Flow
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("flow")}
                className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "flow" ? "bg-accent text-accent-ink font-bold" : "bg-paper-3 text-ink-2 hover:text-ink"
                }`}
              >
                Pipeline Flow
              </button>
              <button
                onClick={() => setActiveTab("schema")}
                className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "schema" ? "bg-accent text-accent-ink font-bold" : "bg-paper-3 text-ink-2 hover:text-ink"
                }`}
              >
                Snapshot Pattern
              </button>
              <button
                onClick={() => setActiveTab("stack")}
                className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "stack" ? "bg-accent text-accent-ink font-bold" : "bg-paper-3 text-ink-2 hover:text-ink"
                }`}
              >
                Tech Matrix
              </button>
            </div>
          </div>

          {/* Tab Content 1: Pipeline Flow */}
          {activeTab === "flow" && (
            <div className="bg-paper-3 border border-rule/70 rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                <div className="flex flex-col p-4 rounded-lg bg-paper-2 border border-rule/70 relative group hover:border-accent transition-colors">
                  <span className="font-mono text-xs text-accent font-bold">01. Tablet Client</span>
                  <h4 className="font-heading text-lg font-bold text-ink uppercase mt-1">PWA POS Interface</h4>
                  <p className="font-body text-xs text-ink-2 mt-2 leading-relaxed">
                    Next.js + Tailwind UI running standalone on cashier tablets with offline cart persistence.
                  </p>
                </div>

                <div className="flex flex-col p-4 rounded-lg bg-paper-2 border border-rule/70 relative group hover:border-accent transition-colors">
                  <span className="font-mono text-xs text-accent font-bold">02. REST Gateway</span>
                  <h4 className="font-heading text-lg font-bold text-ink uppercase mt-1">Hono / Node.js Server</h4>
                  <p className="font-body text-xs text-ink-2 mt-2 leading-relaxed">
                    Standards-based web fetch API routing, role-based JWT auth guards, and CPU-agnostic home server stability.
                  </p>
                </div>

                <div className="flex flex-col p-4 rounded-lg bg-paper-2 border border-rule/70 relative group hover:border-accent transition-colors">
                  <span className="font-mono text-xs text-accent font-bold">03. Persistence</span>
                  <h4 className="font-heading text-lg font-bold text-ink uppercase mt-1">Drizzle + Postgres</h4>
                  <p className="font-body text-xs text-ink-2 mt-2 leading-relaxed">
                    Relational PostgreSQL schema enforcing atomic ACID order commits and snapshot archiving.
                  </p>
                </div>

                <div className="flex flex-col p-4 rounded-lg bg-paper-2 border border-rule/70 relative group hover:border-accent transition-colors">
                  <span className="font-mono text-xs text-accent font-bold">04. Hardware Dispatch</span>
                  <h4 className="font-heading text-lg font-bold text-ink uppercase mt-1">Thermal Receipt</h4>
                  <p className="font-body text-xs text-ink-2 mt-2 leading-relaxed">
                    Automated kitchen preparation slips and receipt printing without driver installation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Snapshot Schema */}
          {activeTab === "schema" && (
            <div className="bg-paper-3 border border-rule/70 rounded-xl p-6 shadow-md font-mono text-xs text-ink-2 overflow-x-auto">
              <div className="text-accent font-bold mb-3">// Order Snapshot Pattern Implementation (Drizzle ORM)</div>
              <pre className="text-xs leading-relaxed text-ink/90">
{`// Orders Table: Immutable financial reference
export const orders = pgTable("orders", {
  id: uuid("id").defaultRandom().primaryKey(),
  orderNumber: varchar("order_number", { length: 32 }).notNull().unique(),
  status: orderStatusEnum("status").default("pending").notNull(),
  subtotal: integer("subtotal").notNull(), // Exact amount in IDR cents
  taxAmount: integer("tax_amount").notNull(),
  totalAmount: integer("total_amount").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Order Items Table: Preserves name & price snapshot at transaction time
export const orderItems = pgTable("order_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  orderId: uuid("order_id").references(() => orders.id).notNull(),
  menuItemId: uuid("menu_item_id").references(() => menuItems.id),
  // Snapshots protect against future master data price mutations:
  itemNameSnapshot: varchar("item_name_snapshot", { length: 128 }).notNull(),
  unitPriceSnapshot: integer("unit_price_snapshot").notNull(),
  quantity: integer("quantity").notNull(),
  subtotal: integer("subtotal").notNull(),
});`}
              </pre>
            </div>
          )}

          {/* Tab Content 3: Tech Matrix */}
          {activeTab === "stack" && (
            <div className="bg-paper-3 border border-rule/70 rounded-xl p-6 shadow-md grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="flex flex-col gap-2 p-3 bg-paper-2 rounded-lg border border-rule/60">
                <span className="text-accent font-bold uppercase tracking-wider">Backend Framework</span>
                <span className="text-ink font-semibold">Hono (migrated from Elysia)</span>
                <p className="text-muted font-sans text-xs">Ultra-lightweight web standards framework chosen for universal runtime portability across home server CPUs.</p>
              </div>
              <div className="flex flex-col gap-2 p-3 bg-paper-2 rounded-lg border border-rule/60">
                <span className="text-accent font-bold uppercase tracking-wider">Database & ORM</span>
                <span className="text-ink font-semibold">PostgreSQL 16 + Drizzle</span>
                <p className="text-muted font-sans text-xs">Type-safe SQL queries with zero overhead, automatic migrations, and native connection pooling.</p>
              </div>
              <div className="flex flex-col gap-2 p-3 bg-paper-2 rounded-lg border border-rule/60">
                <span className="text-accent font-bold uppercase tracking-wider">Frontend / Client</span>
                <span className="text-ink font-semibold">Next.js + PWA</span>
                <p className="text-muted font-sans text-xs">App router with optimized client-side state caching and instant touch-screen responsiveness.</p>
              </div>
            </div>
          )}
        </MotionReveal>

        {/* Architectural Pillars / Highlights */}
        <MotionStaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {architecturalFeatures.map((item, idx) => (
            <MotionStaggerItem
              key={idx}
              className="flex flex-col justify-between p-6 rounded-xl bg-paper-3 border border-rule/70 hover:border-accent/60 transition-all duration-300 shadow-md gap-4"
            >
              <div className="flex flex-col gap-2.5">
                <span className="font-mono text-[11px] font-bold text-accent uppercase tracking-wider bg-paper-2 border border-rule/60 px-2.5 py-1 rounded w-fit">
                  {item.badge}
                </span>
                <h4 className="font-heading text-xl font-bold text-ink uppercase tracking-wide leading-snug">
                  {item.title}
                </h4>
                <div className="flex flex-col gap-2 text-xs font-body leading-relaxed mt-1">
                  <p className="text-muted">
                    <strong className="text-ink font-semibold">Challenge:</strong> {item.problem}
                  </p>
                  <p className="text-ink-2">
                    <strong className="text-accent font-semibold">Engineering Solution:</strong> {item.solution}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-rule/50 flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-bold">Business / Tech Impact:</span>
                <span className="font-mono text-xs font-semibold text-accent">{item.impact}</span>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </div>
    </DiagonalSection>
  );
}
