'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './WhoWeAre.css'; // optional if you want to externalize styles

export default function WhoWeAre() {
  return (
    <section className="who-we-are-section">
      {/* 1. Headline */}
      <motion.h1
        className="who-headline"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mental health has a direct impact on your quality of life.
      </motion.h1>

      {/* 2. What We Do */}
      <motion.div
        className="what-we-do"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <p>We deliver structured mental performance care for high-agency individuals facing friction in how they think, feel, and act.</p>
        <p>This isn’t therapy. It’s not mindset coaching. It’s weekly, psychology-informed engagement designed for clarity, regulation, and execution.</p>
      </motion.div>

      {/* 3. How We Work */}
      <motion.ul
        className="how-we-work"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <li>• Weekly 1:1 sessions</li>
        <li>• Individual Engagement Plans (IEPs)</li>
        <li>• Performance science + identity architecture</li>
        <li>• Results tracked through behavior, not mood</li>
        <li>• $35/session, first session free</li>
      </motion.ul>

      {/* 4. Why It Works */}
      <motion.ul
        className="why-it-works"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <li>• Less overwhelm. More traction.</li>
        <li>• Emotional regulation with repeatable tools</li>
        <li>• Cognitive clarity—your mind, less noise</li>
        <li>• Consistent execution across work and life</li>
        <li>• Behavioral systems that hold under pressure</li>
      </motion.ul>

      {/* 5. Segment Snapshots */}
      <motion.div
        className="segment-scroll"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="segment-tile">
          <h3>For Young Professionals</h3>
          <p>
            Structure that helps you move through overload, manage responsibility, and keep momentum stable.
          </p>
        </div>
        <div className="segment-tile">
          <h3>For Students</h3>
          <p>
            Tools to manage cognitive fatigue, emotional volatility, and the demands of structured environments.
          </p>
        </div>
        <div className="segment-tile">
          <h3>For Marginalized Clients</h3>
          <p>
            Behavioral systems you can trust—priced accessibly, delivered without jargon, and built to hold under pressure.
          </p>
        </div>
      </motion.div>

      {/* 6. Tagline + CTA */}
      <motion.div
        className="cta-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="cta-tagline">You lead better when you function better.</h2>
        <p>Start with a free session. Build the structure that holds.</p>
        <button className="cta-button" onClick={() => window.location.href = '/start-diagnostic'}>
          Start Diagnostic
        </button>
      </motion.div>
    </section>
  );
}
