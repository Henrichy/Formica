'use client'

import Image from 'next/image'

export default function Carousel() {
  const carouselItems = [
    {
      id: 1,
      image: '/assets/images/carousel1.png',
      title: 'Private OTC Execution',
      description: 'Execute large transactions off-market with controlled pricing and full discretion',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 2,
      image: '/assets/images/carousel2.png',
      title: 'Block trade execution',
      description: 'Handle high-volume trades without disrupting market conditions',
      bgColor: 'bg-gray-100'
    },
    {
      id: 3,
      image: '/assets/images/carousel3.png',
      title: 'Corporate treasury crypto solutions',
      description: 'Integrate digital assets into treasury operations with structured access and liquidity',
      bgColor: 'bg-blue-50'
    },
    {
      id: 4,
      image: '/assets/images/carousel4.png',
      title: 'Cross-border liquidity support',
      description: 'Move value across markets with reliable pricing and settlement pathways',
      bgColor: 'bg-cyan-50'
    },
    {
      id: 5,
      image: '/assets/images/carousel5.png',
      title: 'On and Off Ramp Service',
      description: 'Convert your crypto instantly through our verified OTC desk. Secure, seamless, and reliable',
      bgColor: 'bg-green-50'
    }
  ]

  return (
    <div className="w-full overflow-hidden bg-white py-8 relative isolate">
      <div className="flex space-x-4 md:space-x-6 animate-scroll">
        {/* Triple the items for seamless infinite loop */}
        {[...carouselItems, ...carouselItems, ...carouselItems].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`flex-shrink-0 w-64 md:w-80 ${item.bgColor} rounded-2xl px-4 md:px-6 pt-4 md:pt-6 pb-0 shadow-lg flex flex-col h-64 md:h-80 overflow-hidden`}
          >
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="flex justify-center mt-auto">
              <Image
                src={item.image}
                alt={item.title}
                width={160}
                height={120}
                className="object-contain w-[140px] h-[100px] md:w-[200px] md:h-[150px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}