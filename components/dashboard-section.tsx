'use client'

import { motion } from 'framer-motion'
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { researchData } from '@/lib/research-data'

const COLORS = ['oklch(0.65 0.15 200)', 'oklch(0.55 0.16 264.5)']
const COLORS_EXTENDED = ['oklch(0.65 0.15 200)', 'oklch(0.55 0.16 264.5)', 'oklch(0.45 0.12 180)']

function Counter({ value, label, delay }: { value: number; label: string; delay: number }) {
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

  {/* Key Stats: شبكة مكونة من 3 أعمدة متوازنة */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
    <Counter value={186} label="Total Participants" delay={0} />

    <div className="flex flex-col items-center justify-center p-6 bg-card border border-primary/10 rounded-2xl">
      <span className="text-3xl font-bold text-primary">18-23</span>
      <span className="text-sm text-muted-foreground mt-2">Age</span>
    </div>

    {/* تم استبدال الـ Counter بـ div يدعم النص */}
    <div className="flex flex-col items-center justify-center p-6 bg-card border border-primary/10 rounded-2xl">
      <span className="text-2xl font-bold text-accent">PHAS & NRS SCALES</span>
      <span className="text-sm text-muted-foreground mt-2">Outcome Measures</span>
    </div>
  </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gender Distribution */}
          <motion.div className="p-6 rounded-2xl border border-primary/20 bg-card">
            <h3 className="text-xl font-bold mb-6">Gender Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={researchData.participantsData.gender}
                  cx="50%" cy="50%" labelLine={false}
                  label={(entry: any) => `${entry.name} ${entry.percentage}%`}
                  outerRadius={100} fill="#8884d8" dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Baseline Pain Severity */}
          <motion.div className="p-6 rounded-2xl border border-primary/20 bg-card">
            <h3 className="text-xl font-bold mb-6">Baseline Pain Severity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={researchData.participantsData.painSeverity}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(20, 28, 45, 0.8)' }} />
                <Bar dataKey="value" fill="oklch(0.65 0.15 200)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* BMI Distribution */}
          <motion.div className="p-6 rounded-2xl border border-primary/20 bg-card">
            <h3 className="text-xl font-bold mb-6">BMI Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={researchData.participantsData.bmi}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(20, 28, 45, 0.8)' }} />
                <Bar dataKey="value" fill="oklch(0.55 0.16 264.5)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Baseline Postural Awareness */}
          <motion.div className="p-6 rounded-2xl border border-primary/20 bg-card">
            <h3 className="text-xl font-bold mb-6">Baseline Postural Awareness</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={researchData.participantsData.posturalAwareness}
                  cx="50%" cy="50%" labelLine={false}
                  label={(entry: any) => `${entry.name} ${entry.percentage}%`}
                  outerRadius={100} fill="#8884d8" dataKey="value"
                >
                  {COLORS_EXTENDED.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}