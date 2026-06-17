'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-t border-primary/20 bg-background py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-foreground mb-4">Research</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#abstract" className="hover:text-accent transition">Abstract</a></li>
              <li><a href="#methodology" className="hover:text-accent transition">Methodology</a></li>
              <li><a href="#results" className="hover:text-accent transition">Results</a></li>
              <li><a href="#conclusion" className="hover:text-accent transition">Conclusion</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-foreground mb-4">Project</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Graduation Project 2026</li>
              <li>186 Participants</li>
              <li>Age Range: 18-23</li>
              <li>Assessment: PHAS & NRS</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 Mechanical back pain research.</p>
            <p>Graduation Project | Evidence-Based Clinical Research</p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}