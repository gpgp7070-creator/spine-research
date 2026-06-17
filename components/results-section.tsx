'use client'

import { motion } from 'framer-motion'
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { researchData } from '@/lib/research-data'

const COLORS = ['oklch(0.65 0.15 200)', 'oklch(0.55 0.16 264.5)']
const COLORS_EXTENDED = ['oklch(0.65 0.15 200)', 'oklch(0.55 0.16 264.5)', 'oklch(0.45 0.12 180)']

export function ResultsSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4 bg-background/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12">
          <div className="mb-4"><span className="text-primary font-semibold text-sm uppercase tracking-wider">Findings</span></div>
          <h2 className="text-4xl md:text-5xl font-bold">Results</h2>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 1. Gender Distribution */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-6 text-center text-foreground/80">Gender Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={researchData.participantsData.gender} cx="50%" cy="50%" labelLine={false} label={(entry: any) => `${entry.name} ${entry.percentage}%`} outerRadius={100} fill="#8884d8" dataKey="value">
                  {COLORS.map((color, index) => (<Cell key={`cell-${index}`} fill={color} />))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* 2. Baseline Pain Severity */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-6 text-center text-foreground/80">Baseline Pain Severity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={researchData.participantsData.painSeverity}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(20, 28, 45, 0.8)', color: 'white', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="value" fill="oklch(0.65 0.15 200)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* 3. BMI Distribution */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-6 text-center text-foreground/80">BMI Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={researchData.participantsData.bmi}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(20, 28, 45, 0.8)', color: 'white', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="value" fill="oklch(0.55 0.16 264.5)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* 4. Baseline Postural Awareness */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-6 text-center text-foreground/80">Baseline Postural Awareness</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={researchData.participantsData.posturalAwareness} cx="50%" cy="50%" labelLine={false} label={(entry: any) => `${entry.name} ${entry.percentage}%`} outerRadius={100} fill="#8884d8" dataKey="value">
                  {COLORS_EXTENDED.map((color, index) => (<Cell key={`cell-${index}`} fill={color} />))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Data Summary Table */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-primary/20 bg-card overflow-x-auto shadow-xl mb-12">
          <h3 className="text-xl font-bold mb-6 text-foreground">Participant Characteristics Summary</h3>
          <table className="w-full text-sm text-left text-muted-foreground border-collapse">
            <thead className="text-xs uppercase bg-primary/10 text-primary border-b border-primary/20">
              <tr>
                <th className="px-4 py-3">Variable</th><th className="px-4 py-3">Characteristics</th><th className="px-4 py-3">No Pain</th><th className="px-4 py-3">Mild Pain</th><th className="px-4 py-3">Moderate Pain</th><th className="px-4 py-3">Severe Pain</th><th className="px-4 py-3">Total</th><th className="px-4 py-3">Chi-square</th><th className="px-4 py-3">p-Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              <tr><td className="px-4 py-3 font-bold text-foreground" rowSpan={2}>Gender</td><td>Male</td><td>4</td><td>13</td><td>28</td><td>36</td><td>81</td><td rowSpan={2}>0.595</td><td rowSpan={2}>0.897</td></tr>
              <tr><td>Female</td><td>4</td><td>21</td><td>36</td><td>44</td><td>105</td></tr>
              <tr><td className="px-4 py-3 font-bold text-foreground" rowSpan={6}>Age</td><td>18</td><td>0</td><td>4</td><td>5</td><td>9</td><td>18</td><td rowSpan={6}>16.836</td><td rowSpan={6}>0.329</td></tr>
              <tr><td>19</td><td>0</td><td>2</td><td>9</td><td>5</td><td>16</td></tr><tr><td>20</td><td>1</td><td>2</td><td>8</td><td>10</td><td>21</td></tr><tr><td>21</td><td>3</td><td>9</td><td>7</td><td>12</td><td>31</td></tr><tr><td>22</td><td>1</td><td>11</td><td>25</td><td>23</td><td>60</td></tr><tr><td>23</td><td>3</td><td>6</td><td>10</td><td>21</td><td>40</td></tr>
              <tr><td className="px-4 py-3 font-bold text-foreground" rowSpan={4}>BMI</td><td>Under Weight</td><td>0</td><td>2</td><td>3</td><td>2</td><td>7</td><td rowSpan={4}>2.291</td><td rowSpan={4}>0.986</td></tr>
              <tr><td>Normal Weight</td><td>5</td><td>22</td><td>38</td><td>47</td><td>112</td></tr><tr><td>Overweight</td><td>2</td><td>7</td><td>18</td><td>23</td><td>50</td></tr><tr><td>Obese</td><td>1</td><td>3</td><td>5</td><td>8</td><td>17</td></tr>
              <tr><td className="px-4 py-3 font-bold text-foreground" rowSpan={3}>Awareness</td><td>Low awareness</td><td>0</td><td>4</td><td>11</td><td>77</td><td>92</td><td rowSpan={3}>262.949</td><td rowSpan={3}>0.000**</td></tr>
              <tr><td>Moderate awareness</td><td>0</td><td>1</td><td>51</td><td>3</td><td>55</td></tr><tr><td>High awareness</td><td>8</td><td>29</td><td>2</td><td>0</td><td>39</td></tr>
            </tbody>
          </table>
        </motion.div>

        {/* Key Findings Box */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="p-8 rounded-2xl border border-primary/20 bg-primary/5 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-primary">Key Findings</h3>
          <p className="text-muted-foreground leading-relaxed">
            Overall, the study sample consisted mainly of young adults with a high prevalence of back pain, low postural awareness, and a considerable proportion of overweight individuals. The findings further indicate that Suez University students exhibited relatively low levels of postural awareness alongside high levels of pain, with the majority of participants reporting moderate to severe pain intensity.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}