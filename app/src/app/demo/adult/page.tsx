import Link from 'next/link'

export default function AdultDemo() {
  const profile = {
    name: 'Sarah',
    interests: ['AI/Tech', 'Yoga', 'Photography'],
    memberSince: 'Oct 2025',
  }

  const myClasses = [
    { name: 'AI Tools for Work', progress: 60, nextSession: 'Thursday 7 PM' },
    { name: 'Yoga Flow', progress: 40, nextSession: 'Tomorrow 6 AM' },
  ]

  const socialEvents = [
    {
      name: 'Speed Friending',
      date: 'This Friday 7 PM',
      desc: 'Meet 10 new people in 30 minutes. Not dating, just connection.',
      spots: 6,
      vibe: 'casual',
    },
    {
      name: 'Paint & Sip with Craft & Crush',
      date: 'Saturday 7 PM',
      desc: 'Wine, canvas, and good conversation.',
      spots: 4,
      vibe: 'creative',
    },
    {
      name: 'Tech Talk Tuesday',
      date: 'Next Tuesday 6:30 PM',
      desc: 'Discuss AI, gadgets, and the future. Beginners welcome.',
      spots: 12,
      vibe: 'nerdy',
    },
  ]

  const dateNights = [
    {
      name: 'Cooking Class for Couples',
      date: 'Friday 6 PM',
      desc: 'Learn to make pasta together.',
      spots: 3,
    },
    {
      name: 'Partner Yoga',
      date: 'Saturday 9 AM',
      desc: 'Stretch and connect.',
      spots: 5,
    },
  ]

  const peopleYouMightLike = [
    { name: 'Mike R.', shared: 'AI Tools class, Photography', lastSeen: 'Yesterday' },
    { name: 'Jennifer K.', shared: 'Yoga, Speed Friending attendee', lastSeen: 'This week' },
    { name: 'Carlos M.', shared: 'Tech Talk regular', lastSeen: 'Today' },
  ]

  const rings = [
    { name: 'Self', level: 45 },
    { name: 'Brain', level: 62 },
    { name: 'Body', level: 55 },
    { name: 'Scene', level: 38 },
    { name: 'Community', level: 28 },
  ]

  const volunteerOpportunities = [
    { role: 'Youth Mentor (TechNest)', commitment: '2 hrs/week', need: 'High' },
    { role: 'Event Setup Helper', commitment: 'As needed', need: 'Medium' },
    { role: 'Photography for Events', commitment: '1 event/month', need: 'High' },
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
              ADULT VIEW
            </span>
          </div>
          <div className="flex items-center gap-2">
            {profile.interests.map((interest, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Ring Progress */}
        <div className="hud-border bg-card/50 p-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Your Growth This Month
          </h2>
          <div className="flex gap-4">
            {rings.map((ring) => (
              <div key={ring.name} className="flex-1 text-center">
                <div className="text-lg font-bold font-mono text-primary">{ring.level}</div>
                <div className="text-[10px] font-mono text-muted-foreground">{ring.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Social Events */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
                Meet People
              </h2>
              <div className="space-y-4">
                {socialEvents.map((event, i) => (
                  <div key={i} className="border border-accent/30 bg-accent/5 p-4 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-mono text-foreground">{event.name}</div>
                        <div className="text-xs text-accent">{event.date}</div>
                      </div>
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                        {event.vibe}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">{event.desc}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-green-400">{event.spots} spots left</span>
                      <button className="text-xs px-3 py-1 bg-accent/20 text-accent rounded hover:bg-accent/30">
                        RSVP
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Nights */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-pink-400 mb-4">
                Date Nights & Couples
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {dateNights.map((event, i) => (
                  <div key={i} className="border border-pink-500/30 bg-pink-500/5 p-4 rounded">
                    <div className="font-mono text-sm text-foreground mb-1">{event.name}</div>
                    <div className="text-xs text-pink-400 mb-2">{event.date}</div>
                    <div className="text-xs text-muted-foreground mb-3">{event.desc}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-green-400">{event.spots} couples left</span>
                      <button className="text-xs px-3 py-1 bg-pink-500/20 text-pink-400 rounded hover:bg-pink-500/30">
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Classes */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                My Learning
              </h2>
              <div className="space-y-4">
                {myClasses.map((cls, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-foreground">{cls.name}</span>
                      <span className="text-xs text-primary">{cls.nextSession}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${cls.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm px-3 py-2 bg-primary/20 text-primary rounded hover:bg-primary/30 font-mono">
                Browse All Classes
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* People You Might Like */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                People with Similar Interests
              </h2>
              <div className="space-y-3">
                {peopleYouMightLike.map((person, i) => (
                  <div key={i} className="text-sm">
                    <div className="font-mono text-foreground">{person.name}</div>
                    <div className="text-xs text-muted-foreground">Shared: {person.shared}</div>
                    <div className="text-xs text-primary mt-1">Seen {person.lastSeen}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Names visible only if both opt-in to connections.
              </p>
            </div>

            {/* Volunteer */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Give Back
              </h2>
              <div className="space-y-3">
                {volunteerOpportunities.map((opp, i) => (
                  <div key={i} className="text-sm">
                    <div className="font-mono text-foreground">{opp.role}</div>
                    <div className="text-xs text-muted-foreground">{opp.commitment}</div>
                    <div className={`text-xs mt-1 ${
                      opp.need === 'High' ? 'text-yellow-400' : 'text-muted-foreground'
                    }`}>
                      Need: {opp.need}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-sm px-3 py-2 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 font-mono">
                Sign Up to Volunteer
              </button>
            </div>

            {/* Privacy Note */}
            <div className="hud-border bg-card/30 p-4">
              <div className="text-xs text-muted-foreground">
                <strong className="text-foreground">Your privacy matters.</strong> Profile details are only shared with people you connect with. You control visibility.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-muted-foreground font-mono py-4">
          This is a simulated adult view showing classes, social events, and community connection with privacy controls.
        </div>
      </main>
    </div>
  )
}
