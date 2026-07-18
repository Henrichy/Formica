import Image from 'next/image'

export default function FeaturesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Desktop Version */}
        <div className="hidden md:block">
          {/* Contained Card with Background */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* Blueray Background (Bottom Layer) */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/images/blueray.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Speckles Overlay (On Top of Blueray) */}
            <div className="absolute inset-0 z-1">
              <Image
                src="/assets/images/Speckles.png"
                alt="Speckles"
                fill
                className="object-cover opacity-100"
              />
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 px-8 lg:px-16 py-16">
              {/* Top: Heading and Description */}
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">
                {/* Main Heading */}
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    What you get with<br />
                    Fortica
                  </h2>
                </div>
                
                {/* Main Description */}
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Technology powers every transaction. People make the 
                    difference. When you're moving value, every detail matters. 
                    Here's what you can expect every time you trade with Fortica.
                  </p>
                </div>
              </div>
              
              {/* Cards Grid */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Column: Compliance Card (Tall) */}
                <div className="lg:col-span-1">
                  <div className="bg-black/50 p-8 h-full flex flex-col justify-between rounded-xl">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                        Compliance you can count on
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Fortica operates through licensed, 
                        compliance-focused partners and 
                        follows industry-standard security 
                        and regulatory practices designed to 
                        protect every transaction.
                      </p>
                    </div>
                    <div className="flex justify-center mt-8">
                      <Image
                        src="/assets/images/compliance.png"
                        alt="Compliance Shield"
                        width={180}
                        height={180}
                        className="w-44 h-44 object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Right Columns */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Clear Communication Card (Full Width) */}
                  <div className="bg-black/50 p-6 flex flex-row items-center gap-6 rounded-xl">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        Clear Communication
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        From your quote to your final settlement, you'll 
                        always know what's happening. We keep every 
                        transaction transparent, with timely updates and 
                        no unnecessary surprises.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Image
                        src="/assets/images/clearcomm.png"
                        alt="Clear Communication"
                        width={100}
                        height={100}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Bottom Row: 2 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* People Behind Every Transaction Card */}
                    <div className="bg-black/50 p-6 flex flex-col rounded-xl">
                      <div className="flex justify-center mb-4">
                        <Image
                          src="/assets/images/peoplebehind.png"
                          alt="People Behind Every Transaction"
                          width={100}
                          height={100}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        People Behind Every<br />
                        Transaction
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Technology powers the process, 
                        but experienced OTC specialists 
                        oversee every settlement to help 
                        ensure accuracy, accountability, 
                        and a smooth customer 
                        experience.
                      </p>
                    </div>
                    
                    {/* Support That Stays With You Card */}
                    <div className="bg-black/50 p-6 flex flex-col justify-between rounded-xl">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                          Support That Stays<br />
                          With You
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          Whether you're making your 
                          first trade or managing a high-
                          value settlement, our team is 
                          available to provide guidance 
                          whenever you need it.
                        </p>
                      </div>
                      <div className="flex justify-end mt-8">
                        <Image
                          src="/assets/images/supportthat.png"
                          alt="Support That Stays With You"
                          width={120}
                          height={120}
                          className="w-28 h-28 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="block md:hidden">
          {/* Mobile Card with Background */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/images/blueray.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 px-6 py-12">
              {/* Header Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white leading-tight mb-6">
                  What you get with<br />
                  Fortica
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Fortica allows users to interact with the 
                  digital asset market through a secure and 
                  dependable trading environment.
                </p>
              </div>
              
              {/* Features List */}
              <div className="space-y-8">
                {/* Fast Settlement */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/images/Overlay.png"
                      alt="Fast Settlement"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Fast Settlement
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Convert digital assets and settle 
                      transactions with efficiency.
                    </p>
                  </div>
                </div>

                {/* Private OTC Execution */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/images/Overlay-2.png"
                      alt="Private OTC Execution"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Private OTC Execution
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Fortica's OTC desk provides 
                      controlled off-market execution that 
                      preserves transaction privacy for 
                      large transactions.
                    </p>
                  </div>
                </div>

                {/* Professional Support */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/images/Overlay-3.png"
                      alt="Professional Support"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Professional Support
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      A dedicated team available to 
                      assist with transactions and 
                      account management.
                    </p>
                  </div>
                </div>

                {/* Secure Accounts */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/images/Overlay-4.png"
                      alt="Secure Accounts"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Secure Accounts
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Multi-layer security architecture 
                      protects accounts and transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}