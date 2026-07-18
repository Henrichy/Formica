import Header from '@/components/Header'
import TrustedBySection from '@/components/TrustedBySection'
import CryptoFeatures from '@/components/CryptoFeatures'
import ConversionSection from '@/components/ConversionSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import OTCJourney from '@/components/OTCJourney'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
export default function Home() {
  return (
    <>
      <Header />
      
      {/* Desktop Version */}
      <main className="min-h-screen  overflow-hidden hidden md:block">
        {/* Hero Section - Contained Card */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Hero Card Container */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Image within the card */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/images/backg.png"
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 px-8 lg:px-16 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-left space-y-8">
                    {/* Badge */}
                    <div className="inline-block">
                      <span className="text-xs font-medium text-white bg-black/60 px-4 py-2 rounded-full border border-gray-600">
                        Introducing Fortica
                      </span>
                    </div>
                    
                    {/* Main Headline */}
                    <div className="space-y-4">
                      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
                        The Trusted<br />
                        Way to <span className="text-green-400">Cash</span><br />
                        <span className="text-white">Out Your Crypto</span>
                      </h1>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                      Whether you're settling a personal transaction or executing a high-value trade, 
                      Fortica helps you convert crypto into Naira or USD through a secure OTC process 
                      built on transparent pricing, dependable settlement, and dedicated human support.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://wa.me/2347064965281" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full transition duration-200 flex items-center justify-center group"
                      >
                        Speak to our OTC team
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                      <button className="border border-white/30 hover:border-white/50 text-white font-medium py-4 px-8 rounded-full transition duration-200 flex items-center justify-center backdrop-blur-sm">
                        Download Fortica App
                      </button>
                    </div>
                    
                    {/* Rating and Trust Indicators */}
                    <div className="space-y-4">
                      {/* Stars Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-white font-medium">4.8 stars</span>
                      </div>
                      
                      {/* Trust Message */}
                      <p className="text-gray-300 text-sm">
                        Trusted by traders, businesses, and high-value clients across Africa
                      </p>
                      
                      {/* User Avatars */}
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-sm text-white font-medium">J</span>
                          </div>
                          <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-sm text-white font-medium">A</span>
                          </div>
                          <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-sm text-white font-medium">M</span>
                          </div>
                          <div className="w-10 h-10 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-sm text-white font-medium">R</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Content - Phone and Graphics */}
                  <div className='absolute top-44 right-0'>
                    <div className="relative flex justify-center lg:justify-end items-end h-full min-h-[600px]">
                      
                      {/* Lite Background Image - Behind phone at top */}
                      <div className="absolute -top-10 right-0 z-5">
                        <Image
                          src="/assets/images/lite.png"
                          alt="Light effect"
                          width={250}
                          height={250}
                          className="max-w-full h-auto opacity-80"
                        />
                      </div>
                      
                      {/* Phone Image */}
                      <div className="relative flex items-end h-full z-10">
                        <Image
                          src="/assets/images/phonehand.png"
                          alt="Hand holding phone with Fortica app"
                          width={500}
                          height={650}
                          priority
                          className="object-contain self-end"
                        />

                        {/* Bitcoin Icon */}
                        <div className="absolute -top-6 -left-8 z-20">
                          <Image
                            src="/assets/images/bitcoin.png"
                            alt="Bitcoin"
                            width={110}
                            height={110}
                            className="animate-float"
                          />
                        </div>
                      </div>
                    </div>
                                      
                    {/* Additional Floating Elements */}
                    <div className="absolute bottom-10 left-0 z-20 opacity-30">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                        <span className="text-white font-bold">₿</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-40 left-10 z-20 opacity-40">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/30">
                        <span className="text-white font-bold text-sm">₦</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Version */}
      <main className="min-h-screen md:hidden">
        <section className="pt-20 pb-16">
          <div className="px-4">
            {/* Mobile Hero Card */}
            <div className="relative rounded-3xl overflow-hidden mt-4">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/images/backg.png"
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 px-6 py-8 min-h-[80vh]">
                {/* USDT Icon - Top Right */}
                <div className="absolute top-6 right-6 z-20">
                  <Image
                    src="/assets/images/usdt.png"
                    alt="USDT"
                    width={60}
                    height={60}
                    className="opacity-80"
                  />
                </div>
                
                {/* Badge */}
                <div className="mb-8">
                  <span className="text-xs font-medium text-white bg-black/60 px-4 py-2 rounded-full border border-gray-600">
                    Introducing Fortica
                  </span>
                </div>
                
                {/* Main Headline */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-white leading-tight">
                    Buy & trade<br />
                    crypto securely
                  </h1>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Start your crypto journey on our trusted platform with a simple, 
                  secure way to buy, trade, and manage digital assets.
                </p>
                
                {/* Action Buttons */}
                <div className="space-y-4 mb-8">
                  <a 
                    href="https://wa.me/2347064965281" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-full transition duration-200 flex items-center justify-center group"
                  >
                    Explore OTC Desk
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <button className="w-full border border-white/30 hover:border-white/50 text-white font-medium py-4 px-6 rounded-full transition duration-200 backdrop-blur-sm">
                    Download Fortica App
                  </button>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white font-medium">4.8 stars</span>
                </div>
                
                {/* Trust Message */}
                <p className="text-gray-300 text-sm mb-6">
                  50,000+ traders tracking with Fortica
                </p>
                
                {/* User Avatars */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-sm text-white font-medium">J</span>
                    </div>
                    <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-sm text-white font-medium">S</span>
                    </div>
                    <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-sm text-white font-medium">M</span>
                    </div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-sm text-white font-medium">R</span>
                    </div>
                  </div>
                </div>
                
                {/* Bitcoin Icon - Bottom */}
                <div className="absolute bottom-6 left-6 z-20 opacity-60">
                  <Image
                    src="/assets/images/bitcoin.png"
                    alt="Bitcoin"
                    width={50}
                    height={50}
                    className="animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <TrustedBySection />
      <CryptoFeatures />
      <OTCJourney />
      <ConversionSection />
      <FeaturesGrid />
      <FAQ />
      <Testimonials />
      <Newsletter />
    </>
  )
}