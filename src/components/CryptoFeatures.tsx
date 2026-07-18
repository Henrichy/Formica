import Image from 'next/image'

export default function CryptoFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-6 md:block hidden">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Built for Every Crypto Settlement That Matters
          </h2>
        </div>
          <div className="text-center mb-6 md:hidden block">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Fortica’s  Core Services
          </h2>
        </div>
        
        {/* Description */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed md:block hidden">
            From everyday crypto payouts to high-value OTC transactions, Fortica gives individuals, businesses, and 
            institutions a trusted way to convert crypto into Naira, USD, GBP or EUR with transparent rates, dependable 
            settlement, and dedicated human support.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed md:hidden block">
            Explore the features that establish our application as the premier 
            option for new and seasoned crypto traders who require a dependable platform.
          </p>
        </div>
        
        {/* Feature Cards Rows */}
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* Card 1: Private OTC Trading */}
            <div className="relative overflow-hidden rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-50 p-6 w-full md:w-[56%]">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 md:block hidden">Private OTC Trading</h3>
                <h3 className="text-2xl font-bold text-gray-900 md:hidden block">Performance Tracking</h3>
              </div>
              <p className="text-gray-600 mb-6 md:block hidden">
                Execute high-value crypto transactions privately with locked pricing, reduced market impact, and dedicated trade management from quote to settlement
              </p>
              <p className="text-gray-600 mb-6 md:hidden block">
                Move big without moving the market. Lock your rate, settle privately, and keep every order confidential.
              </p>
              <div className="relative md:h-64 h-36">
                <Image
                  src="/assets/images/frame4.png"
                  alt="Private OTC Trading"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 2: Transparent Rate */}
            <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-6 w-full md:w-[40%]">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 md:block hidden">Transparent Rate</h3>
                <h3 className="text-2xl font-bold text-gray-900 md:hidden block">Block Trade Executionking</h3>
              </div>
              <p className="text-gray-600 mb-6 md:block hidden">
                Review your confirmed exchange rate before every transaction, so you always know what you'll receive before settlement begins.
              </p>
              <p className="text-gray-600 mb-6 md:hidden block">
                Move big without moving the market. Lock your rate, settle privately, and keep every order confidential.
              </p>
              <div className="relative md:h-64 h-36">
                <Image
                  src="/assets/images/bitusdt.png"
                  alt="Transparent Rate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* Card 3: Flexible Fiat Settlement */}
            <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 w-full md:w-[40%]">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 md:block hidden">Flexible Fiat Settlement</h3>
                <h3 className="text-2xl font-bold text-gray-900 md:hidden block">On and Off Ramp Service</h3>
              </div>
              <p className="text-gray-600 mb-6 md:block hidden">
                Receive your funds directly in your Nigerian bank account or domiciliary account (USD, GBP) through a secure and transparent OTC settlement process.
              </p>
              <p className="text-gray-600 mb-6 md:hidden block">
                Convert your crypto instantly through our  verified OTC desk. Secure, seamless, and reliable
              </p>
              <div className="relative md:h-64 h-36">
                <Image
                  src="/assets/images/Widget.png"
                  alt="Flexible Fiat Settlement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 4: Dedicated OTC Specialists */}
            <div className="relative overflow-hidden rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 via-white to-pink-50 p-6 w-full md:w-[56%]">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 md:block hidden">Dedicated OTC Specialists</h3>
                <h3 className="text-2xl font-bold text-gray-900 md:hidden block">Cross-border Liquidity Support</h3>
              </div>
              <p className="text-gray-600 mb-6 md:block hidden">
                Every transaction is supported by experienced OTC professionals who guide your trade with clear communication, accountability, and responsive support.
              </p>
              <p className="text-gray-600 mb-6 md:hidden block">
                Move value across markets with reliable pricing and settlement pathways              
              </p>
              <div className="relative md:h-64 h-36">
                <Image
                  src="/assets/images/map.png"
                  alt="Dedicated OTC Specialists"
                  fill
                  className="object-cover"
                />
                <Image
                  src="/assets/images/pple.png"
                  alt="Dedicated OTC Specialists"
                  fill
                  className="object-cover absolute md:block hidden"
                />
                <Image
                  src="/assets/images/germany.png"
                  alt="Dedicated OTC Specialists"
                  fill
                  className="object-cover absolute md:hidden block"
                />
              </div>
            </div>
            {/* Card 5: For Mobile */}
            <div className="relative md:hidden block overflow-hidden rounded-2xl border border-blue-200  p-6 w-full md:w-[40%]">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 ">Corporate Treasury Crypto Solutions</h3>
              </div>
              <p className="text-gray-600 mb-6 md:block hidden">
                Move value across markets with reliable pricing and settlement pathways
              </p>
              <div className="relative md:h-64 h-36">
                <Image
                  src="/assets/images/graph.png"
                  alt="Flexible Fiat Settlement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}