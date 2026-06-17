'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TeamMember {
  id: number
  name: string
  image: string
  role?: string
}

const teamMembers: TeamMember[] = [
  // 1. إضافة الدكتور المسؤول عن البحث هنا (ليظهر أولاً)
  { id: 0, name: 'Dr. Dany Alphonse ', image: '/team/doctor-responsible.jpeg', role: 'Under Supervision ' },

  // باقي أعضاء الفريق (تمت إزاحة id ليبدأ من 1)
  { id: 1, name: 'Dr. Reham Ashraf', image: '/team/team-1.jpeg' },
  { id: 2, name: 'Dr. Ahmed Hesham', image: '/team/team-2.jpeg' },
  { id: 3, name: 'Dr. Gehad Hany', image: '/team/team-3.jpeg' },
  { id: 4, name: 'Dr. Ahmed Magdy', image: '/team/team-4.jpeg' },
  { id: 5, name: 'Dr. Toqa Abdal-azez', image: '/team/team-5.jpeg' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

const circleVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.08 },
}

const imageVariants = {
  initial: { filter: 'grayscale(0%)' },
  hover: {
    filter: 'grayscale(0%)',
    transition: { duration: 0.4 }
  }
}

export function TeamSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Our Research Team
          </span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
          The minds behind this research, working together to promote posture awareness at Suez University
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.div
              variants={circleVariants}
              initial="initial"
              whileHover="hover"
              className="relative mb-6 group"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
              
              {/* Circle border */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500" />
              
              {/* Image container */}
              <motion.div
                variants={imageVariants}
                initial="initial"
                whileHover="hover"
                className="relative w-48 h-48 md:w-40 md:h-40 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-card bg-card/50 backdrop-blur-sm shadow-2xl"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 160px, 144px"
                  priority={member.id <= 2}
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>

            {/* Name and title */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 + member.id * 0.1 }}
            >
              {/* تم نقل الـ role ليظهر قبل الاسم */}
              {member.role && (
                <p className="text-xs text-primary font-medium mb-1">{member.role}</p>
              )}
              <h3 className="text-lg md:text-base lg:text-sm font-bold text-foreground mb-2 line-clamp-2">
                {member.name}
              </h3>
              
              <div className="flex gap-2 justify-center">
                <motion.div
                  className="h-1 w-6 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  transition={{ delay: 0.4 + member.id * 0.1, duration: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-20 h-1 w-32 bg-gradient-to-r from-primary via-accent to-transparent mx-auto origin-center"
      />
    </section>
  )
}