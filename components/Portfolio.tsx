'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = ['All', 'Murals', 'Canvas', 'Restorations']

const portfolioItems = [
  {
    id: 1,
    title: 'Urban Street Mural',
    category: 'Murals',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800',
  },
  {
    id: 2,
    title: 'Abstract Expression',
    category: 'Canvas',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800',
  },
  {
    id: 3,
    title: 'Community Center Mural',
    category: 'Murals',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800',
  },
  {
    id: 4,
    title: 'Vintage Portrait Restoration',
    category: 'Restorations',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800',
  },
  {
    id: 5,
    title: 'Coastal Landscape',
    category: 'Canvas',
    image: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?q=80&w=800',
  },
  {
    id: 6,
    title: 'Historic Building Mural',
    category: 'Murals',
    image: 'https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=800',
  },
  {
    id: 7,
    title: 'Family Photo Restoration',
    category: 'Restorations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800',
  },
  {
    id: 8,
    title: 'Modern Abstract',
    category: 'Canvas',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800',
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
