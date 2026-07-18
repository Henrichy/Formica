import React from 'react'

export default function OTCJourney() {
  const steps = [
    {
      number: 1,
      title: 'Request a Quote on the App',
      description: 'Tell us what cryptocurrency you\'d like to sell and how you\'d like to receive your settlement.'
    },
    {
      number: 2,
      title: 'Review & Confirm',
      description: 'Receive a transparent OTC quote showing your exchange rate, payout amount, and settlement details before you proceed.'
    },
    {
      number: 3,
      title: 'We Execute Your Trade',
      description: 'Once confirmed, our OTC specialists securely execute your transaction while keeping you updated throughout the process.'
    },
    {
      number: 4,
      title: 'Receive Your Funds',
      description: 'Get paid directly into your Nigerian bank account or domiciliary account (USD, GBP or EUR) through Fortica\'s trusted settlement process.'
    }
  ]

  return (
    <section className="py-16 bg-white md:block hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your OTC Journey Made Simple
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Fortica combines the personalised service of an institutional OTC desk with the convenience of a modern app. Here's how your transaction moves from request to settlement.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Dotted Line */}
          <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
            <div className="w-full h-0.5" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #c7d2fe 0px, #c7d2fe 4px, transparent 4px, transparent 8px)' }} />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-0">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center w-full md:w-1/4 max-w-xs h-full">
                {/* Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-lg bg-[#F2F4FF] flex items-center justify-center mb-6 flex-shrink-0">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-[#3C3CFF] to-[#FFA978] opacity-70">
                    <div className="w-full h-full rounded-lg bg-[#F2F4FF]"></div>
                  </div>
                  <span className="relative text-2xl font-bold text-gray-900">{step.number}</span>
                </div>
                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
