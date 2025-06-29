'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // install lucide-react for icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-gray-700"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Links */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="#home" className="hover:text-orange-500 transition">Home</Link>
          <Link href="#projects" className="hover:text-orange-500 transition">Projects</Link>
          <Link href="#skills" className="hover:text-orange-500 transition">Skills</Link>
          <Link href="#contact" className="hover:text-orange-500 transition">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <nav className="flex flex-col gap-4 mt-2 text-gray-700 text-sm font-medium">
            <Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
