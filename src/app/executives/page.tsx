'use client';

import React from 'react';
import styles from '../ClientPage.module.css';

export default function ExecutivesPage() {
  return (
    <main className={styles.clientPage}>
      <section className={styles.hero}>
        <h1>Executives</h1>
        <p>Precision systems for sustained decision-making and recovery.</p>
      </section>
      <section className={styles.footer}>
        <p>More coming soon. Reach out if you’d like to start early.</p>
      </section>
    </main>
  );
}
