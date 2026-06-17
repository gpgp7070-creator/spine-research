'use client'

import { motion } from 'framer-motion'
import { researchData } from '@/lib/research-data'

export function AbstractSection() {
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
        >
          <div className="mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Research Paper</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Abstract
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-primary/20 bg-card backdrop-blur-sm"
        >
          <p className="text-lg leading-relaxed text-foreground/90 text-justify">
            {researchData.abstract}
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
