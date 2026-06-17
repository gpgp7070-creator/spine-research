'use client'

import { motion } from 'framer-motion'

function Counter({ value, label, delay }: { value: number | string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-card border border-primary/10 text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-accent mb-2"
      >
        {value}
      </motion.div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}

export function DashboardSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4 bg-background/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Study Overview
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Methodology</h2>
        </motion.div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Counter value={186} label="Total Participants" delay={0} />
          <Counter value="18-23" label="Age" delay={0.1} />
          <Counter value="PHAS & NRS" label="Outcome Measures" delay={0.2} />
        </div>
      </div>
    </motion.section>
  )
}