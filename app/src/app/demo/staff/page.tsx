import Link from 'next/link'

export default function StaffDemo() {
  const myShift = {
    zone: 'TechNest',
    time: '3:00 PM - 8:00 PM',
    role: 'Lead Facilitator',
  }

  const inMyZone = [
    { name: 'Marcus J.', age: 14, status: 'active', currentQuest: 'Game Dev Basics', mood: 'focused' },
    { name: 'Sophia R.', age: 12, status: 'active', currentQuest: 'Intro to Robotics', mood: 'excited' },
    { name: 'Devon W.', age: 16, status: 'active', currentQuest: 'Streaming Setup', mood: 'chill' },
    { name: 'Aaliyah M.', age: 13, status: 'idle', currentQuest: null, mood: 'looking around' },
    { name: 'Tyler K.', age: 15, status: 'active', currentQuest: 'Cybersecurity 101', mood: 'intense' },
  ]

  const myCrews = [
    { name: 'Code Breakers', members: 6, nextSession: 'Today 4:30 PM', quest: 'Build a Game' },
    { name: 'Bot Squad', members: 4, nextSession: 'Tomorrow 3:30 PM', quest: 'Sumo Robot Battle' },
  ]

  const todaySchedule = [
    { time: '3:00 PM', event: 'Open Lab', zone: 'TechNest', status: 'now' },
    { time: '4:30 PM', event: 'Code Breakers Crew Session', zone: 'TechNest', status: 'upcoming' },
    { time: '6:00 PM', event: 'Esports Practice', zone: 'Gaming Arena', status: 'upcoming' },
    { time: '7:00 PM', event: 'Parent Open House', zone: 'All Zones', status: 'upcoming' },
  ]

  const alerts = [
    { type: 'info', message: 'Aaliyah M. has been idle for 15 min - consider check-in' },
    { type: 'success', message: 'Marcus J. just completed 3rd quest step - acknowledge!' },
  ]

  const recentNotes = [
    { youth: 'Devon W.', note: 'Showed leadership helping new member with OBS setup', by: 'Jamie', time: 'Yesterday' },
    { youth: 'Sophia R.', note: 'Frustrated with servo motors - needs encouragement', by: 'You', time: '2 days ago' },
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
              STAFF VIEW
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-cyan-400">{myShift.zone}</span>
            <span className="text-xs text-muted-foreground">{myShift.time}</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="space-y-2">
            {alerts.map((alert, i) => (
              <div
                key={i}
                className={`p-3 rounded border ${
                  alert.type === 'info' ? 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400' :
                  'border-green-500/30 bg-green-500/10 text-green-400'
                } text-sm font-mono`}
              >
                {alert.message}
              </div>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Youth in My Zone */}
          <div className="lg:col-span-2 space-y-4">
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Youth in {myShift.zone} Right Now
              </h2>
              <div className="space-y-3">
                {inMyZone.map((youth) => (
                  <div key={youth.name} className="flex items-center justify-between p-3 border border-border/30 bg-card/30 rounded">
                    <div>
                      <div className="font-mono text-foreground">{youth.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Age {youth.age} • {youth.currentQuest || 'No active quest'}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-mono ${
                        youth.status === 'active' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {youth.mood}
                      </div>
                      <div className="flex gap-2 mt-1">
                        <button className="text-xs px-2 py-1 bg-primary/20 text-primary rounded hover:bg-primary/30">
                          Note
                        </button>
                        <button className="text-xs px-2 py-1 bg-accent/20 text-accent rounded hover:bg-accent/30">
                          Check-in
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Crews */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                My Crews
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {myCrews.map((crew) => (
                  <div key={crew.name} className="p-3 border border-primary/30 bg-primary/5 rounded">
                    <div className="font-mono font-bold text-primary">{crew.name}</div>
                    <div className="text-xs text-muted-foreground">{crew.members} members</div>
                    <div className="text-sm text-foreground mt-2">{crew.quest}</div>
                    <div className="text-xs text-cyan-400 mt-1">{crew.nextSession}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Today's Schedule */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Today's Schedule
              </h2>
              <div className="space-y-3">
                {todaySchedule.map((item, i) => (
                  <div key={i} className={`text-sm ${item.status === 'now' ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className="font-mono">{item.time}</div>
                    <div className={item.status === 'now' ? 'text-foreground font-medium' : ''}>
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Notes */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Recent Notes
              </h2>
              <div className="space-y-3">
                {recentNotes.map((note, i) => (
                  <div key={i} className="text-sm border-l-2 border-accent/30 pl-3">
                    <div className="font-mono text-accent">{note.youth}</div>
                    <div className="text-muted-foreground text-xs">{note.note}</div>
                    <div className="text-xs text-muted-foreground/50 mt-1">
                      {note.by} • {note.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Quick Actions
              </h2>
              <div className="space-y-2">
                <button className="w-full text-left text-sm px-3 py-2 bg-primary/20 text-primary rounded hover:bg-primary/30 font-mono">
                  + Check In Youth
                </button>
                <button className="w-full text-left text-sm px-3 py-2 bg-accent/20 text-accent rounded hover:bg-accent/30 font-mono">
                  + Log Activity Note
                </button>
                <button className="w-full text-left text-sm px-3 py-2 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 font-mono">
                  + Award Badge
                </button>
                <button className="w-full text-left text-sm px-3 py-2 bg-yellow-500/20 text-yellow-400 rounded hover:bg-yellow-500/30 font-mono">
                  + Safety Incident
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-muted-foreground font-mono py-4">
          This is a simulated staff view showing zone management, youth tracking, and crew facilitation tools.
        </div>
      </main>
    </div>
  )
}
