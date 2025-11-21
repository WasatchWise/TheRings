'use client'

import Link from 'next/link'
import { CycloneMini } from '@/components/ui/cyclone'

export default function ParentDemo() {
  const children = [
    {
      name: 'Emma',
      age: 12,
      status: 'checked-in',
      zone: 'Creative Studio',
      todayHours: 2.5,
      currentQuest: 'Digital Photography',
      mood: 'engaged',
      rings: [
        { id: '1', name: 'Self', slug: 'self', level: 35, maxLevel: 100 },
        { id: '2', name: 'Brain', slug: 'brain', level: 42, maxLevel: 100 },
        { id: '3', name: 'Body', slug: 'body', level: 28, maxLevel: 100 },
        { id: '4', name: 'Bubble', slug: 'bubble', level: 50, maxLevel: 100 },
        { id: '5', name: 'Scene', slug: 'scene', level: 45, maxLevel: 100 },
        { id: '6', name: 'Neighborhood', slug: 'neighborhood', level: 20, maxLevel: 100 },
        { id: '7', name: 'Community', slug: 'community', level: 25, maxLevel: 100 },
        { id: '8', name: 'World', slug: 'world', level: 15, maxLevel: 100 },
        { id: '9', name: 'Ether', slug: 'ether', level: 38, maxLevel: 100 },
      ],
    },
    {
      name: 'Jake',
      age: 8,
      status: 'checked-in',
      zone: 'Early Childhood',
      todayHours: 4,
      currentQuest: null,
      mood: 'playing',
      rings: [
        { id: '1', name: 'Self', slug: 'self', level: 55, maxLevel: 100 },
        { id: '2', name: 'Brain', slug: 'brain', level: 30, maxLevel: 100 },
        { id: '3', name: 'Body', slug: 'body', level: 60, maxLevel: 100 },
        { id: '4', name: 'Bubble', slug: 'bubble', level: 45, maxLevel: 100 },
        { id: '5', name: 'Scene', slug: 'scene', level: 35, maxLevel: 100 },
        { id: '6', name: 'Neighborhood', slug: 'neighborhood', level: 25, maxLevel: 100 },
        { id: '7', name: 'Community', slug: 'community', level: 20, maxLevel: 100 },
        { id: '8', name: 'World', slug: 'world', level: 10, maxLevel: 100 },
        { id: '9', name: 'Ether', slug: 'ether', level: 22, maxLevel: 100 },
      ],
    },
  ]

  const recentArtifacts = [
    { title: 'Sunset Photo', date: 'Today', type: 'image', child: 'Emma' },
    { title: 'Clay Bowl', date: 'Yesterday', type: 'image', child: 'Emma' },
    { title: 'Dance Recital Clip', date: '3 days ago', type: 'video', child: 'Emma' },
  ]

  const staffNotes = [
    {
      from: 'Ms. Rivera',
      about: 'Emma',
      note: 'Emma showed great patience helping a younger member with camera settings. Natural mentor!',
      date: 'Today',
    },
    {
      from: 'Coach Mike',
      about: 'Jake',
      note: 'Jake had a great day! Made two new friends during free play.',
      date: 'Yesterday',
    },
  ]

  const upcomingEvents = [
    { name: 'Parent Open House', date: 'Tonight 7 PM', type: 'family' },
    { name: 'Creative Showcase', date: 'Friday 6 PM', type: 'performance' },
    { name: 'Family Fitness Saturday', date: 'Sat 10 AM', type: 'activity' },
  ]

  const adultClasses = [
    { name: 'Intro to AI Tools', date: 'Thursday 7 PM', spots: 8 },
    { name: 'Yoga Flow', date: 'Mon/Wed 6 AM', spots: 12 },
    { name: 'Paint Night', date: 'Friday 7 PM', spots: 4 },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-mono text-sm text-muted-foreground hover:text-primary">
              ← Back to Site
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-mono text-lg font-bold tracking-widest text-primary">
              PARENT VIEW
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            The Martinez Family
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Children Status */}
        <div className="grid md:grid-cols-2 gap-4">
          {children.map((child) => (
            <div key={child.name} className="hud-border bg-card/50 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <CycloneMini rings={child.rings} />
                  <div>
                    <div className="font-mono text-xl font-bold text-primary">{child.name}</div>
                    <div className="text-xs text-muted-foreground">Age {child.age}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-green-400 font-mono">Checked In</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{child.zone}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs">Today</div>
                  <div className="font-mono">{child.todayHours} hours</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Status</div>
                  <div className="font-mono text-green-400">{child.mood}</div>
                </div>
              </div>
              {child.currentQuest && (
                <div className="mt-3 pt-3 border-t border-border/30">
                  <div className="text-xs text-muted-foreground">Current Quest</div>
                  <div className="text-sm font-mono text-accent">{child.currentQuest}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Ring Progress Comparison */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Ring Progress Comparison
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {children.map((child) => (
                  <div key={child.name}>
                    <div className="font-mono text-sm text-primary mb-3">{child.name}</div>
                    <div className="space-y-2">
                      {child.rings.slice(0, 5).map((ring) => (
                        <div key={ring.name} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="font-mono text-foreground">{ring.name}</span>
                            <span className="text-muted-foreground">{ring.level}%</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all duration-1000"
                              style={{ width: `${ring.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Artifacts */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Recent Loot Drops
              </h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {recentArtifacts.map((artifact, i) => (
                  <div key={i} className="border border-border/30 bg-card/30 p-3 rounded text-center">
                    <div className="w-full h-20 bg-muted rounded mb-2 flex items-center justify-center text-2xl">
                      {artifact.type === 'image' ? '📷' : '🎬'}
                    </div>
                    <div className="text-sm font-mono">{artifact.title}</div>
                    <div className="text-xs text-muted-foreground">{artifact.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Staff Notes */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Notes from Staff
              </h2>
              <div className="space-y-3">
                {staffNotes.map((note, i) => (
                  <div key={i} className="border-l-2 border-green-500/30 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-sm text-green-400">{note.from}</span>
                      <span className="text-xs text-muted-foreground">about {note.about}</span>
                    </div>
                    <div className="text-sm text-foreground">{note.note}</div>
                    <div className="text-xs text-muted-foreground mt-1">{note.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Upcoming Events */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Upcoming Events
              </h2>
              <div className="space-y-3">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="text-sm">
                    <div className="font-mono text-foreground">{event.name}</div>
                    <div className="text-xs text-primary">{event.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Adult Classes */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Classes for You
              </h2>
              <div className="space-y-3">
                {adultClasses.map((cls, i) => (
                  <div key={i} className="text-sm">
                    <div className="font-mono text-accent">{cls.name}</div>
                    <div className="text-xs text-muted-foreground">{cls.date}</div>
                    <div className="text-xs text-green-400">{cls.spots} spots left</div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-sm px-3 py-2 bg-accent/20 text-accent rounded hover:bg-accent/30 font-mono">
                Browse All Classes
              </button>
            </div>

            {/* Quick Actions */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Quick Actions
              </h2>
              <div className="space-y-2">
                <button className="w-full text-left text-sm px-3 py-2 bg-primary/20 text-primary rounded hover:bg-primary/30 font-mono">
                  Message Staff
                </button>
                <button className="w-full text-left text-sm px-3 py-2 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 font-mono">
                  Update Pickup Time
                </button>
                <button className="w-full text-left text-sm px-3 py-2 bg-accent/20 text-accent rounded hover:bg-accent/30 font-mono">
                  Volunteer Sign-up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-muted-foreground font-mono py-4">
          This is a simulated parent view showing real-time child status, progress tracking, and family engagement.
        </div>
      </main>
    </div>
  )
}
