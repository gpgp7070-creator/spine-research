'use client'

import { motion } from 'framer-motion'
import { researchData } from '@/lib/research-data'

export function DiscussionSection() {
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Interpretation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Discussion</h2>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-primary/20 bg-card backdrop-blur-sm"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              {researchData.discussion}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-primary/10 border border-primary/20"
              >
                <div className="text-3xl font-bold text-accent mb-2">43%</div>
                <div className="text-sm text-muted-foreground">Mean pain reduction in intervention group vs 12% in control</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-accent/10 border border-accent/20"
              >
                <div className="text-3xl font-bold text-accent mb-2">67%</div>
                <div className="text-sm text-muted-foreground">Improvement in postural awareness scores</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-primary/10 border border-primary/20"
              >
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Safety - no serious adverse events reported</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
