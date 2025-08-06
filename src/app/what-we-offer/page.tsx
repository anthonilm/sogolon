'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './WhatWeOffer.module.css';
import { siteMeta } from '@/lib/meta';


export const metadata = {
  title: siteMeta.routes['/what-we-offer'].title,
  description: siteMeta.routes['/what-we-offer'].description,
};

const sections = {
  services: [
    {
      title: 'Weekly Session',
      description: '1:1 session for structure, accountability, and performance strategy.',
      slug: 'weekly-session',
    },
    {
      title: 'IEP Care Plan',
      description: 'Ongoing support plan based on diagnostic data and behavior mapping.',
      slug: 'iep-care-plan',
    },
    {
      title: 'Diagnostic Only',
      description: 'One-time COM-B assessment with track recommendation and action plan.',
      slug: 'diagnostic-only',
    },
  ],
  products: [
    {
      title: 'Field Manual',
      description: 'Tactical performance workbook used over a 6–12 week cycle.',
      slug: 'field-manual',
    },
    {
      title: 'Drive Realignment Kit',
      description: 'Protocol for restoring clarity, motivation, and daily traction.',
      slug: 'drive-realignment',
    },
    {
      title: 'Pocket Routines',
      description: 'Fast-acting micro-routines for task switching and daily stability.',
      slug: 'pocket-routines',
    },
  ],
  books: [
    {
      title: 'The Efficiency Trap',
      description: 'Why capable people silently collapse—and how to recover.',
      slug: 'efficiency-trap',
    },
  ],
};

export default function WhatWeOfferPage() {
  const router = useRouter();

  const handleClick = (category: string, slug: string) => {
    router.push(`/what-we-offer/${category}/${slug}`);
  };

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.heading}>What We Offer</h1>

      {Object.entries(sections).map(([category, items]) => (
        <section key={category} style={{ marginBottom: '3rem' }}>
          <h2 className={styles.heading} style={{ fontSize: '1.75rem' }}>
            {category.toUpperCase()}
          </h2>
          <div className={styles.scrollContainer}>
            {items.map(({ title, description, slug }) => (
              <div
                key={slug}
                className={styles.tile}
                onClick={() => handleClick(category, slug)}
              >
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
