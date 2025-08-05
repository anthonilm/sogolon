'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './NavOverlay.module.css';

export default function NavOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [askOpen, setAskOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <button className={styles.menuButton} onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {/* Ask Me Button */}
      <button className={styles.askButton} onClick={() => setAskOpen(true)}>
        ?
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.menuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.menuHeader}>
              <h1 className={styles.menuTitle}>Noesis Systems, LLC</h1>
              <p className={styles.menuSubtitle}>Precision Systems for Cognitive Performance</p>
              <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>×</button>
            </div>

            <nav className={styles.menuLinks}>
              <button onClick={() => handleNavigate('/')}>Home</button>
              <button onClick={() => handleNavigate('/who-we-are')}>Who We Are</button>
              <button onClick={() => handleNavigate('/what-we-offer')}>What We Offer</button>
              <button onClick={() => handleNavigate('/who-we-are-for')}>Who We Are For</button>
              <button onClick={() => handleNavigate('/start-diagnostic')}>Start Diagnostic</button>
              <button onClick={() => handleNavigate('/contact-us')}>Contact Us</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ask Me Modal */}
      <AnimatePresence>
        {askOpen && (
          <motion.div
            className={styles.askModal}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setAskOpen(false)}
          >
            <div className={styles.askContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeAsk} onClick={() => setAskOpen(false)}>×</button>
              <h3>Live Chat</h3>
              <p>This is a placeholder for live support chat integration.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
