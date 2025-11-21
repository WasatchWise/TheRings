'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

// Animated counter component
function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const duration = 1500
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return <>{prefix}{displayValue.toLocaleString()}{suffix}</>
}

// Mini sparkline chart
function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 80
    return `${x},${y}`
  }).join(' ')

  return (
    <svg viewBox="0 0 100 100" className="w-full h-8" preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function BoardMemberDemo() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

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
    { name: 'Early Childhood', enrolled: 45, capacity: 60, revenue: 12500, trend: [38, 40, 42, 44, 45] },
    { name: 'Youth (10-14)', enrolled: 112, capacity: 150, revenue: 8900, trend: [95, 100, 108, 110, 112] },
    { name: 'Youth (14-18)', enrolled: 89, capacity: 120, revenue: 7200, trend: [78, 82, 85, 87, 89] },
    { name: 'Adult Classes', enrolled: 67, capacity: 100, revenue: 4800, trend: [50, 55, 60, 65, 67] },
    { name: 'Senior Programs', enrolled: 29, capacity: 50, revenue: 1200, trend: [20, 22, 25, 27, 29] },
  ]

  const recentActivity = [
    { time: '2 min ago', event: 'Youth Crew completed "Intro to Boxing" quest', type: 'achievement', icon: '🏆' },
    { time: '5 min ago', event: '3 new family memberships registered', type: 'growth', icon: '📈' },
    { time: '12 min ago', event: 'Paint Night event at 85% capacity', type: 'event', icon: '🎨' },
    { time: '18 min ago', event: 'Senior mentor session with youth crew', type: 'connection', icon: '🤝' },
    { time: '25 min ago', event: 'Parent volunteer logged 2 hours', type: 'community', icon: '💪' },
  ]

  const upcomingDecisions = [
    { item: 'Expand childcare hours to 6am start', impact: '+$3,200/mo revenue', deadline: 'Dec 1', priority: 'high' },
    { item: 'Partner agreement with Craft & Crush', impact: '4 events/month', deadline: 'Nov 30', priority: 'medium' },
    { item: 'Grant application: Youth Workforce Dev', impact: '$75,000', deadline: 'Dec 15', priority: 'high' },
  ]

  const weeklyTrend = [35000, 38000, 42000, 45000, 47850]
  const occupancyTrend = [85, 95, 110, 118, 127]

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
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted-foreground">
              {time.toLocaleTimeString()}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-green-400 font-mono">LIVE</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Key Metrics with Animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="hud-border bg-card/50 p-4 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
              <Sparkline data={occupancyTrend} color="#00d4ff" />
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Current Occupancy</div>
            <div className="text-3xl font-bold font-mono text-primary">
              <AnimatedNumber value={metrics.currentOccupancy} />
            </div>
            <div className="text-xs text-green-400 flex items-center gap-1">
              <span className="inline-block w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-green-400" />
              Building is active
            </div>
          </div>
          <div className="hud-border bg-card/50 p-4 relative overflow-hidden group hover:border-accent/50 transition-colors">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Active Members</div>
            <div className="text-3xl font-bold font-mono text-accent">
              <AnimatedNumber value={metrics.activeMembers} />
            </div>
            <div className="text-xs text-green-400 flex items-center gap-1">
              <span className="inline-block w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-green-400" />
              +12 this week
            </div>
          </div>
          <div className="hud-border bg-card/50 p-4 relative overflow-hidden group hover:border-green-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
              <Sparkline data={weeklyTrend} color="#22c55e" />
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Monthly Revenue</div>
            <div className="text-3xl font-bold font-mono text-green-400">
              <AnimatedNumber value={metrics.monthlyRevenue} prefix="$" />
            </div>
            <div className="text-xs text-green-400 flex items-center gap-1">
              <span className="inline-block w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-green-400" />
              +8% vs last month
            </div>
          </div>
          <div className="hud-border bg-card/50 p-4 relative overflow-hidden group hover:border-green-500/50 transition-colors">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Safety Incidents</div>
            <div className="text-3xl font-bold font-mono text-green-400">{metrics.safetyIncidents}</div>
            <div className="text-xs text-green-400 flex items-center gap-1">
              <span>✓</span>
              30-day streak
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Program Performance with Trends */}
          <div className="lg:col-span-2 hud-border bg-card/50 p-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Program Performance
            </h2>
            <div className="space-y-4">
              {programBreakdown.map((program) => {
                const percentage = (program.enrolled / program.capacity) * 100
                return (
                  <div key={program.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-mono text-foreground">{program.name}</span>
                      <div className="flex items-center gap-4">
                        <div className="w-16 opacity-50">
                          <Sparkline data={program.trend} color="#00d4ff" />
                        </div>
                        <span className="text-muted-foreground text-right min-w-[180px]">
                          {program.enrolled}/{program.capacity} • ${program.revenue.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          percentage > 80 ? 'bg-green-500' : percentage > 60 ? 'bg-primary' : 'bg-yellow-500'
                        }`}
                        style={{
                          width: `${percentage}%`,
                          animation: 'grow 1.5s ease-out'
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className="hud-border bg-card/50 p-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 flex items-center gap-2">
              Live Activity
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </h2>
            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div
                  key={i}
                  className="text-sm border-l-2 border-primary/30 pl-3 hover:border-primary transition-colors"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-foreground flex items-start gap-2">
                    <span>{activity.icon}</span>
                    <span>{activity.event}</span>
                  </div>
                  <div className="text-xs text-muted-foreground ml-6">{activity.time}</div>
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
              <div
                key={i}
                className={`border bg-card/30 p-4 rounded transition-all hover:scale-[1.02] ${
                  decision.priority === 'high' ? 'border-yellow-500/50' : 'border-border/30'
                }`}
              >
                {decision.priority === 'high' && (
                  <div className="text-[10px] font-mono text-yellow-400 uppercase tracking-wider mb-2">
                    ⚡ High Priority
                  </div>
                )}
                <div className="font-mono text-sm text-foreground mb-2">{decision.item}</div>
                <div className="text-xs text-green-400 mb-1 font-mono">Impact: {decision.impact}</div>
                <div className="text-xs text-muted-foreground">Deadline: {decision.deadline}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Health */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="hud-border bg-card/50 p-4 text-center hover:border-primary/50 transition-colors">
            <div className="text-2xl font-bold font-mono text-primary">
              <AnimatedNumber value={metrics.parentSatisfaction} suffix="%" />
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Parent Satisfaction</div>
          </div>
          <div className="hud-border bg-card/50 p-4 text-center hover:border-accent/50 transition-colors">
            <div className="text-2xl font-bold font-mono text-accent">
              <AnimatedNumber value={23} />
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Active Mentors</div>
          </div>
          <div className="hud-border bg-card/50 p-4 text-center hover:border-green-500/50 transition-colors">
            <div className="text-2xl font-bold font-mono text-green-400">
              <AnimatedNumber value={156} />
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Volunteer Hours/Week</div>
          </div>
          <div className="hud-border bg-card/50 p-4 text-center hover:border-yellow-500/50 transition-colors">
            <div className="text-2xl font-bold font-mono text-yellow-400">
              <AnimatedNumber value={8} />
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase">Partner Orgs</div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-muted-foreground font-mono py-4">
          This is a simulated board member view showing real-time operational metrics and pending decisions.
        </div>
      </main>

      <style jsx>{`
        @keyframes grow {
          from { width: 0; }
        }
      `}</style>
    </div>
  )
}
