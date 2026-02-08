'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = ['All', 'Murals', 'Pop Culture', 'Western', 'Portraits', 'Fantasy']

// =============================================================================
// PORTFOLIO CONFIGURATION - Edit this array to add/remove your artwork
// Images go in: /public/images/portfolio/canvas/
// =============================================================================
const portfolioItems = [
  // MURALS - Large-scale wall art
  {
    id: 1,
    title: 'ShePower Global Leadership Academy',
    category: 'Murals',
    image: '/images/portfolio/murals/IMG_4675.JPEG',
  },
  // POP CULTURE - Star Wars, Marvel, Disney, etc.
  {
    id: 2,
    title: 'Alderaan Graffiti',
    category: 'Pop Culture',
    image: '/images/portfolio/canvas/IMG_3904.JPEG',
  },
  {
    id: 3,
    title: 'Destiny',
    category: 'Pop Culture',
    image: '/images/portfolio/canvas/IMG_3899.JPEG',
  },
  {
    id: 4,
    title: 'Urban Stormtrooper',
    category: 'Pop Culture',
    image: '/images/portfolio/canvas/IMG_3913.JPEG',
  },
  {
    id: 5,
    title: 'Master Yoda',
    category: 'Pop Culture',
    image: '/images/portfolio/canvas/B32A5C94-D324-49EB-90C1-54B73D252A07.jpg',
  },
  {
    id: 6,
    title: 'The Falcon',
    category: 'Pop Culture',
    image: '/images/portfolio/canvas/IMG_3900.JPEG',
  },
  {
    id: 7,
    title: 'Spider-Man NYC',
    category: 'Pop Culture',
    image: '/images/portfolio/canvas/IMG_4904.JPG',
  },
  {
    id: 8,
    title: 'Iron Man',
    category: 'Pop Culture',
    image: '/images/portfolio/canvas/IMG_4603.JPEG',
  },
  {
    id: 9,
    title: 'Magic Kingdom',
    category: 'Pop Culture',
    image: '/images/portfolio/canvas/IMG_2012.JPG',
  },
  {
    id: 10,
    title: 'Radiator Springs',
    category: 'Pop Culture',
    image: '/images/portfolio/canvas/IMG_2351.JPG',
  },
  {
    id: 11,
    title: 'Penguin Pilots',
    category: 'Pop Culture',
    image: '/images/portfolio/canvas/IMG_3452.JPEG',
  },
  // WESTERN - Horses, Native American themes
  {
    id: 12,
    title: 'Blessed Are The Meek',
    category: 'Western',
    image: '/images/portfolio/canvas/IMG_4821.JPG',
  },
  {
    id: 13,
    title: 'Empathy',
    category: 'Western',
    image: '/images/portfolio/canvas/IMG_3845.JPEG',
  },
  {
    id: 14,
    title: 'The Kiss',
    category: 'Western',
    image: '/images/portfolio/canvas/IMG_2358.JPEG',
  },
  {
    id: 15,
    title: 'Mother & Calf',
    category: 'Western',
    image: '/images/portfolio/canvas/IMG_6763.JPG',
  },
  {
    id: 16,
    title: 'Aztec Princess',
    category: 'Western',
    image: '/images/portfolio/canvas/IMG_3847.JPEG',
  },
  // PORTRAITS - Dia de los Muertos, Gothic, Warriors
  {
    id: 17,
    title: 'La Catrina',
    category: 'Portraits',
    image: '/images/portfolio/canvas/IMG_6874.JPEG',
  },
  {
    id: 18,
    title: 'Mariposa',
    category: 'Portraits',
    image: '/images/portfolio/canvas/IMG_2359.JPG',
  },
  {
    id: 19,
    title: 'Queen of Shadows',
    category: 'Portraits',
    image: '/images/portfolio/canvas/IMG_5925.JPEG',
  },
  {
    id: 20,
    title: 'Neon Dreams',
    category: 'Portraits',
    image: '/images/portfolio/canvas/IMG_3457.JPEG',
  },
  {
    id: 21,
    title: 'Polynesian Beauty',
    category: 'Portraits',
    image: '/images/portfolio/canvas/IMG_7629.JPEG',
  },
  {
    id: 22,
    title: 'The Gentleman',
    category: 'Portraits',
    image: '/images/portfolio/canvas/76712E29-56ED-4155-B7C4-EA7BA9110AB1.jpg',
  },
  {
    id: 23,
    title: 'Spartan',
    category: 'Portraits',
    image: '/images/portfolio/canvas/3E052B53-76CE-4885-865B-73099BF9D006.jpg',
  },
  // FANTASY - Alice in Wonderland, Peter Pan, Maleficent
  {
    id: 24,
    title: 'Who Are You?',
    category: 'Fantasy',
    image: '/images/portfolio/canvas/IMG_7762.JPEG',
  },
  {
    id: 25,
    title: 'Second Star to the Right',
    category: 'Fantasy',
    image: '/images/portfolio/canvas/IMG_4816.JPEG',
  },
  {
    id: 26,
    title: 'Mistress of Evil',
    category: 'Fantasy',
    image: '/images/portfolio/canvas/IMG_4818.JPEG',
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
            Explore a collection of custom murals and canvas paintings
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
