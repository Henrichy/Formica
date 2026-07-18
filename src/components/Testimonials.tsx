import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah Mitchell",
    avatar: "SM", // Using initials as placeholder since we don't have actual images
    testimonial: "The interface is clean and easy to understand, even for someone new to crypto. Buying and selling has been seamless so far.",
    bgColor: "bg-red-500"
  },
  {
    name: "Michael Adeyemi", 
    avatar: "MA",
    testimonial: "Great platform overall. I would love to see more cryptocurrencies supported, but everything else has been reliable.",
    bgColor: "bg-orange-600"
  },
  {
    name: "Grace Thompson",
    avatar: "GT", 
    testimonial: "Customer support was incredibly helpful when I made a mistake with a wallet address. They guided me through the process and resolved my issue quickly.",
    bgColor: "bg-yellow-600"
  },
  {
    name: "David Chen",
    avatar: "DC",
    testimonial: "Fast settlements and transparent fees make this my go-to platform for crypto transactions. The OTC desk is perfect for my larger trades.",
    bgColor: "bg-blue-600"
  },
  {
    name: "Amara Okafor",
    avatar: "AO",
    testimonial: "I've been using Fortica for months now. The security measures give me confidence, and the Naira settlements are always on time.",
    bgColor: "bg-green-600"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:block hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Don't take our word for it
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Read what our community members have to say. Find out why 
            many users depend on our platform for their crypto needs.
          </p>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div className="relative">
          <div className="flex overflow-x-auto overflow-y-hidden gap-6 pb-4 scrollbar-hide">
            <div className="flex gap-4 px-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-2xl p-6 flex flex-col min-w-[320px] max-w-[320px] flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* Avatar */}
                    <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    {/* Name */}
                    <h3 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="flex-grow">
                    <p className="text-gray-600 leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Gradient Overlays */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}