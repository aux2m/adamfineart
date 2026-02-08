import { Paintbrush, Frame, Printer } from 'lucide-react'

const services = [
  {
    icon: Paintbrush,
    title: 'Custom Murals',
    description:
      'Transform any space with a stunning custom mural. From residential walls to commercial buildings and public spaces, I create murals that tell your story and captivate viewers.',
    features: ['Indoor & Outdoor', 'Any Size', 'Weather Resistant'],
  },
  {
    icon: Frame,
    title: 'Originals',
    description:
      'Commission a unique original painting tailored to your vision. Whether on canvas, board, or other surfaces, each piece is a one-of-a-kind creation designed just for you.',
    features: ['One-of-a-Kind', 'Custom Sizes', 'Various Surfaces'],
  },
  {
    icon: Printer,
    title: 'Art Prints',
    description:
      'Own a piece of the collection with museum-quality reproductions. Available as limited edition canvas giclees, paper prints, and posters in various sizes.',
    features: ['Canvas Giclees', 'Paper Prints', 'Multiple Sizes'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Services
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Professional art services tailored to bring your creative vision to life,
            from large-scale murals to original paintings and quality prints.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background-alt rounded-lg p-8 border border-white/5 hover:border-accent/30 transition-all group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center text-accent font-medium text-sm hover:text-accent-hover transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
