import Image from 'next/image'

export default function ConversionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight md:block hidden ">
            Receive Your Money, Your Way
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight md:hidden block">
            Convert Your Crypto Into Naira Or Dollar Cash Easily
          </h2>
        </div>
        
        {/* Description */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            Explore the features that establish our application as the premier option 
            for new and seasoned crypto traders who require a dependable platform.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="flex flex-wrap gap-8 lg:gap-12 justify-center">
          {/* Know your rate before you trade */}
          <div className="flex-1 min-w-80 max-w-md">
            <div 
              className="relative min-h-[350px] md:min-h-[440px] w-full flex flex-col bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/assets/images/border.png')",
                backgroundSize: '100% 100%'
              }}
            >
              <div className="relative z-10 p-2 flex flex-col h-full ">
                {/* Feature Image */}
                <div className="flex ">
                  <div className="w-[100%] h-auto flex p-2">
                    <Image
                      src="/assets/images/card.png"
                      alt="Know your rate before you trade"
                      width={320}
                      height={240}
                      className="w-full h-full object-contain "
                    />
                  </div>
                </div>
                
                {/* Feature Title */}
                <div className="mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center md:block hidden">
                    Know your rate before you trade
                  </h3>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center md:hidden block">
                    Real-time conversion rates
                  </h3>
                </div>
                
                {/* Feature Description */}
                <div>
                  <p className="text-gray-600 leading-relaxed text-sm text-center md:block hidden">
                    Get transparent, real-time conversion rates before you 
                    confirm your transaction. No hidden surprises, just clear 
                    rate and conversion breakdown you can trust.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm text-center md:hidden block">
                    Get live rates and know exactly how much you’ll receive when converting crypto to Naira or Dollar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fast, Trusted & Reliable Settlement */}
          <div className="flex-1 min-w-80 max-w-md">
            <div 
              className="relative min-h-[350px] md:min-h-[440px] w-full flex flex-col bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/assets/images/border.png')",
                backgroundSize: '100% 100%'
              }}
            >
              <div className="relative z-10 p-2 flex flex-col h-full">
                {/* Feature Image */}
                <div className="flex ">
                  <div className="w-[100%] h-auto flex p-2">
                    <Image
                      src="/assets/images/padlock.png"
                      alt="Fast, Trusted & Reliable Settlement"
                      width={320}
                      height={240}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Feature Title */}
                <div className="mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center">
                    Fast, Trusted & Reliable Settlement
                  </h3>
                </div>
                
                {/* Feature Description */}
                <div>
                  <p className="text-gray-600 leading-relaxed text-sm text-center">
                    Convert your crypto instantly through our verified 
                    OTC desk. Secure, seamless, and reliable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}