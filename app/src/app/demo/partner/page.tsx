import Link from 'next/link'

export default function PartnerDemo() {
  const event = {
    name: 'Paint & Sip Night',
    partner: 'Craft & Crush',
    date: 'Friday, November 22',
    time: '7:00 PM - 9:00 PM',
    capacity: 24,
    registered: 20,
    checkedIn: 0,
  }

  const attendees = [
    { name: 'Sarah M.', status: 'registered', partner: 'Coming with Mike R.' },
    { name: 'Mike R.', status: 'registered', partner: 'Coming with Sarah M.' },
    { name: 'Jennifer K.', status: 'registered', partner: null },
    { name: 'Carlos M.', status: 'registered', partner: null },
    { name: 'Helen T.', status: 'registered', partner: 'Coming with Robert T.' },
    { name: 'Robert T.', status: 'registered', partner: 'Coming with Helen T.' },
  ]

  const eventDetails = {
    materials: 'Canvas, paints, brushes (provided)',
    beverages: 'Wine and soft drinks included',
    parking: 'Free in main lot',
    contact: 'events@craftandcrush.com',
  }

  const revenue = {
    ticketPrice: 45,
    registered: 20,
    partnerSplit: 60,
    ringSplit: 40,
  }

  const upcomingPartnerEvents = [
    { name: 'Pottery Basics', partner: 'Craft & Crush', date: 'Dec 6', registered: 12 },
    { name: 'Mixology Night', partner: 'Local Distillery', date: 'Dec 13', registered: 8 },
    { name: 'Holiday Wreath Making', partner: 'Garden Club', date: 'Dec 15', registered: 15 },
  ]

  const feedback = [
    { event: 'Last Paint Night', rating: 4.8, comments: 23, highlight: 'Great instructor, loved the wine selection' },
    { event: 'Craft Fair', rating: 4.5, comments: 18, highlight: 'Well organized, nice variety of vendors' },
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
              PARTNER EVENT VIEW
            </span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Partner: </span>
            <span className="text-accent font-mono">{event.partner}</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Event Header */}
        <div className="hud-border bg-card/50 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-mono text-2xl font-bold text-primary mb-1">{event.name}</h1>
              <div className="text-muted-foreground">
                {event.date} • {event.time}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold font-mono text-accent">
                {event.registered}/{event.capacity}
              </div>
              <div className="text-xs text-muted-foreground uppercase">Registered</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full"
                style={{ width: `${(event.registered / event.capacity) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
              <span>{event.capacity - event.registered} spots remaining</span>
              <span>{Math.round((event.registered / event.capacity) * 100)}% full</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Attendees */}
            <div className="hud-border bg-card/50 p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Attendees
                </h2>
                <span className="text-xs text-muted-foreground">
                  {event.checkedIn} checked in
                </span>
              </div>
              <div className="space-y-2">
                {attendees.map((person, i) => (
                  <div key={i} className="flex items-center justify-between p-2 border border-border/30 bg-card/30 rounded">
                    <div>
                      <div className="font-mono text-sm text-foreground">{person.name}</div>
                      {person.partner && (
                        <div className="text-xs text-muted-foreground">{person.partner}</div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-yellow-400">{person.status}</span>
                      <button className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30">
                        Check In
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-border/30 text-center">
                <span className="text-xs text-muted-foreground">
                  + {event.registered - attendees.length} more registered
                </span>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Revenue Breakdown
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-muted-foreground">Ticket Price</div>
                  <div className="text-xl font-mono text-foreground">${revenue.ticketPrice}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Total Revenue</div>
                  <div className="text-xl font-mono text-green-400">
                    ${revenue.ticketPrice * revenue.registered}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Partner ({revenue.partnerSplit}%)</span>
                  <span className="font-mono text-foreground">
                    ${Math.round(revenue.ticketPrice * revenue.registered * (revenue.partnerSplit / 100))}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">The Rings ({revenue.ringSplit}%)</span>
                  <span className="font-mono text-primary">
                    ${Math.round(revenue.ticketPrice * revenue.registered * (revenue.ringSplit / 100))}
                  </span>
                </div>
              </div>
            </div>

            {/* Past Event Feedback */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Past Event Feedback
              </h2>
              <div className="space-y-3">
                {feedback.map((fb, i) => (
                  <div key={i} className="p-3 border border-border/30 bg-card/30 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-foreground">{fb.event}</span>
                      <span className="text-yellow-400">★ {fb.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {fb.comments} comments • "{fb.highlight}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Event Details */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Event Details
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs">Materials</div>
                  <div className="text-foreground">{eventDetails.materials}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Beverages</div>
                  <div className="text-foreground">{eventDetails.beverages}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Parking</div>
                  <div className="text-foreground">{eventDetails.parking}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Contact</div>
                  <div className="text-accent">{eventDetails.contact}</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Actions
              </h2>
              <div className="space-y-2">
                <button className="w-full text-left text-sm px-3 py-2 bg-primary/20 text-primary rounded hover:bg-primary/30 font-mono">
                  Send Reminder
                </button>
                <button className="w-full text-left text-sm px-3 py-2 bg-accent/20 text-accent rounded hover:bg-accent/30 font-mono">
                  Export Attendee List
                </button>
                <button className="w-full text-left text-sm px-3 py-2 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 font-mono">
                  Open Check-In Mode
                </button>
              </div>
            </div>

            {/* Upcoming Partner Events */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                More Partner Events
              </h2>
              <div className="space-y-3">
                {upcomingPartnerEvents.map((evt, i) => (
                  <div key={i} className="text-sm">
                    <div className="font-mono text-foreground">{evt.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {evt.partner} • {evt.date}
                    </div>
                    <div className="text-xs text-green-400">{evt.registered} registered</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-muted-foreground font-mono py-4">
          This is a simulated partner event view showing registration, revenue splits, and event management.
        </div>
      </main>
    </div>
  )
}
