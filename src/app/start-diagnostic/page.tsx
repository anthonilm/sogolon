'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedSection from '../components/AnimatedSection';
import styles from './StartDiagnostic.module.css';

export default function StartDiagnosticPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    support: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const res = await fetch('https://formspree.io/f/mwkdqzvw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/diagnostic-assessment');
    } else {
      alert('Something went wrong. Please try again.');
    }

    setSubmitting(false);
  };

  return (
    <main className={styles.wrapper}>
      <AnimatedSection>
        <h1 className={styles.heading}>Start Your Diagnostic</h1>
        <p className={styles.subheading}>
          Tell us a bit about yourself before we begin.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="occupation"
            placeholder="Occupation / Role"
            value={formData.occupation}
            onChange={handleChange}
          />
          <textarea
            name="support"
            placeholder="How can we support you?"
            value={formData.support}
            onChange={handleChange}
          />

          <button type="submit" disabled={!isFormValid || submitting}>
            {submitting ? 'Sending...' : 'Continue to Diagnostic'}
          </button>
        </form>
      </AnimatedSection>
    </main>
  );
}
