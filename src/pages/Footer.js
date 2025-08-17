import React from 'react';
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* About Section */}
        <div className={styles.footerAbout}>
          <h3>About Us</h3>
          <p>
            Welcome to our blog, your source for learning and development. We share tutorials on web technologies like JavaScript, Next.js, and more to help you on your coding journey.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className={styles.footerNav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        
        {/* Social Media Links */}
        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        {/* Newsletter Call-to-Action */}
        

      </div>

      {/* Copyright Notice */}
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;