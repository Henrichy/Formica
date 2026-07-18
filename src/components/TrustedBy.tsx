export default function TrustedBy() {
  const partners = [
    'BINANCE',
    'coinbase',
    'bitcoin',
    'tether',
    'BitMEX'
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 text-sm mb-8">Trusted by</p>
        <div className="flex items-center justify-center space-x-12 opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="text-gray-400 font-medium text-lg">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}