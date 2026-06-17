'use client'

import { motion } from 'framer-motion'

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
        
        {/* تم حذف جميع المحتويات السابقة هنا */}
        
      </div>
    </motion.section>
  )
}