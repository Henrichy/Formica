import Image from 'next/image'

export default function TrustedBySection() {
  const partners = [
    {
      name: 'OneLiquidity',
      logo: '/assets/images/oneliquidity.png',
      alt: 'OneLiquidity'
    },
    {
      name: 'SumSub',
      logo: '/assets/images/sumsub.png',
      alt: 'SumSub'
    },
    {
      name: 'Bitcoin',
      logo: '/assets/images/btc.png',
      alt: 'Bitcoin'
    },
    {
      name: 'USDT',
      logo: '/assets/images/tether.png',
      alt: 'USDT'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center md:block hidden  mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built for Individuals. Trusted by Businesses.
          </h2>
        </div>
        
        {/* Description */}
        <div className="text-center mb-16 max-w-5xl mx-auto md:block hidden ">
          <p className="text-gray-600 text-lg leading-relaxed">
            Fortica supports everyone from everyday crypto holders to businesses executing large-value transactions.
            <br />
            Designed with institutional standards while remaining simple enough for first-time customers.
          </p>
        </div>
                {/* Mobile Main Heading */}
        <div className="text-center md:hidden block  mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted By.
          </h2>
        </div>
        
        {/* Description */}
        <div className="text-center mb-16 max-w-5xl mx-auto md:hidden block ">
          <p className="text-gray-600 text-lg leading-relaxed">
            Powering the next generation of financial innovation.
          </p>
        </div>
        
        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center ">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center ">
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={100}
                height={40}
                className="md:h-28 h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}