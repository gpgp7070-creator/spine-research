'use client'

import { motion } from 'framer-motion'
import { researchData } from '@/lib/research-data'

export function ConclusionSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4 bg-background/50"
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Summary</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Conclusion</h2>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-accent/20 bg-card backdrop-blur-sm mb-8"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            {researchData.conclusion}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-primary/20 bg-card"
        >
          <h3 className="text-2xl font-bold mb-6">References</h3>
          <div className="space-y-4">
            {researchData.references.map((ref, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <span className="text-primary font-bold flex-shrink-0">[{idx + 1}]</span>
                <p className="text-foreground/90 text-sm leading-relaxed">{ref}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}