'use client'

import { useState } from 'react'
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from 'react-icons/hi'

const faqData = [
  {
    question: "What is Fortica?",
    answer: "Fortica is a digital asset trading platform that provides both a retail trading application and an institutional OTC desk. The platform enables individuals and organizations to buy, sell, convert, and manage cryptocurrencies through a secure and structured execution environment"
  },
  {
    question: "What services does Fortica offer?",
    answer: "Fortica provides:\n• Private OTC (Over-the-Counter) trade execution\n• Block trade support for large transactions\n• Crypto-to-cash conversion (Naira and US Dollar)\n• Corporate treasury crypto solutions\n• Cross-border liquidity and settlement\n• Secure wallet and trading infrastructure"
  },
  {
    question: "How do I sell my crypto on Fortica?",
    answer: "Selling crypto is fully in-app:\n1. Select the asset you want to sell (e.g., USDT, USDC, BUSD)\n2. Choose whether to convert to Naira or US Dollar cash\n3. Select or add your bank or domiciliary account\n4. Confirm the transaction at the displayed real-time rate\n5. Receive settlement based on your selected option"
  },
  {
    question: "Can I convert crypto to Naira or US Dollar cash?",
    answer: "Yes. Fortica allows you to convert supported stablecoins into:\n• Naira (NGN): Paid instantly to your local bank account\n• US Dollar (USD): Sent to your domiciliary account (processed same day)"
  },
  {
    question: "How do I buy crypto on Fortica?",
    answer: "To buy crypto on Fortica:\n1. Initiate a buy request on the platform\n2. You will be redirected to WhatsApp to complete the transaction with a support agent\n3. Payment and settlement instructions will be provided during the chat\n4. Your crypto will be delivered to your Fortica account upon confirmation"
  },
  {
    question: "What does OTC (Over-the-Counter) mean?",
    answer: "OTC trading allows you to execute large crypto transactions directly through Fortica without placing orders on public exchanges. This helps avoid price slippage, ensures controlled pricing, and maintains discretion for high-volume trades."
  },
  {
    question: "How long does settlement take?",
    answer: "• Naira settlements: Typically instant after transaction confirmation\n• US Dollar settlements: Processed and completed by the end of the same business day"
  },
  {
    question: "Are there any fees for converting crypto?",
    answer: "Yes.\n• Converting crypto to US Dollar cash attracts a 1.5% fee\n• Other fees, if applicable, are transparently reflected before you confirm any transaction"
  },
  {
    question: "What cryptocurrencies are supported on Fortica?",
    answer: "Currently, Fortica supports only stablecoins which include:\n• USDT\n• USDC\n• BUSD\n\nAdditional assets are coming soon as the platform expands."
  },
  {
    question: "Is Fortica secure?",
    answer: "Yes. Fortica is built with a strong focus on security, offering:\n• Secure user accounts\n• Verified liquidity and wallet partners\n• Controlled execution environments for large trades\n• Reliable settlement infrastructure"
  },
  {
    question: "Who is Fortica designed for?",
    answer: "Fortica is built for:\n• Individual crypto users\n• Businesses managing digital assets\n• Financial institutions requiring liquidity and execution services"
  },
  {
    question: "What is the minimum or maximum amount I can trade?",
    answer: "Trade limits may vary depending on the transaction type and liquidity conditions.\nFor large or specialized trades, Fortica's OTC desk ensures optimal execution.\nSpecific limits are shown during transaction setup or can be confirmed via support."
  },
  {
    question: "Can I partially convert my crypto to US Dollars?",
    answer: "Yes. You can convert a percentage of your crypto holdings into US Dollar cash.\nThe exact percentage options are defined within the platform at the time of transaction."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach Fortica support via:\n• WhatsApp (for buy transactions and assistance)\n• In app support channels\n• Official communication channels listed on the website"
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    console.log('Toggling FAQ index:', index)
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about Fortica
          </p>
        </div>

        <div className="border-t border-gray-100">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-10 text-left group"
              >
                <span className={`text-xl md:text-2xl font-bold transition-colors duration-200 ${
                  openIndex === index ? 'text-[#0E43AC]' : 'text-gray-900'
                }`}>
                  {faq.question}
                </span>
                <div className="text-blue-600 flex-shrink-0">
                  {openIndex === index ? (
                    <HiOutlineMinusCircle className="w-8 h-8" />
                  ) : (
                    <HiOutlinePlusCircle className="w-8 h-8" />
                  )}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-[2000px] opacity-100 pb-10' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-gray-500 text-lg md:text-xl leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
