import React from 'react'

const ColorTest = () => {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold text-sthavia-cream mb-4">Sthavia Color Test</h2>

      {/* Background Colors */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-sthavia-deep-forest p-4 rounded">
          <span className="text-sthavia-cream">Deep Forest</span>
        </div>
        <div className="bg-sthavia-sage p-4 rounded">
          <span className="text-sthavia-deep-forest">Sage</span>
        </div>
        <div className="bg-sthavia-warm-beige p-4 rounded">
          <span className="text-sthavia-deep-forest">Warm Beige</span>
        </div>
        <div className="bg-sthavia-cream p-4 rounded">
          <span className="text-sthavia-deep-forest">Cream</span>
        </div>
        <div className="bg-sthavia-gold p-4 rounded">
          <span className="text-sthavia-soft-white">Gold</span>
        </div>
        <div className="bg-sthavia-soft-white p-4 rounded">
          <span className="text-sthavia-deep-forest">Soft White</span>
        </div>
      </div>

      {/* Text Colors */}
      <div className="space-y-2">
        <p className="text-sthavia-sage">This is sage text</p>
        <p className="text-sthavia-gold">This is gold text</p>
        <p className="text-sthavia-cream">This is cream text</p>
        <p className="text-sthavia-soft-white">This is soft white text</p>
      </div>

      {/* Border Colors */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-sthavia-sage p-4 rounded">
          <span className="text-sthavia-cream">Sage Border</span>
        </div>
        <div className="border-2 border-sthavia-gold p-4 rounded">
          <span className="text-sthavia-cream">Gold Border</span>
        </div>
      </div>
    </div>
  )
}

export default ColorTest
