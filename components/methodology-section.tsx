'use client'

import { motion } from 'framer-motion'
import { researchData } from '@/lib/research-data'

export function MethodologySection() {
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Methods</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Methodology</h2>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-primary/20 bg-card backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">Study Design</h3>
            <p className="text-lg text-foreground/90 mb-4">{researchData.methodology.design}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Study Duration</div>
                <div className="text-2xl font-bold text-primary">{researchData.methodology.duration}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Total Participants</div>
                <div className="text-2xl font-bold text-accent">{researchData.methodology.participants}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-accent/20 bg-card backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent">Study Groups</h3>
            <div className="space-y-4">
              {researchData.methodology.groups.map((group, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-1 text-primary font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-lg text-foreground/90">{group}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-primary/20 bg-card backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent">Outcome Measures</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {researchData.methodology.measurements.map((measure, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">{measure}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
