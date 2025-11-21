import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-mono text-lg font-bold tracking-wider text-primary">
            THE RINGS
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">Programs</a>
            <a href="#rings" className="text-muted-foreground hover:text-foreground transition-colors">The Rings</a>
            <a href="#get-involved" className="text-muted-foreground hover:text-foreground transition-colors">Get Involved</a>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <Link
                href="/dashboard"
                className="font-mono text-sm px-4 py-2 bg-primary text-background hover:bg-primary/90 transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="font-mono text-sm px-4 py-2 bg-primary text-background hover:bg-primary/90 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-mono text-primary mb-4 tracking-wider">SOUTH JORDAN, UTAH</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where Youth Discover Their
              <span className="text-primary"> Champion</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Rings at Fullmer Legacy Center is a youth development space where young people
              ages 10-18 build real skills, create lasting work, and grow across every dimension
              of their lives—from physical fitness to digital creation to community leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#get-involved"
                className="px-6 py-3 bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
              >
                Enroll Your Child
              </Link>
              <Link
                href="#about"
                className="px-6 py-3 border border-border text-foreground font-medium hover:bg-card transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/cyclone.png"
              alt="The Cyclone - Nine Rings of Development"
              width={500}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* About / The Legacy */}
      <section id="about" className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-mono text-primary mb-4 tracking-wider text-center">THE LEGACY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Built on the Spirit of a Champion
          </h2>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Gene Fullmer was a world middleweight boxing champion from West Jordan, Utah.
              He wasn&apos;t flashy—he was relentless, disciplined, and tough. He outworked everyone
              in the ring and became one of the most respected fighters of his era.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The Fullmer Legacy Center carries that spirit forward. This isn&apos;t a place where
              kids come to be entertained. It&apos;s a place where they come to <strong className="text-foreground">build something real</strong>—skills,
              confidence, portfolios of work they&apos;re proud of.
            </p>
            <p className="text-lg leading-relaxed">
              We believe every young person has a champion inside them. Our job is to help them
              find it and develop it across all nine rings of their life.
            </p>
          </div>
        </div>
      </section>

      {/* The Nine Rings Concept */}
      <section id="rings" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-mono text-primary mb-4 tracking-wider text-center">THE FRAMEWORK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Nine Rings
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Youth development isn&apos;t one-dimensional. We track growth across nine expanding rings—from
            the inner self outward to the world. Each ring represents a domain of life where young
            people can build skills and earn recognition.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="p-4 border border-border/50 bg-card/30">
                <h4 className="font-bold text-orange-400 mb-1">Self</h4>
                <p className="text-sm text-muted-foreground">Identity, values, emotional regulation, self-awareness</p>
              </div>
              <div className="p-4 border border-border/50 bg-card/30">
                <h4 className="font-bold text-cyan-400 mb-1">Body</h4>
                <p className="text-sm text-muted-foreground">Physical fitness, nutrition, sports, movement</p>
              </div>
              <div className="p-4 border border-border/50 bg-card/30">
                <h4 className="font-bold text-yellow-400 mb-1">Brain</h4>
                <p className="text-sm text-muted-foreground">Learning, problem-solving, creativity, knowledge</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-border/50 bg-card/30">
                <h4 className="font-bold text-blue-400 mb-1">Bubble</h4>
                <p className="text-sm text-muted-foreground">Family, close relationships, home life</p>
              </div>
              <div className="p-4 border border-border/50 bg-card/30">
                <h4 className="font-bold text-indigo-400 mb-1">Scene</h4>
                <p className="text-sm text-muted-foreground">Friend groups, peers, social dynamics</p>
              </div>
              <div className="p-4 border border-border/50 bg-card/30">
                <h4 className="font-bold text-orange-500 mb-1">Neighborhood</h4>
                <p className="text-sm text-muted-foreground">Local community, neighbors, immediate surroundings</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-border/50 bg-card/30">
                <h4 className="font-bold text-lime-400 mb-1">Community</h4>
                <p className="text-sm text-muted-foreground">Civic engagement, service, local organizations</p>
              </div>
              <div className="p-4 border border-border/50 bg-card/30">
                <h4 className="font-bold text-blue-500 mb-1">World</h4>
                <p className="text-sm text-muted-foreground">Global awareness, cultures, world events</p>
              </div>
              <div className="p-4 border border-border/50 bg-card/30">
                <h4 className="font-bold text-purple-400 mb-1">Ether</h4>
                <p className="text-sm text-muted-foreground">Digital spaces, online communities, virtual worlds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars / Programs */}
      <section id="programs" className="py-20 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-mono text-primary mb-4 tracking-wider text-center">PROGRAMS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Four Pillars of Programming
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything we do falls under four pillars. Youth choose their path and go deep—building
            portfolios, earning badges, and completing quests that mean something.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-green-500/30 bg-card/50">
              <div className="w-4 h-4 rounded-full bg-green-400 mb-4" />
              <h3 className="text-xl font-bold text-green-400 mb-3">Wellness</h3>
              <p className="text-muted-foreground mb-4">
                Boxing, fitness, mindfulness, nutrition education. Youth learn to take care of their
                bodies and minds. They earn their way into the boxing rings—nothing is given.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Boxing fundamentals & sparring</li>
                <li>• Strength & conditioning</li>
                <li>• Yoga & meditation</li>
                <li>• Nutrition workshops</li>
              </ul>
            </div>

            <div className="p-8 border border-blue-500/30 bg-card/50">
              <div className="w-4 h-4 rounded-full bg-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-blue-400 mb-3">TechNest</h3>
              <p className="text-muted-foreground mb-4">
                Esports, coding, robotics, digital media. This isn&apos;t just gaming—it&apos;s building real
                technical skills that transfer to careers.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Competitive esports teams</li>
                <li>• Game development & coding</li>
                <li>• Robotics & engineering</li>
                <li>• Streaming & content creation</li>
              </ul>
            </div>

            <div className="p-8 border border-purple-500/30 bg-card/50">
              <div className="w-4 h-4 rounded-full bg-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-purple-400 mb-3">Creative Studio</h3>
              <p className="text-muted-foreground mb-4">
                Music, visual arts, design, performance. Youth create real work—albums, portfolios,
                shows—not just &quot;art class.&quot;
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Music production & recording</li>
                <li>• Visual arts & design</li>
                <li>• Photography & video</li>
                <li>• Performance & theater</li>
              </ul>
            </div>

            <div className="p-8 border border-orange-500/30 bg-card/50">
              <div className="w-4 h-4 rounded-full bg-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-orange-400 mb-3">Civic Lab</h3>
              <p className="text-muted-foreground mb-4">
                Service projects, leadership, civic engagement. Youth learn to see themselves as
                contributors to their community, not just consumers.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Community service projects</li>
                <li>• Youth council & leadership</li>
                <li>• Environmental initiatives</li>
                <li>• Intergenerational programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Parents */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-mono text-primary mb-4 tracking-wider text-center">FOR PARENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            A Safe Place for Real Growth
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">What Your Child Gets</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  Real skills in areas they&apos;re passionate about
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  A portfolio of work they created
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  Mentorship from trained staff
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  A peer community that builds them up
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Safety & Communication</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  All staff background checked & trained
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  Parent portal to track attendance & progress
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  You control communication permissions
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  Regular updates on your child&apos;s growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="py-20 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-mono text-primary mb-4 tracking-wider">GET INVOLVED</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Join the Movement
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-border/50 bg-card">
              <h3 className="font-bold mb-2">Enroll</h3>
              <p className="text-sm text-muted-foreground mb-4">Register your child for programs</p>
              <Link href="/signup" className="text-primary text-sm font-medium hover:underline">
                Get Started →
              </Link>
            </div>
            <div className="p-6 border border-border/50 bg-card">
              <h3 className="font-bold mb-2">Donate</h3>
              <p className="text-sm text-muted-foreground mb-4">Support youth in your community</p>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                Give Now →
              </a>
            </div>
            <div className="p-6 border border-border/50 bg-card">
              <h3 className="font-bold mb-2">Partner</h3>
              <p className="text-sm text-muted-foreground mb-4">Collaborate with us as a business</p>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                Contact Us →
              </a>
            </div>
            <div className="p-6 border border-border/50 bg-card">
              <h3 className="font-bold mb-2">Work Here</h3>
              <p className="text-sm text-muted-foreground mb-4">Join our team of mentors</p>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                View Jobs →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-mono text-primary mb-4 tracking-wider">VISIT US</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fullmer Legacy Center
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            South Jordan, Utah
          </p>
          <p className="text-muted-foreground mb-8">
            Open Monday–Friday, 3pm–8pm | Saturday 10am–4pm
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-border text-foreground font-medium hover:bg-card transition-colors"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-mono font-bold text-primary mb-4">THE RINGS</div>
              <p className="text-sm text-muted-foreground">
                Youth development reimagined at the Fullmer Legacy Center.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Programs</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><a href="#programs" className="hover:text-foreground transition-colors">Wellness</a></li>
                <li><a href="#programs" className="hover:text-foreground transition-colors">TechNest</a></li>
                <li><a href="#programs" className="hover:text-foreground transition-colors">Creative Studio</a></li>
                <li><a href="#programs" className="hover:text-foreground transition-colors">Civic Lab</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Get Involved</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><a href="/signup" className="hover:text-foreground transition-colors">Enroll</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Donate</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Partner</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Connect</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 Fullmer Legacy Center. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
