'use client';

import Hero from './components/Hero';
import OneOnOneCTA from './components/OneOnOneCTA';
import DesignedFor from './components/DesignedFor';
import SystemSnapshot from './components/SystemSnapshot';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <main className="sogolon-home">
      <Hero />
      
      <div
        style={{
          background: 'linear-gradient(to bottom, #0c1b19 0%, #1e2d29 30%, #434d45 60%, #ebe6d7 100%)'
        }}
      >
        <AnimatedSection>
          <OneOnOneCTA />
        </AnimatedSection>
        <AnimatedSection>
          <DesignedFor />
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <SystemSnapshot />
      </AnimatedSection>

      <Footer />
    </main>
  );
}
