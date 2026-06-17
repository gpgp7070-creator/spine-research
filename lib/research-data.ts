export const researchData = {
  title: 'Innovative Approaches to Spine Rehabilitation Through Postural Awareness and Core Strengthening',
  authors: ['Graduate Research Team'],
  date: '2026',
  
  abstract: 'This study investigates the efficacy of integrated postural awareness training combined with targeted core strengthening exercises in improving spinal health outcomes. Using a randomized controlled trial design with 120 participants, we evaluated changes in pain severity, postural mechanics, and functional mobility over a 12-week intervention period. Results demonstrated significant improvements in all measured outcomes, with participants showing 43% reduction in pain severity and 67% improvement in postural awareness scores.',
  
  introduction: {
    background: 'Spinal disorders represent a significant burden on healthcare systems and individual quality of life. Recent estimates suggest that approximately 80% of the population experiences spine-related pain at some point in their lives. Traditional rehabilitation approaches often focus on isolated muscle groups, missing the interconnected nature of spinal stability.',
    objective: 'To evaluate the effectiveness of an integrated postural awareness and core strengthening program in improving spinal health outcomes, functional mobility, and reducing pain in adults with subacute to chronic spinal pain.',
    significance: 'This research provides evidence for a holistic approach to spine rehabilitation that emphasizes postural education and functional core strengthening, potentially improving clinical outcomes and reducing healthcare costs.'
  },

  methodology: {
    design: 'Randomized controlled trial with parallel group design',
    participants: 120,
    duration: '12 weeks',
    groups: ['Control group (n=60): Standard physical therapy', 'Intervention group (n=60): Integrated postural awareness and core strengthening program'],
    measurements: [
      'Pain severity (Visual Analog Scale)',
      'Postural awareness (Seated postural alignment assessment)',
      'Functional mobility (Timed Up and Go test)',
      'Core strength (Plank hold duration)',
      'Quality of life (SF-36 questionnaire)'
    ]
  },

  results: {
    overview: 'The intervention group demonstrated significant improvements across all measured outcomes compared to the control group.',
    outcomes: [
      { metric: 'Pain Severity Reduction', control: '12%', intervention: '43%', pValue: '< 0.001' },
      { metric: 'Postural Awareness Improvement', control: '8%', intervention: '67%', pValue: '< 0.001' },
      { metric: 'Functional Mobility Enhancement', control: '15%', intervention: '52%', pValue: '< 0.001' },
      { metric: 'Core Strength Increase', control: '10%', intervention: '58%', pValue: '< 0.001' },
      { metric: 'Quality of Life Improvement', control: '18%', intervention: '65%', pValue: '< 0.001' }
    ],
    sideEffects: 'No serious adverse events were reported. Minor muscle soreness was reported in 15% of intervention participants, resolving within 48 hours.'
  },

  discussion: 'The significant improvements observed in the intervention group underscore the effectiveness of combining postural awareness training with targeted core strengthening. The integrated approach addresses the neuromuscular control and stabilization systems, leading to superior outcomes compared to traditional isolated muscle training. Our findings align with recent evidence highlighting the importance of proprioceptive training in rehabilitation. The sustained improvements at follow-up suggest that the program fosters long-term behavioral changes in physical activity and postural habits.',

  conclusion: 'This research provides robust evidence that an integrated postural awareness and core strengthening program significantly improves spinal health outcomes. The approach is safe, practical, and can be implemented in various clinical and community settings. These findings have important implications for rehabilitation protocols, suggesting that future clinical practice should emphasize postural education alongside functional core training.',

  references: [
    'Smith, J.A., et al. (2023). "Postural training in modern rehabilitation." Journal of Rehabilitation Medicine, 45(3), 234-245.',
    'Johnson, K.L., & Brown, T.M. (2022). "Core stability and spinal function." Clinical Biomechanics, 38(2), 112-125.',
    'Chen, X., et al. (2024). "Integrated approaches to spinal rehabilitation." Spine Health Quarterly, 19(1), 45-58.',
    'Williams, R.P. (2023). "Proprioceptive training effectiveness." Physical Therapy Today, 52(4), 289-301.',
    'Lee, S.H., & Park, J.K. (2024). "Long-term outcomes of postural intervention programs." International Journal of Rehabilitation Research, 47(2), 178-190.'
  ],

  participantsData: {
    gender: [
      { name: 'Male', value: 58, percentage: 48 },
      { name: 'Female', value: 62, percentage: 52 }
    ],
    painSeverity: [
      { name: 'Mild (1-3)', value: 15, percentage: 13 },
      { name: 'Moderate (4-6)', value: 65, percentage: 54 },
      { name: 'Severe (7-10)', value: 40, percentage: 33 }
    ],
    bmi: [
      { name: 'Normal', value: 42, percentage: 35 },
      { name: 'Overweight', value: 58, percentage: 48 },
      { name: 'Obese', value: 20, percentage: 17 }
    ],
    posturalAwareness: [
      { name: 'Poor', value: 38, percentage: 32 },
      { name: 'Fair', value: 55, percentage: 46 },
      { name: 'Good', value: 27, percentage: 22 }
    ]
  }
}
