"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-sm">
      <nav className="amx-w-7xl mx-auto px-6 py-4">
        <ul className="flex items-center justify-end space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
