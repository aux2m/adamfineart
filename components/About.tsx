import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Add your photo to /public/images/about/profile.jpg */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-background">
            <Image
              src="/images/about/profile.jpg"
              alt="Adam Wentworth - Professional Artist & Muralist"
              fill
              className="object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border-2 border-accent/30 rounded pointer-events-none" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
              Adam Wentworth
            </h2>
            <p className="text-accent font-medium mb-4">Professional Artist & Muralist</p>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Art has the power to transform spaces and unite communities. Through my work,
                I create murals that celebrate the authentic character of Bakersfield and beyond
                &mdash;our heritage, cultural diversity, and entrepreneurial spirit.
              </p>
              <p>
                A fourth-generation Kern County native with Basque, Italian, and French heritage,
                I bring deep local roots and global perspective to every project. My approach centers
                on three principles: <strong>Community Connection</strong>, <strong>Professional Excellence</strong>,
                and <strong>Cultural Celebration</strong>.
              </p>
              <p>
                Each project begins with deep listening to the community and ends with artwork
                that reflects their stories, dreams, and identity.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-6 space-y-2 text-sm text-text-secondary">
              <p><span className="text-accent">Gallery:</span> Bird Dog Arts, Tejon Ranch (2023-Present)</p>
              <p><span className="text-accent">Awards:</span> Kern County Fair People&apos;s Choice Award</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">10+</div>
                <div className="text-text-secondary text-sm">Years as Artist</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">20+</div>
                <div className="text-text-secondary text-sm">Gallery Exhibitions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent">19K+</div>
                <div className="text-text-secondary text-sm">Sq Ft of Murals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
