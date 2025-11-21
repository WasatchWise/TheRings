import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--boxing-cream)' }}>
      {/* Demo Mode Banner */}
      <div className="fixed top-0 w-full z-[60] py-3 px-4" style={{ backgroundColor: 'var(--boxing-black)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-center font-[family-name:var(--font-oswald)] text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--boxing-gold)' }}>
            Demo Mode: See The Rings Through Different Eyes
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/demo/board" className="px-3 py-1 text-xs font-[family-name:var(--font-oswald)] uppercase tracking-wider transition-colors" style={{ backgroundColor: 'var(--boxing-gold)', color: 'var(--boxing-black)' }}>
              Board Member
            </Link>
            <Link href="/demo/staff" className="px-3 py-1 text-xs font-[family-name:var(--font-oswald)] uppercase tracking-wider transition-colors" style={{ backgroundColor: 'var(--boxing-red)', color: 'var(--boxing-cream)' }}>
              Staff
            </Link>
            <Link href="/demo/parent" className="px-3 py-1 text-xs font-[family-name:var(--font-oswald)] uppercase tracking-wider transition-colors" style={{ backgroundColor: '#4a7c59', color: 'var(--boxing-cream)' }}>
              Parent
            </Link>
            <Link href="/demo/youth" className="px-3 py-1 text-xs font-[family-name:var(--font-oswald)] uppercase tracking-wider transition-colors" style={{ backgroundColor: '#3d6b8c', color: 'var(--boxing-cream)' }}>
              Youth
            </Link>
            <Link href="/demo/adult" className="px-3 py-1 text-xs font-[family-name:var(--font-oswald)] uppercase tracking-wider transition-colors" style={{ backgroundColor: '#6b4c7a', color: 'var(--boxing-cream)' }}>
              Adult
            </Link>
            <Link href="/demo/senior" className="px-3 py-1 text-xs font-[family-name:var(--font-oswald)] uppercase tracking-wider transition-colors" style={{ backgroundColor: 'var(--boxing-brown)', color: 'var(--boxing-cream)' }}>
              Senior
            </Link>
            <Link href="/demo/partner" className="px-3 py-1 text-xs font-[family-name:var(--font-oswald)] uppercase tracking-wider border transition-colors" style={{ borderColor: 'var(--boxing-gold)', color: 'var(--boxing-gold)' }}>
              Partner Event
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-[72px] w-full z-50 border-b-2" style={{
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
      <section className="pt-40 pb-16 px-4 relative overflow-hidden">
        {/* Decorative corners */}
        <div className="absolute top-20 left-4 w-16 h-16 border-l-4 border-t-4" style={{ borderColor: 'var(--boxing-gold)' }} />
        <div className="absolute top-20 right-4 w-16 h-16 border-r-4 border-t-4" style={{ borderColor: 'var(--boxing-gold)' }} />

        {/* Animated Rings Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.07] pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <style>
              {`
                @keyframes ring-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes ring-spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
                @keyframes ring-pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
              `}
            </style>
            {[180, 160, 140, 120, 100, 80, 60, 40, 20].map((r, i) => (
              <circle
                key={i}
                cx="200"
                cy="200"
                r={r}
                fill="none"
                stroke="var(--boxing-brown)"
                strokeWidth="2"
                style={{
                  transformOrigin: 'center',
                  animation: `${i % 2 === 0 ? 'ring-spin' : 'ring-spin-reverse'} ${30 + i * 5}s linear infinite, ring-pulse ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center py-16 relative z-10">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-6" style={{ color: 'var(--boxing-gold)' }}>
            South Jordan, Utah • Est. 2025
          </p>

          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-[0.9]" style={{ color: 'var(--boxing-brown)' }}>
            THE RINGS
          </h1>

          <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl italic mb-6" style={{ color: 'var(--boxing-brown)', opacity: 0.8 }}>
            The Relationships that Inspire, Nurture, and Guide your Story
          </p>

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
            A community center for the whole family—from early childhood through adulthood—where everyone builds real skills and discovers the champion within.
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

      {/* The Science Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--boxing-cream)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-4 text-center" style={{ color: 'var(--boxing-gold)' }}>
            The Science
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: 'var(--boxing-brown)' }}>
            Built on How Young People Actually Learn
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12 font-[family-name:var(--font-playfair)] text-lg" style={{ color: 'var(--boxing-brown)', opacity: 0.8 }}>
            Our approach isn't invented—it's grounded in brain science and proven learning models.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* HOMAGO */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--boxing-gold)', color: 'var(--boxing-brown)' }}>
                →
              </div>
              <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--boxing-brown)' }}>
                HOMAGO
              </h3>
              <p className="font-[family-name:var(--font-playfair)] text-sm mb-4" style={{ color: 'var(--boxing-brown)', opacity: 0.9 }}>
                <strong>H</strong>anging <strong>O</strong>ut → <strong>M</strong>essing <strong>A</strong>round → <strong>G</strong>eeking <strong>O</strong>ut
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-sm" style={{ color: 'var(--boxing-brown)', opacity: 0.8 }}>
                Youth start by exploring casually, then experiment with what interests them, then go deep on what they love. We don't force—we facilitate.
              </p>
            </div>

            {/* Brain Science */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--boxing-red)', color: 'var(--boxing-cream)' }}>
                🧠
              </div>
              <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--boxing-brown)' }}>
                Brain Science
              </h3>
              <p className="font-[family-name:var(--font-playfair)] text-sm mb-4" style={{ color: 'var(--boxing-brown)', opacity: 0.9 }}>
                Adolescent brains need risk, novelty, and peers
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-sm" style={{ color: 'var(--boxing-brown)', opacity: 0.8 }}>
                We channel it—real challenges, real stakes, real crews. The teenage brain isn't broken; it's built for exactly this.
              </p>
            </div>

            {/* Developmental Stages */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: '#3d6b8c', color: 'var(--boxing-cream)' }}>
                📈
              </div>
              <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--boxing-brown)' }}>
                Dev Stages
              </h3>
              <p className="font-[family-name:var(--font-playfair)] text-sm mb-4" style={{ color: 'var(--boxing-brown)', opacity: 0.9 }}>
                10-12, 13-15, 16-18 need different things
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-sm" style={{ color: 'var(--boxing-brown)', opacity: 0.8 }}>
                We meet youth where they are—younger kids need more structure, older teens need more autonomy. Same pillars, different approach.
              </p>
            </div>

            {/* SOLE */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: '#4a7c59', color: 'var(--boxing-cream)' }}>
                🔄
              </div>
              <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--boxing-brown)' }}>
                SOLE
              </h3>
              <p className="font-[family-name:var(--font-playfair)] text-sm mb-4" style={{ color: 'var(--boxing-brown)', opacity: 0.9 }}>
                Self-Organized Learning Environment
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-sm" style={{ color: 'var(--boxing-brown)', opacity: 0.8 }}>
                Youth choose quests, form crews, drive their learning. Staff facilitate, not lecture. Agency creates engagement.
              </p>
            </div>
          </div>

          <p className="text-center mt-12 font-[family-name:var(--font-playfair)] italic" style={{ color: 'var(--boxing-brown)', opacity: 0.7 }}>
            This isn't babysitting. This is intentional youth development backed by research.
          </p>
        </div>
      </section>

      {/* All Day, All Ages */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--boxing-black)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-4 text-center" style={{ color: 'var(--boxing-gold)' }}>
            Open All Day
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: 'var(--boxing-cream)' }}>
            Serving the Whole Community
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12 font-[family-name:var(--font-playfair)] text-lg" style={{ color: 'var(--boxing-sepia)' }}>
            From morning childcare to evening adult classes—we keep the building alive and serving families all day long.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Early Childhood',
                time: 'Morning',
                items: ['Affordable childcare', 'Mommy & Me classes', 'Pre-K readiness'],
                color: 'var(--boxing-gold)'
              },
              {
                title: 'Youth Programs',
                time: 'After School',
                items: ['Ages 10–18', 'Four pillars of training', 'Quest-based learning'],
                color: 'var(--boxing-red)'
              },
              {
                title: 'Adult Classes',
                time: 'Evenings',
                items: ['AI & technology', 'English language', 'Tax preparation'],
                color: '#3d6b8c'
              },
              {
                title: 'Community Events',
                time: 'Weekends',
                items: ['Paint nights', 'Craft workshops', 'Social gatherings'],
                color: '#4a7c59'
              }
            ].map((program) => (
              <div
                key={program.title}
                className="p-6 border-t-4 text-center"
                style={{ borderColor: program.color, backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <p className="font-[family-name:var(--font-oswald)] text-xs font-medium uppercase tracking-wider mb-1" style={{ color: program.color }}>
                  {program.time}
                </p>
                <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--boxing-cream)' }}>
                  {program.title}
                </h3>
                <ul className="text-sm space-y-1" style={{ color: 'var(--boxing-sepia)' }}>
                  {program.items.map((item) => (
                    <li key={item} className="font-[family-name:var(--font-playfair)] font-medium">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 font-[family-name:var(--font-playfair)] italic" style={{ color: 'var(--boxing-sepia)' }}>
            Adults HOMAGO too—Hanging Out at events, Messing Around with new skills, Geeking Out on what matters.
          </p>
        </div>
      </section>

      {/* The Nine Rings */}
      <section id="rings" className="py-20 px-4" style={{ backgroundColor: 'var(--boxing-black)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.4em] uppercase mb-4 text-center" style={{ color: 'var(--boxing-gold)' }}>
            The Framework
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: 'var(--boxing-cream)' }}>
            Nine Rings of Development
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12 font-[family-name:var(--font-playfair)] text-lg" style={{ color: 'var(--boxing-sepia)' }}>
            Growth isn't one-dimensional. We track development across nine expanding rings—from
            the inner self outward to the world. For youth and adults alike.
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
                style={{ borderColor: 'var(--boxing-gold)', backgroundColor: 'rgba(201, 162, 39, 0.1)' }}
              >
                <h4 className="font-[family-name:var(--font-oswald)] text-lg font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--boxing-gold)' }}>
                  {ring.name}
                </h4>
                <p className="text-sm font-[family-name:var(--font-playfair)]" style={{ color: 'var(--boxing-sepia)' }}>
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
                className="p-8 text-center border-t-4"
                style={{ borderColor: pillar.color, backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase tracking-wider mb-3" style={{ color: pillar.color }}>
                  {pillar.name}
                </h3>
                <p className="font-[family-name:var(--font-playfair)] font-medium mb-4 text-base" style={{ color: 'var(--boxing-sepia)' }}>
                  {pillar.desc}
                </p>
                <ul className="text-sm space-y-1" style={{ color: 'var(--boxing-cream)', opacity: 0.8 }}>
                  {pillar.items.map((item) => (
                    <li key={item} className="font-[family-name:var(--font-playfair)] font-medium">{item}</li>
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
                  "Real skills in areas they're passionate about",
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
                  "Regular updates on your child's growth"
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
              <div key={item.title} className="p-6 text-center" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--boxing-cream)' }}>
                  {item.title}
                </h3>
                <p className="text-sm font-[family-name:var(--font-playfair)] font-medium mb-3" style={{ color: 'var(--boxing-sepia)' }}>
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className="text-sm font-[family-name:var(--font-oswald)] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity"
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
