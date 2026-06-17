'use client'

import { motion } from 'framer-motion'
import { researchData } from '@/lib/research-data'

export function IntroductionSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Introduction</h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <div className="p-8 rounded-2xl border border-primary/20 bg-card backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-accent">Background</h3>
              <p className="text-lg leading-relaxed text-foreground/90">
                {researchData.introduction.background}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <div className="p-8 rounded-2xl border border-accent/20 bg-card backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-accent">Research Objective</h3>
              <p className="text-lg leading-relaxed text-foreground/90">
                {researchData.introduction.objective}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <div className="p-8 rounded-2xl border border-primary/20 bg-card backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-accent">Clinical Significance</h3>
              <p className="text-lg leading-relaxed text-foreground/90">
                {researchData.introduction.significance}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
