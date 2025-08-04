'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './NavOverlay.module.css';

export default function NavOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [askOpen, setAskOpen] = useState(false);

  // Helper to close menu when link is clicked
  const handleLinkClick = () => setMenuOpen(false);

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
              <a href="#who-we-are" onClick={handleLinkClick}>Who We Are</a>
              <a href="#what-we-offer" onClick={handleLinkClick}>What We Offer</a>
              <a href="/who-we-are-for" onClick={handleLinkClick}>Who We Are For</a>
              <a href="#start-diagnostic" onClick={handleLinkClick}>Start Diagnostic</a>
              <a href="#contact-us" onClick={handleLinkClick}>Contact Us</a>
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
