import { FaApple, FaGooglePlay } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#001370] to-[#364E76] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-16 gap-x-12 mb-20 text-sm">
          {/* Column 1: Logo & Meta */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <Image 
                src="/assets/images/Vector1.png" 
                alt="Fortica Logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
              <span className="text-3xl font-bold tracking-tight">Fortica.</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-10 text-base max-w-xs">
              Download the Fortica app to access secure digital asset trading or connect
              with our team for private OTC transactions
            </p>
            <button className="bg-white hover:bg-gray-100 text-[#071633] font-bold py-3 px-6 rounded-2xl flex items-center group transition-all duration-200">
              <span className="mr-3 text-sm">Download Fortica App</span>
              <div className="flex items-center space-x-2 border-l border-gray-200 pl-3">
                <FaApple className="w-5 h-5 text-gray-800 group-hover:text-black transition-colors" />
                <FaGooglePlay className="w-5 h-5 text-gray-800 group-hover:text-black transition-colors" />
              </div>
            </button>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-8">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors text-base">About Fortica</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-base">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-base">Security</a></li>
            </ul>
          </div>

          {/* Column 3: Products & Resources Stack (Mobile optimization) */}
          <div className="grid grid-cols-1 gap-y-12">
            <div>
              <h3 className="text-lg font-bold mb-8">Products</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-base">Fortica App</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base">OTC Desk</a></li>
              </ul>
            </div>
            <div className="lg:hidden">
              <h3 className="text-lg font-bold mb-8">Resources</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-base">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Socials & Resources */}
          <div className="grid grid-cols-1 gap-y-12">
            <div className="hidden lg:block">
              <h3 className="text-lg font-bold mb-8">Resources</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-base">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-8">Socials</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-base flex items-center">Twitter(X)</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base flex items-center">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-base flex items-center">Facebook</a></li>
              </ul>
            </div>
          </div>

          {/* Column 5: Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-8">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-base leading-relaxed">
              <li><a href="mailto:support@fortica.com" className="hover:text-white transition-colors">support@fortica.com</a></li>
              <li><a href="tel:+2348012345678" className="hover:text-white transition-colors">+234 801 234 5678</a></li>
              <li className="pt-2">12A Admiralty Way<br />Lekki Phase 1, Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 text-center text-gray-500 font-medium tracking-wide">
          <p>© Fortica. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
