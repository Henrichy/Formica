import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import Image from 'next/image'

export default function PreFooter() {
  return (
    <section className="bg-gradient-to-b from-white via-white to-[#001370] py-12 px-4 md:px-0 overflow-hidden">
      <div className="container mx-auto">
        <div className="bg-[#001370] rounded-[48px] overflow-hidden relative min-h-[460px] flex items-center shadow-2xl shadow-blue-200">
          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 lg:px-24 text-white lg:w-2/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Start trading with<br />confidence.
            </h2>
            <p className="text-blue-100/90 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
              Access digital asset markets through a platform built for secure execution and disciplined trading.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button className="text-white hover:text-blue-200 font-bold text-lg flex items-center group transition-colors">
                Get Started
                <HiArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#0E43AC] font-bold py-4 px-8 rounded-3xl transition duration-200 flex items-center group shadow-xl">
                <span className="mr-3">Download Fortica App</span>
                <div className="flex items-center space-x-2 border-l border-gray-200 pl-3">
                  <FaApple className="w-5 h-5 text-gray-800 group-hover:text-black transition-colors" />
                  <FaGooglePlay className="w-5 h-5 text-gray-800 group-hover:text-black transition-colors" />
                </div>
              </button>
            </div>
          </div>

          {/* Top-Left Decor */}
          <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none z-0">
            <Image
              src="/assets/images/Ellipse1.png"
              alt=""
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Bottom-Right Decor */}
          <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none z-0 flex justify-end items-end">
            <Image
              src="/assets/images/Ellipse2.png"
              alt=""
              width={600}
              height={600}
              className="object-contain translate-x-10 translate-y-10"
            />
          </div>

          {/* Coins Image */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] z-10">
            <div className="relative w-full h-full flex items-center justify-end pr-12">
              <Image
                src="/assets/images/coin.png"
                alt="Crypto Coins"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
