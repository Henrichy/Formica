import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

export default function CallToAction() {
  return (
    <section className="bg-[#f8f9fa] border-t border-b border-gray-100">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Block: Private OTC Access */}
          <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Private OTC Access
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Structured execution and deep liquidity for entities trading large-block digital assets
                with controlled settlement.
              </p>
              <button className="bg-[#0E43AC] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-[40px] transition duration-200 flex items-center group uppercase tracking-wider text-sm shadow-lg shadow-blue-100">
                REQUEST ACCESS
                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Block: Start Trading Today */}
          <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24 bg-white lg:bg-transparent">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Start Trading Today
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Buy and sell digital assets directly from the<br />Fortica app with transparent pricing and<br />fast settlement
              </p>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-3xl transition duration-200 flex items-center group shadow-sm bg-white">
                <span className="text-blue-600 font-semibold mr-3">Download Fortica App</span>
                <div className="flex items-center space-x-2 border-l border-gray-200 pl-3">
                  <FaApple className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
                  <FaGooglePlay className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
