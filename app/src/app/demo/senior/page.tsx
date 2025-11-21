import Link from 'next/link'

export default function SeniorDemo() {
  const elder = {
    name: 'Robert',
    memberSince: '2025',
    storiesShared: 12,
    youthMentored: 8,
  }

  const youthRequests = [
    {
      from: 'Aaliyah M.',
      age: 13,
      request: 'Interview about growing up in the 1960s for history project',
      crew: 'Civic Lab',
      date: 'Tomorrow 4 PM',
    },
    {
      from: 'Code Breakers Crew',
      members: 6,
      request: 'Share career advice for presentation on "jobs that didn\'t exist"',
      crew: 'TechNest',
      date: 'Friday 3:30 PM',
    },
  ]

  const skillsToShare = [
    { skill: 'Woodworking', interest: 'High', lastTaught: 'Last week' },
    { skill: 'Gardening', interest: 'Medium', lastTaught: '2 weeks ago' },
    { skill: 'Storytelling', interest: 'High', lastTaught: 'Yesterday' },
  ]

  const wellnessClasses = [
    { name: 'Chair Yoga', day: 'Mon/Wed/Fri', time: '9 AM', enrolled: true },
    { name: 'Memory & Mind', day: 'Tuesday', time: '10 AM', enrolled: true },
    { name: 'Gentle Fitness', day: 'Thursday', time: '9 AM', enrolled: false },
  ]

  const upcomingEvents = [
    { name: 'Intergenerational Game Day', date: 'Saturday 2 PM', role: 'Card games host' },
    { name: 'Oral History Recording', date: 'Next Tuesday 11 AM', role: 'Share your story' },
    { name: 'Holiday Craft Fair', date: 'Dec 15', role: 'Woodworking booth' },
  ]

  const recentConnections = [
    { name: 'Marcus J.', type: 'Mentee', note: 'Helped with public speaking', date: 'This week' },
    { name: 'Emma M.', type: 'Story listener', note: 'Recorded your Korea story', date: 'Last week' },
    { name: 'Helen T.', type: 'Peer', note: 'Yoga buddy', date: 'Ongoing' },
  ]

  const storyPrompts = [
    'What was your first job and what did it teach you?',
    'Describe a moment that changed your life direction.',
    'What do you wish you had learned earlier?',
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
              ELDER VIEW
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            Welcome back, {elder.name}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Impact Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="hud-border bg-card/50 p-4 text-center">
            <div className="text-3xl font-bold font-mono text-primary">{elder.storiesShared}</div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Stories Shared</div>
          </div>
          <div className="hud-border bg-card/50 p-4 text-center">
            <div className="text-3xl font-bold font-mono text-accent">{elder.youthMentored}</div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Youth Mentored</div>
          </div>
          <div className="hud-border bg-card/50 p-4 text-center">
            <div className="text-3xl font-bold font-mono text-green-400">47</div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Hours Given</div>
          </div>
        </div>

        {/* Youth Requests */}
        <div className="hud-border bg-card/50 p-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Youth Are Asking For You
          </h2>
          <div className="space-y-4">
            {youthRequests.map((req, i) => (
              <div key={i} className="border border-primary/30 bg-primary/5 p-4 rounded">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-mono text-foreground">{req.from}</div>
                    <div className="text-xs text-muted-foreground">{req.crew}</div>
                  </div>
                  <div className="text-xs text-primary font-mono">{req.date}</div>
                </div>
                <div className="text-sm text-muted-foreground mb-3">{req.request}</div>
                <div className="flex gap-2">
                  <button className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30">
                    Accept
                  </button>
                  <button className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded hover:bg-muted/80">
                    Suggest Time
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Upcoming Events */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Where You're Needed
              </h2>
              <div className="space-y-3">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="flex justify-between items-center p-3 border border-border/30 bg-card/30 rounded">
                    <div>
                      <div className="font-mono text-sm text-foreground">{event.name}</div>
                      <div className="text-xs text-muted-foreground">{event.role}</div>
                    </div>
                    <div className="text-xs text-primary font-mono">{event.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills to Share */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Your Skills
              </h2>
              <div className="space-y-3">
                {skillsToShare.map((skill, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <div className="font-mono text-sm text-foreground">{skill.skill}</div>
                      <div className="text-xs text-muted-foreground">Last taught: {skill.lastTaught}</div>
                    </div>
                    <div className={`text-xs font-mono ${
                      skill.interest === 'High' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {skill.interest} interest
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-sm px-3 py-2 bg-primary/20 text-primary rounded hover:bg-primary/30 font-mono">
                + Add a Skill to Share
              </button>
            </div>

            {/* Story Prompts */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Story Prompts
              </h2>
              <div className="space-y-3">
                {storyPrompts.map((prompt, i) => (
                  <div key={i} className="p-3 border border-accent/30 bg-accent/5 rounded text-sm text-foreground">
                    {prompt}
                    <button className="block mt-2 text-xs text-accent hover:underline">
                      Record this story →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Wellness Classes */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Your Wellness
              </h2>
              <div className="space-y-3">
                {wellnessClasses.map((cls, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <div className="font-mono text-sm text-foreground">{cls.name}</div>
                      <div className="text-xs text-muted-foreground">{cls.day} {cls.time}</div>
                    </div>
                    {cls.enrolled ? (
                      <span className="text-xs text-green-400">Enrolled</span>
                    ) : (
                      <button className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                        Join
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Connections */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Your Connections
              </h2>
              <div className="space-y-3">
                {recentConnections.map((conn, i) => (
                  <div key={i} className="text-sm border-l-2 border-green-500/30 pl-3">
                    <div className="font-mono text-foreground">{conn.name}</div>
                    <div className="text-xs text-muted-foreground">{conn.type} • {conn.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legacy Note */}
            <div className="hud-border bg-accent/10 border-accent/30 p-4">
              <div className="text-sm text-accent font-mono mb-2">Your Legacy</div>
              <div className="text-xs text-muted-foreground">
                Your stories and skills are shaping the next generation. Thank you for being here.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-muted-foreground font-mono py-4">
          This is a simulated elder view showing youth requests, skill sharing, and legacy building.
        </div>
      </main>
    </div>
  )
}
