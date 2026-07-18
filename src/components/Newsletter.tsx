import Image from 'next/image'

export default function Newsletter() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - App Preview Card (Wider) */}
          <div className="lg:flex-[2.1] w-full">
            {/* Background Card */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* BlueRays2 Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/images/BlueRays2.png"
                  alt="Blue rays background"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 p-8 lg:p-12 flex items-start justify-between min-h-[350px]">
                {/* Left Content */}
                <div className="flex-1 pr-2 pt-4">
                  {/* Main Heading */}
                  <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight mb-8">
                    Start trading with<br />
                    confidence.
                  </h2>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://wa.me/2347064965281" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-[9px] py-3 px-6 rounded-full transition duration-200 flex items-center justify-center group"
                    >
                      Explore OTC Desk
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <button className="bg-white/20 hover:bg-white/30 text-white font-medium text-[9px] py-3 px-6 rounded-full transition duration-200 backdrop-blur-sm border border-white/30">
                      Download Fortica App
                    </button>
                  </div>
                </div>
                
                {/* iPhone Image - Positioned to touch bottom */}
                <div className=" absolute -bottom-14  flex-shrink-0 relative h-full flex items-end">
                  <div className="relative">
                    <Image
                      src="/assets/images/iphone.png"
                      alt="Fortica App on iPhone"
                      width={200}
                      height={350}
                      className="w-auto h-[250px] object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Newsletter Signup (Narrower) */}
          <div className="lg:flex-1 w-full space-y-8 bg-[#FAFAFA] rounded-3xl p-8 lg:p-12">
            {/* Newsletter Header */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Subscribe to our weekly<br />
                newsletter
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get productivity tips, updates, and 
                offers delivered to your inbox.
              </p>
            </div>
            
            {/* Email Signup Form */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors duration-200 bg-white"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-gray-900 hover:bg-black text-white p-3 rounded-full transition duration-200 flex items-center justify-center flex-shrink-0"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}