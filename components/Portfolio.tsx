'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = ['All', 'Murals', 'Canvas', 'Restorations']

// =============================================================================
// PORTFOLIO CONFIGURATION - Edit this array to add/remove your artwork
// Images go in: /public/images/portfolio/{murals|canvas|restorations}/
// =============================================================================
const portfolioItems = [
  // MURALS
  {
    id: 1,
    title: 'Community Center Mural',
    category: 'Murals',
    image: '/images/portfolio/murals/community-center.jpg',
  },
  {
    id: 2,
    title: 'School Mural Project',
    category: 'Murals',
    image: '/images/portfolio/murals/school-mural.jpg',
  },
  {
    id: 3,
    title: 'Historic Building Mural',
    category: 'Murals',
    image: '/images/portfolio/murals/historic-building.jpg',
  },
  // CANVAS
  {
    id: 4,
    title: 'Abstract Expression',
    category: 'Canvas',
    image: '/images/portfolio/canvas/abstract-1.jpg',
  },
  {
    id: 5,
    title: 'Coastal Landscape',
    category: 'Canvas',
    image: '/images/portfolio/canvas/landscape-1.jpg',
  },
  {
    id: 6,
    title: 'Modern Abstract',
    category: 'Canvas',
    image: '/images/portfolio/canvas/abstract-2.jpg',
  },
  // RESTORATIONS
  {
    id: 7,
    title: 'Vintage Portrait Restoration',
    category: 'Restorations',
    image: '/images/portfolio/restorations/portrait-1.jpg',
  },
  {
    id: 8,
    title: 'Family Photo Restoration',
    category: 'Restorations',
    image: '/images/portfolio/restorations/family-1.jpg',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Portfolio
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore a collection of custom murals, canvas paintings, and photo restorations
            that showcase the artistry and attention to detail in every project.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent text-background'
                  : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <h3 className="text-text-primary font-heading font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-accent text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
