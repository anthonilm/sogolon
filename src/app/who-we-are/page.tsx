'use client';

import React from 'react';
import { siteMeta } from '@/lib/meta';

export const metadata = {
  title: siteMeta.routes['/who-we-are'].title,
  description: siteMeta.routes['/who-we-are'].description,
};

export default function WhoWeArePage() {
  return (
    <main>
      <h1>Who We Are</h1>
      <p>This is a placeholder for team, mission, or philosophy content.</p>
    </main>
  );
}
