import Link from 'next/link'

export default function BoardMemberDemo() {
  // Simulated real-time data
  const metrics = {
    currentOccupancy: 127,
    dailyCheckIns: 89,
    activeMembers: 342,
    monthlyRevenue: 47850,
    staffOnDuty: 8,
    eventsToday: 4,
    safetyIncidents: 0,
    parentSatisfaction: 94,
  }

  const programBreakdown = [
    { name: 'Early Childhood', enrolled: 45, capacity: 60, revenue: 12500 },
    { name: 'Youth (10-14)', enrolled: 112, capacity: 150, revenue: 8900 },
    { name: 'Youth (14-18)', enrolled: 89, capacity: 120, revenue: 7200 },
    { name: 'Adult Classes', enrolled: 67, capacity: 100, revenue: 4800 },
    { name: 'Senior Programs', enrolled: 29, capacity: 50, revenue: 1200 },
  ]

  const recentActivity = [
    { time: '2 min ago', event: 'Youth Crew completed "Intro to Boxing" quest', type: 'achievement' },
    { time: '5 min ago', event: '3 new family memberships registered', type: 'growth' },
    { time: '12 min ago', event: 'Paint Night event at 85% capacity', type: 'event' },
    { time: '18 min ago', event: 'Senior mentor session with youth crew', type: 'connection' },
    { time: '25 min ago', event: 'Parent volunteer logged 2 hours', type: 'community' },
  ]

  const upcomingDecisions = [
    { item: 'Expand childcare hours to 6am start', impact: '+$3,200/mo revenue', deadline: 'Dec 1' },
    { item: 'Partner agreement with Craft & Crush', impact: '4 events/month', deadline: 'Nov 30' },
    { item: 'Grant application: Youth Workforce Dev', impact: '$75,000', deadline: 'Dec 15' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-mono text-sm text-muted-foreground hover:text-primary">
              ← Back to Site
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-mono text-lg font-bold tracking-widest text-primary">
              BOARD MEMBER VIEW
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-mono">Live Data</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="hud-border bg-card/50 p-4">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Current Occupancy</div>
            <div className="text-3xl font-bold font-mono text-primary">{metrics.currentOccupancy}</div>
            <div className="text-xs text-green-400">Building is active</div>
          </div>
          <div className="hud-border bg-card/50 p-4">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Active Members</div>
            <div className="text-3xl font-bold font-mono text-accent">{metrics.activeMembers}</div>
            <div className="text-xs text-green-400">+12 this week</div>
          </div>
          <div className="hud-border bg-card/50 p-4">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Monthly Revenue</div>
            <div className="text-3xl font-bold font-mono text-green-400">${metrics.monthlyRevenue.toLocaleString()}</div>
            <div className="text-xs text-green-400">+8% vs last month</div>
          </div>
          <div className="hud-border bg-card/50 p-4">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Safety Incidents</div>
            <div className="text-3xl font-bold font-mono text-green-400">{metrics.safetyIncidents}</div>
            <div className="text-xs text-muted-foreground">30-day streak</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Program Performance */}
          <div className="lg:col-span-2 hud-border bg-card/50 p-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Program Performance
            </h2>
            <div className="space-y-4">
              {programBreakdown.map((program) => (
                <div key={program.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono text-foreground">{program.name}</span>
                    <span className="text-muted-foreground">
                      {program.enrolled}/{program.capacity} enrolled • ${program.revenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(program.enrolled / program.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className="hud-border bg-card/50 p-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Live Activity
            </h2>
            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div key={i} className="text-sm border-l-2 border-primary/30 pl-3">
                  <div className="text-foreground">{activity.event}</div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decisions Needed */}
        <div className="hud-border bg-card/50 p-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Decisions Pending Board Approval
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {upcomingDecisions.map((decision, i) => (
              <div key={i} className="border border-border/30 bg-card/30 p-4 rounded">
                <div className="font-mono text-sm text-foreground mb-2">{decision.item}</div>
                <div className="text-xs text-green-400 mb-1">Impact: {decision.impact}</div>
                <div className="text-xs text-muted-foreground">Deadline: {decision.deadline}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Health */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="hud-border bg-card/50 p-4 text-center">
            <div className="text-2xl font-bold font-mono text-primary">{metrics.parentSatisfaction}%</div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Parent Satisfaction</div>
          </div>
          <div className="hud-border bg-card/50 p-4 text-center">
            <div className="text-2xl font-bold font-mono text-accent">23</div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Active Mentors</div>
          </div>
          <div className="hud-border bg-card/50 p-4 text-center">
            <div className="text-2xl font-bold font-mono text-green-400">156</div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Volunteer Hours/Week</div>
          </div>
          <div className="hud-border bg-card/50 p-4 text-center">
            <div className="text-2xl font-bold font-mono text-yellow-400">8</div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Partner Orgs</div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-muted-foreground font-mono py-4">
          This is a simulated board member view showing real-time operational metrics and pending decisions.
        </div>
      </main>
    </div>
  )
}
