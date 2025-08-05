'use client';

import React from 'react';
import styles from './WhatWeOffer.module.css';

const categories = [
  {
    title: 'Services',
    description: '1:1 sessions, diagnostics, and custom performance protocols.',
  },
  {
    title: 'Products',
    description: 'Tools, planners, and habit kits to support behavior change.',
  },
  {
    title: 'Books',
    description: 'Coming soon: titles to support mental performance mastery.',
  },
];

const contentTiles = [
  {
    title: 'Newsletter',
    description: 'Get insights, updates, and tips delivered monthly.',
  },
  {
    title: 'Research Paper 1',
    description: 'How behavioral systems impact long-term performance.',
  },
  {
    title: 'Research Paper 2',
    description: 'The science behind diagnostic-first coaching.',
  },
  {
    title: 'Whitepaper',
    description: 'A technical look at our performance architecture.',
  },
];

export default function WhatWeOfferPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.heading}>What We Offer</h1>

      {/* Scrollable Categories */}
      <div className={styles.scrollContainer}>
        {categories.map((item, index) => (
          <div className={styles.tile} key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Grid Section Below */}
      <div className={styles.gridSection}>
        {contentTiles.map((item, index) => (
          <div className={styles.gridTile} key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
