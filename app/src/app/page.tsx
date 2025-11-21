import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--boxing-cream)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b-2" style={{
        backgroundColor: 'var(--boxing-cream)',
        borderColor: 'var(--boxing-brown)'
      }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-[family-name:var(--font-oswald)] text-xl font-bold tracking-widest uppercase" style={{ color: 'var(--boxing-brown)' }}>
            The Rings
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-[family-name:var(--font-oswald)] uppercase tracking-wider">
            <a href="#legacy" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--boxing-brown)' }}>Legacy</a>
            <a href="#programs" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--boxing-brown)' }}>Programs</a>
            <a href="#rings" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--boxing-brown)' }}>The Rings</a>
            <a href="#join" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--boxing-brown)' }}>Join</a>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <Link
                href="/dashboard"
                className="font-[family-name:var(--font-oswald)] text-sm px-5 py-2 uppercase tracking-wider transition-colors"
                style={{ backgroundColor: 'var(--boxing-brown)', color: 'var(--boxing-cream)' }}
              >
                Enter
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-sm font-[family-name:var(--font-oswald)] uppercase tracking-wider hover:opacity-70 transition-opacity" style={{ color: 'var(--boxing-brown)' }}>
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="font-[family-name:var(--font-oswald)] text-sm px-5 py-2 uppercase tracking-wider transition-colors"
                  style={{ backgroundColor: 'var(--boxing-brown)', color: 'var(--boxing-cream)' }}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero - Fight Poster Style */}
      <section className="pt-24 pb-16 px-4 relative">
        {/* Decorative corners */}
        <div className="absolute top-20 left-4 w-16 h-16 border-l-4 border-t-4" style={{ borderColor: 'var(--boxing-gold)' }} />
        <div className="absolute top-20 right-4 w-16 h-16 border-r-4 border-t-4" style={{ borderColor: 'var(--boxing-gold)' }} />

        <div className="max-w-4xl mx-auto text-center py-16">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-6" style={{ color: 'var(--boxing-gold)' }}>
            South Jordan, Utah • Est. 2025
          </p>

          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9]" style={{ color: 'var(--boxing-brown)' }}>
            THE RINGS
          </h1>

          <p className="font-[family-name:var(--font-oswald)] text-lg md:text-xl tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--boxing-brown)' }}>
            at
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold italic mb-8" style={{ color: 'var(--boxing-red)' }}>
            Fullmer Legacy Center
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-24 h-0.5" style={{ backgroundColor: 'var(--boxing-gold)' }} />
            <div className="w-3 h-3 rotate-45" style={{ backgroundColor: 'var(--boxing-gold)' }} />
            <div className="w-24 h-0.5" style={{ backgroundColor: 'var(--boxing-gold)' }} />
          </div>

          <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--boxing-brown)' }}>
            Where youth ages 10–18 build real skills, create lasting work, and discover the champion within.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="font-[family-name:var(--font-oswald)] px-8 py-4 text-lg uppercase tracking-widest transition-transform hover:scale-105"
              style={{ backgroundColor: 'var(--boxing-red)', color: 'var(--boxing-cream)' }}
            >
              Enroll Your Child
            </Link>
            <Link
              href="#legacy"
              className="font-[family-name:var(--font-oswald)] px-8 py-4 text-lg uppercase tracking-widest border-2 transition-colors hover:opacity-80"
              style={{ borderColor: 'var(--boxing-brown)', color: 'var(--boxing-brown)' }}
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Bottom corners */}
        <div className="absolute bottom-0 left-4 w-16 h-16 border-l-4 border-b-4" style={{ borderColor: 'var(--boxing-gold)' }} />
        <div className="absolute bottom-0 right-4 w-16 h-16 border-r-4 border-b-4" style={{ borderColor: 'var(--boxing-gold)' }} />
      </section>

      {/* Legacy Section */}
      <section id="legacy" className="py-20 px-4" style={{ backgroundColor: 'var(--boxing-brown)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-4 text-center" style={{ color: 'var(--boxing-gold)' }}>
            The Legacy
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--boxing-cream)' }}>
            Built on the Spirit of a Champion
          </h2>

          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--boxing-sepia)' }}>
            <p className="font-[family-name:var(--font-playfair)]">
              <span className="text-5xl font-bold float-left mr-3 leading-none" style={{ color: 'var(--boxing-gold)' }}>G</span>
              ene Fullmer was a world middleweight boxing champion from West Jordan, Utah.
              He wasn't flashy—he was relentless, disciplined, and tough. He outworked everyone
              in the ring and became one of the most respected fighters of his era.
            </p>
            <p className="font-[family-name:var(--font-playfair)]">
              The Fullmer Legacy Center carries that spirit forward. This isn't a place where
              kids come to be entertained. It's a place where they come to <strong style={{ color: 'var(--boxing-cream)' }}>build something real</strong>—skills,
              confidence, portfolios of work they're proud of.
            </p>
            <p className="font-[family-name:var(--font-playfair)]">
              We believe every young person has a champion inside them. Our job is to help them
              find it and develop it across all nine rings of their life.
            </p>
          </div>
        </div>
      </section>

      {/* The Nine Rings */}
      <section id="rings" className="py-20 px-4" style={{ backgroundColor: 'var(--boxing-cream)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-4 text-center" style={{ color: 'var(--boxing-gold)' }}>
            The Framework
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: 'var(--boxing-brown)' }}>
            Nine Rings of Development
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12 font-[family-name:var(--font-playfair)] text-lg" style={{ color: 'var(--boxing-brown)', opacity: 0.8 }}>
            Youth development isn't one-dimensional. We track growth across nine expanding rings—from
            the inner self outward to the world.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Self', desc: 'Identity, values, emotional regulation' },
              { name: 'Brain', desc: 'Learning, problem-solving, creativity' },
              { name: 'Body', desc: 'Physical fitness, nutrition, movement' },
              { name: 'Bubble', desc: 'Family, close relationships, home' },
              { name: 'Scene', desc: 'Friends, peers, social dynamics' },
              { name: 'Neighborhood', desc: 'Local community, surroundings' },
              { name: 'Community', desc: 'Civic engagement, service' },
              { name: 'World', desc: 'Global awareness, cultures' },
              { name: 'Ether', desc: 'Digital spaces, online worlds' },
            ].map((ring) => (
              <div
                key={ring.name}
                className="p-4 border-2 text-center"
                style={{ borderColor: 'var(--boxing-gold)', backgroundColor: 'rgba(201, 162, 39, 0.05)' }}
              >
                <h4 className="font-[family-name:var(--font-oswald)] text-lg font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--boxing-brown)' }}>
                  {ring.name}
                </h4>
                <p className="text-sm font-[family-name:var(--font-playfair)]" style={{ color: 'var(--boxing-brown)', opacity: 0.7 }}>
                  {ring.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section id="programs" className="py-20 px-4" style={{ backgroundColor: 'var(--boxing-black)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-4 text-center" style={{ color: 'var(--boxing-gold)' }}>
            Programs
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: 'var(--boxing-cream)' }}>
            Four Pillars of Training
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12 font-[family-name:var(--font-playfair)] text-lg" style={{ color: 'var(--boxing-sepia)' }}>
            Youth choose their path and go deep—building portfolios, earning recognition, and
            completing challenges that mean something.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Wellness',
                color: '#4a7c59',
                desc: 'Boxing, fitness, mindfulness, nutrition. Youth earn their way into the ring—nothing is given.',
                items: ['Boxing fundamentals', 'Strength & conditioning', 'Yoga & meditation', 'Nutrition workshops']
              },
              {
                name: 'TechNest',
                color: '#3d6b8c',
                desc: 'Esports, coding, robotics, digital media. Real technical skills that transfer to careers.',
                items: ['Competitive esports', 'Game development', 'Robotics & engineering', 'Content creation']
              },
              {
                name: 'Creative Studio',
                color: '#6b4c7a',
                desc: 'Music, visual arts, design, performance. Youth create real work—albums, portfolios, shows.',
                items: ['Music production', 'Visual arts & design', 'Photography & video', 'Theater & performance']
              },
              {
                name: 'Civic Lab',
                color: '#8c5a3d',
                desc: 'Service projects, leadership, civic engagement. Youth learn to be contributors, not just consumers.',
                items: ['Community service', 'Youth council', 'Environmental initiatives', 'Intergenerational programs']
              }
            ].map((pillar) => (
              <div
                key={pillar.name}
                className="p-8 border-l-4"
                style={{ borderColor: pillar.color, backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase tracking-wider mb-3" style={{ color: pillar.color }}>
                  {pillar.name}
                </h3>
                <p className="font-[family-name:var(--font-playfair)] mb-4" style={{ color: 'var(--boxing-sepia)' }}>
                  {pillar.desc}
                </p>
                <ul className="text-sm space-y-1" style={{ color: 'var(--boxing-cream)', opacity: 0.7 }}>
                  {pillar.items.map((item) => (
                    <li key={item} className="font-[family-name:var(--font-playfair)]">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--boxing-cream)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-4 text-center" style={{ color: 'var(--boxing-gold)' }}>
            For Parents
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--boxing-brown)' }}>
            A Safe Place for Real Growth
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--boxing-brown)' }}>
                What Your Child Gets
              </h3>
              <ul className="space-y-3" style={{ color: 'var(--boxing-brown)' }}>
                {[
                  'Real skills in areas they're passionate about',
                  'A portfolio of work they created',
                  'Mentorship from trained staff',
                  'A peer community that builds them up'
                ].map((item) => (
                  <li key={item} className="flex gap-3 font-[family-name:var(--font-playfair)]">
                    <span style={{ color: 'var(--boxing-gold)' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--boxing-brown)' }}>
                Safety & Communication
              </h3>
              <ul className="space-y-3" style={{ color: 'var(--boxing-brown)' }}>
                {[
                  'All staff background checked & trained',
                  'Parent portal to track attendance',
                  'You control communication permissions',
                  'Regular updates on your child's growth'
                ].map((item) => (
                  <li key={item} className="flex gap-3 font-[family-name:var(--font-playfair)]">
                    <span style={{ color: 'var(--boxing-gold)' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="join" className="py-20 px-4" style={{ backgroundColor: 'var(--boxing-red)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--boxing-gold)' }}>
            Get Involved
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-12" style={{ color: 'var(--boxing-cream)' }}>
            Step Into the Ring
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Enroll', desc: 'Register your child', link: '/signup', cta: 'Get Started' },
              { title: 'Donate', desc: 'Support local youth', link: '#', cta: 'Give Now' },
              { title: 'Partner', desc: 'Collaborate with us', link: '#', cta: 'Contact Us' },
              { title: 'Work Here', desc: 'Join our team', link: '#', cta: 'View Jobs' }
            ].map((item) => (
              <div key={item.title} className="p-6 text-left" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <h3 className="font-[family-name:var(--font-oswald)] text-lg font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--boxing-cream)' }}>
                  {item.title}
                </h3>
                <p className="text-sm font-[family-name:var(--font-playfair)] mb-3" style={{ color: 'var(--boxing-sepia)' }}>
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className="text-sm font-[family-name:var(--font-oswald)] uppercase tracking-wider hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--boxing-gold)' }}
                >
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--boxing-cream)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--boxing-gold)' }}>
            Visit Us
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--boxing-brown)' }}>
            Fullmer Legacy Center
          </h2>
          <p className="font-[family-name:var(--font-playfair)] text-xl mb-2" style={{ color: 'var(--boxing-brown)' }}>
            South Jordan, Utah
          </p>
          <p className="font-[family-name:var(--font-playfair)] mb-8" style={{ color: 'var(--boxing-brown)', opacity: 0.7 }}>
            Monday–Friday, 3pm–8pm • Saturday 10am–4pm
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-[family-name:var(--font-oswald)] px-8 py-3 uppercase tracking-widest border-2 transition-colors hover:opacity-80"
            style={{ borderColor: 'var(--boxing-brown)', color: 'var(--boxing-brown)' }}
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-2" style={{ backgroundColor: 'var(--boxing-brown)', borderColor: 'var(--boxing-gold)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-[family-name:var(--font-oswald)] font-bold text-lg tracking-widest uppercase mb-4" style={{ color: 'var(--boxing-gold)' }}>
                The Rings
              </div>
              <p className="text-sm font-[family-name:var(--font-playfair)]" style={{ color: 'var(--boxing-sepia)' }}>
                Youth development reimagined at the Fullmer Legacy Center.
              </p>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-oswald)] font-bold text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--boxing-cream)' }}>
                Programs
              </h4>
              <ul className="text-sm space-y-2 font-[family-name:var(--font-playfair)]" style={{ color: 'var(--boxing-sepia)' }}>
                <li><a href="#programs" className="hover:opacity-70 transition-opacity">Wellness</a></li>
                <li><a href="#programs" className="hover:opacity-70 transition-opacity">TechNest</a></li>
                <li><a href="#programs" className="hover:opacity-70 transition-opacity">Creative Studio</a></li>
                <li><a href="#programs" className="hover:opacity-70 transition-opacity">Civic Lab</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-oswald)] font-bold text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--boxing-cream)' }}>
                Get Involved
              </h4>
              <ul className="text-sm space-y-2 font-[family-name:var(--font-playfair)]" style={{ color: 'var(--boxing-sepia)' }}>
                <li><Link href="/signup" className="hover:opacity-70 transition-opacity">Enroll</Link></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Donate</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Partner</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-oswald)] font-bold text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--boxing-cream)' }}>
                Connect
              </h4>
              <ul className="text-sm space-y-2 font-[family-name:var(--font-playfair)]" style={{ color: 'var(--boxing-sepia)' }}>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Instagram</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Facebook</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(201, 162, 39, 0.3)' }}>
            <p className="text-xs font-[family-name:var(--font-playfair)]" style={{ color: 'var(--boxing-sepia)' }}>
              © 2025 Fullmer Legacy Center. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs font-[family-name:var(--font-playfair)]" style={{ color: 'var(--boxing-sepia)' }}>
              <a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
