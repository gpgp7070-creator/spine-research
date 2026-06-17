'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { researchData } from '@/lib/research-data'

const RESULTS_COLORS = ['oklch(0.35 0.1 160)', 'oklch(0.65 0.15 200)']

export function ResultsSection() {
  const chartData = researchData.results.outcomes.map(outcome => ({
    metric: outcome.metric.split(' ').slice(0, 2).join('\n'),
    fullMetric: outcome.metric,
    Control: parseFloat(outcome.control),
    Intervention: parseFloat(outcome.intervention)
  }))

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4 bg-background/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Findings</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Results</h2>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-accent/20 bg-card mb-8"
        >
          <p className="text-lg text-foreground/90">{researchData.results.overview}</p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-primary/20 bg-card mb-8"
        >
          <h3 className="text-2xl font-bold mb-6">Treatment Outcomes Comparison</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="metric" 
                stroke="rgba(255,255,255,0.5)"
                tick={{ fontSize: 12 }}
              />
              <YAxis stroke="rgba(255,255,255,0.5)" label={{ value: 'Improvement (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(20, 28, 45, 0.9)', border: '1px solid rgba(255,255,255,0.1)' }}
                formatter={(value) => `${value}%`}
              />
              <Legend />
              <Bar dataKey="Control" fill={RESULTS_COLORS[0]} radius={[8, 8, 0, 0]} />
              <Bar dataKey="Intervention" fill={RESULTS_COLORS[1]} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {researchData.results.outcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-card border border-primary/20"
            >
              <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider line-clamp-2">
                {outcome.metric}
              </div>
              <div className="space-y-2 mb-3">
                <div>
                  <div className="text-2xs text-muted-foreground mb-1">Control</div>
                  <div className="text-xl font-bold text-foreground">{outcome.control}</div>
                </div>
                <div>
                  <div className="text-2xs text-muted-foreground mb-1">Intervention</div>
                  <div className="text-2xl font-bold text-accent">{outcome.intervention}</div>
                </div>
              </div>
              <div className="text-xs text-primary font-medium">p {outcome.pValue}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 p-8 rounded-2xl border border-green-500/20 bg-green-500/5"
        >
          <h3 className="text-lg font-bold mb-3 text-green-400">Safety Profile</h3>
          <p className="text-foreground/90">{researchData.results.sideEffects}</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
