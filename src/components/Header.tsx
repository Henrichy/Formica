'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: 'OTC Desk', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'About', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Download App', href: '#' },
  ]

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        {/* Desktop Navigation Container */}
        <div className="hidden md:block">
          <div className="backdrop-blur-md rounded-full border border-blue-800/30 px-8 py-4" style={{backgroundColor: '#0E2B6E'}}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="flex items-center justify-center mr-3">
                  <Image 
                    src="/assets/images/logo1.png" 
                    alt="Fortica Logo" 
                    height={30}
                    width={170} 
                  />
                </div>
              </Link>

              {/* Navigation Links */}
              <nav className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-gray-200 hover:text-white transition-colors text-sm font-light"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div>
                <a 
                  href="https://wa.me/2347064965281" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-white hover:bg-white/10 text-white font-light py-3 px-6 rounded-full transition duration-200 text-sm flex items-center group"
                >
                  Start now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="backdrop-blur-md rounded-xl border border-blue-800/30 px-4 py-2" style={{backgroundColor: '#0E2B6E'}}>
            <div className="flex items-center justify-between">
              {/* Mobile Logo - Left */}
              <Link href="/" className="flex items-center">
                <Image 
                  src="/assets/images/logo1.png" 
                  alt="Fortica Logo" 
                  width={120} 
                  height={30}
                  className="h-8 w-auto"
                />
              </Link>

              {/* Center - Start now button */}
              <div className="flex-1 flex justify-center mx-3">
                <a 
                  href="https://wa.me/2347064965281" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-white hover:bg-white/10 text-white font-light py-2 px-6 rounded-full transition duration-200 text-sm flex items-center group"
                >
                  Start now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Right - Hamburger Menu */}
              <button 
                onClick={toggleMenu}
                className="text-white hover:text-gray-200 transition-colors p-1"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      
      {/* Mobile Sidebar Container */}
      <div 
        className={`fixed inset-y-0 right-0 w-[85%] max-w-sm bg-slate-900 z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-slate-700/50">
            <div className="flex items-center">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <Image 
                  src="/assets/images/Vector.png" 
                  alt="Fortica Logo" 
                  width={16} 
                  height={16} 
                  className="brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold text-white">Fortica.</span>
            </div>
            <button 
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white p-1"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow py-8 px-6 overflow-y-auto">
            <nav className="flex flex-col space-y-6 mb-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="pt-8 border-t border-slate-700/50">
              <a 
                href="https://wa.me/2347064965281" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-2xl hover:bg-blue-700 transition-all active:scale-[0.98] text-center block"
              >
                Start now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}