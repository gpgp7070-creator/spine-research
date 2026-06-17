'use client'

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { IntroductionSection } from '@/components/introduction-section'
import { AbstractSection } from '@/components/abstract-section'
import { DashboardSection } from '@/components/dashboard-section'

import { ResultsSection } from '@/components/results-section'
import { DiscussionSection } from '@/components/discussion-section'
import { ConclusionSection } from '@/components/conclusion-section'
import { Footer } from '@/components/footer'
import { TeamSection } from '@/components/team-section'

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <HeroSection />

      {/* تم نقل TeamSection إلى هنا */}
      <div id="team">
        <TeamSection />
      </div>

      <div id="abstract">
        <AbstractSection />
      </div>
      <div id="introduction">
        <IntroductionSection />
      </div>
      <div id="dashboard">
        <DashboardSection />
      </div>
      <div id="methodology">
        
      </div>
      <div id="results">
        <ResultsSection />
      </div>

      <div id="discussion">
        <DiscussionSection />
      </div>

      <div id="conclusion">
        <ConclusionSection />
      </div>

      <Footer />
    </main>
  )
}