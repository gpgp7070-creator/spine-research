'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    // ابحث عن هذا السطر في كودك الحالي:
<motion.section 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  // أضف pt-24 أو pt-32 هنا بدلاً من الـ min-h-screen فقط:
  className="min-h-screen pt-32 flex flex-col items-center justify-start relative overflow-hidden bg-gradient-to-b from-background to-background/80 px-4"
>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(107, 114, 128, 0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-center max-w-4xl mx-auto px-4">
  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block mb-4">
    The Correlation Between Postural Awareness, Postural Habits,
  </span>
  <span className="text-foreground text-2xl md:text-4xl lg:text-5xl">
    and the Prevalence of Mechanical Back Pain Among Suez University Students: A Cross-Sectional Study
  </span>
</h1>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4 justify-center mb-12 flex-wrap"
        >
          <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Graduation Project 2026
          </div>
          <div className="px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            186 Participants
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
    </motion.section>
  )
}
