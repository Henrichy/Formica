'use client'

import { useState } from 'react'
import { HiChevronUp, HiChevronDown } from 'react-icons/hi'

const faqData = [
  {
    question: "What is OTC trading?",
    answer: "OTC (Over-the-Counter) trading allows you to buy or sell large amounts of cryptocurrency directly through a dedicated trading desk instead of a public exchange. This helps reduce market impact, provides a confirmed quote before execution, and offers a more personalised settlement experience."
  },
  {
    question: "How do I sell my crypto on Fortica?",
    answer: "Selling crypto on Fortica is simple. Connect your wallet, select the cryptocurrency you want to sell, choose your preferred settlement currency (Naira or USD), and we'll provide you with a competitive quote. Once confirmed, our OTC desk will handle the execution and settlement."
  },
  {
    question: "How long does payment/settlement take?",
    answer: "Settlement times vary by payment method and currency. Naira settlements typically complete within 2-4 hours, while USD settlements to domiciliary accounts usually take 1-2 business days. We'll keep you updated throughout the process."
  },
  {
    question: "Can I receive my payment/settlement in Naira or USD?",
    answer: "Yes, Fortica supports settlements in both Nigerian Naira (NGN) to your local bank account and US Dollars (USD) to your domiciliary account. You can choose your preferred currency during the transaction setup."
  },
  {
    question: "Is Fortica secure?",
    answer: "Security is our top priority. Fortica operates through licensed, compliance-focused partners and follows industry-standard security practices. We use multi-layer security architecture to protect accounts and transactions, ensuring your assets and data remain safe."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees. All costs are transparently displayed before you confirm any transaction. Our fee structure is competitive and clearly outlined, so you'll always know exactly what you're paying for our services."
  },
  // Additional FAQs for "View more" functionality
  {
    question: "What cryptocurrencies does Fortica support?",
    answer: "Currently, Fortica supports major stablecoins including USDT, USDC, and BUSD. We also support Bitcoin (BTC) and Ethereum (ETH) for OTC transactions. Additional cryptocurrencies are being added based on market demand and regulatory compliance."
  },
  {
    question: "What is the minimum transaction amount?",
    answer: "The minimum transaction amount varies by cryptocurrency and settlement method. For retail transactions, the minimum is typically $100 equivalent. For OTC desk services, we handle transactions starting from $10,000. Contact our team for specific requirements."
  },
  {
    question: "How do I create a Fortica account?",
    answer: "Creating an account is straightforward. Visit our website or download the Fortica app, provide your basic information, complete the identity verification process, and you'll be ready to start trading. The entire process usually takes less than 24 hours."
  },
  {
    question: "Do I need to complete KYC verification?",
    answer: "Yes, Know Your Customer (KYC) verification is required for all users to comply with financial regulations and ensure platform security. You'll need to provide a valid ID, proof of address, and complete identity verification during account setup."
  },
  {
    question: "Can businesses use Fortica for corporate transactions?",
    answer: "Absolutely. Fortica provides dedicated corporate services including bulk transactions, treasury management, and customized settlement solutions for businesses. Contact our corporate team to discuss your specific requirements and get preferential rates."
  },
  {
    question: "What happens if there's an issue with my transaction?",
    answer: "If you encounter any issues, our support team is available 24/7 to assist you. Every transaction is tracked and can be resolved quickly. We also have dedicated account managers for high-value clients to ensure immediate assistance when needed."
  },
  {
    question: "How does Fortica ensure competitive exchange rates?",
    answer: "We aggregate liquidity from multiple sources and market makers to ensure you get competitive rates. Our real-time pricing engine constantly monitors market conditions to offer you the best possible exchange rates for your transactions."
  },
  {
    question: "Can I cancel a transaction after confirmation?",
    answer: "Once a transaction is confirmed and processing has begun, cancellation may not be possible. However, if you contact support immediately after confirmation, we'll do our best to accommodate your request depending on the transaction status and settlement stage."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default
  const [showAll, setShowAll] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const displayedFaqs = showAll ? faqData : faqData.slice(0, 6)

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Answers To Your Questions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about managing your assets, protecting 
            your wealth, and building a secure and successful financial future.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 text-gray-500">
                  {openIndex === index ? (
                    <HiChevronUp className="w-5 h-5" />
                  ) : (
                    <HiChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && faqData.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-200"
            >
              View more
            </button>
          </div>
        )}

        {/* View Less Button (when expanded) */}
        {showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full transition duration-200"
            >
              View less
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
