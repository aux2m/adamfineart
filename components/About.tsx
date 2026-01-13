import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800"
              alt="Adam Wentworth - Artist"
              fill
              className="object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border-2 border-accent/30 rounded pointer-events-none" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
              The Artist Behind the Art
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                With over two decades of experience transforming spaces through art,
                I bring a unique blend of technical skill and creative vision to every project.
                From large-scale murals that tell community stories to intimate canvas pieces
                that become family heirlooms.
              </p>
              <p>
                Based in Bakersfield, California, my work spans public installations, private
                commissions, and meticulous photo restorations. Every brushstroke is guided
                by a deep respect for the craft and a commitment to exceeding client expectations.
              </p>
              <p>
                Whether you&apos;re looking to transform a blank wall into a stunning mural,
                commission a custom canvas painting, or restore a treasured family photograph,
                I approach each project with the same dedication and attention to detail.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">20+</div>
                <div className="text-text-secondary text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">150+</div>
                <div className="text-text-secondary text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">100%</div>
                <div className="text-text-secondary text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
