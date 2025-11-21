'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ActivityNotification } from '@/components/ui/activity-ticker'

export default function StaffDemo() {
  const [time, setTime] = useState(new Date())
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const myShift = {
    zone: 'TechNest',
    time: '3:00 PM - 8:00 PM',
    role: 'Lead Facilitator',
  }

  const zones = [
    { id: 'technest', name: 'TechNest', count: 5, color: '#00d4ff', x: 10, y: 10, w: 35, h: 40 },
    { id: 'creative', name: 'Creative Studio', count: 8, color: '#a855f7', x: 55, y: 10, w: 35, h: 40 },
    { id: 'boxing', name: 'Boxing Ring', count: 6, color: '#ef4444', x: 10, y: 55, w: 25, h: 35 },
    { id: 'gaming', name: 'Gaming Arena', count: 12, color: '#22c55e', x: 40, y: 55, w: 25, h: 35 },
    { id: 'zen', name: 'Zen Den', count: 3, color: '#eab308', x: 70, y: 55, w: 20, h: 35 },
  ]

  const inMyZone = [
    { name: 'Marcus J.', age: 14, status: 'active', currentQuest: 'Game Dev Basics', mood: 'focused', tapIn: '3:12 PM' },
    { name: 'Sophia R.', age: 12, status: 'active', currentQuest: 'Intro to Robotics', mood: 'excited', tapIn: '3:05 PM' },
    { name: 'Devon W.', age: 16, status: 'active', currentQuest: 'Streaming Setup', mood: 'chill', tapIn: '3:30 PM' },
    { name: 'Aaliyah M.', age: 13, status: 'idle', currentQuest: null, mood: 'looking around', tapIn: '3:45 PM' },
    { name: 'Tyler K.', age: 15, status: 'active', currentQuest: 'Cybersecurity 101', mood: 'intense', tapIn: '3:08 PM' },
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
    { type: 'warning', message: 'Aaliyah M. has been idle for 15 min - consider check-in', priority: 'medium' },
    { type: 'success', message: 'Marcus J. just completed 3rd quest step - acknowledge!', priority: 'low' },
    { type: 'info', message: 'Pickup request: Devon W. - parent arriving in 10 min', priority: 'high' },
  ]

  const recentNotes = [
    { youth: 'Devon W.', note: 'Showed leadership helping new member with OBS setup', by: 'Jamie', time: 'Yesterday' },
    { youth: 'Sophia R.', note: 'Frustrated with servo motors - needs encouragement', by: 'You', time: '2 days ago' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Live Activity Notifications */}
      <ActivityNotification />

      {/* Header */}
      <header className="border-b border-border/30 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-mono text-sm text-muted-foreground hover:text-primary">
              ← Back to Site
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-mono text-lg font-bold tracking-widest text-primary">
              STAFF VIEW
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted-foreground">
              {time.toLocaleTimeString()}
            </span>
            <span className="font-mono text-sm text-cyan-400">{myShift.zone}</span>
            <span className="text-xs text-muted-foreground">{myShift.time}</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="space-y-2">
            {alerts.map((alert, i) => (
              <div
                key={i}
                className={`p-3 rounded border flex items-center justify-between ${
                  alert.type === 'warning' ? 'border-yellow-500/30 bg-yellow-500/10' :
                  alert.type === 'success' ? 'border-green-500/30 bg-green-500/10' :
                  'border-primary/30 bg-primary/10'
                } text-sm font-mono`}
              >
                <span className={
                  alert.type === 'warning' ? 'text-yellow-400' :
                  alert.type === 'success' ? 'text-green-400' :
                  'text-primary'
                }>
                  {alert.priority === 'high' && '⚡ '}
                  {alert.message}
                </span>
                <button className="text-xs px-2 py-1 bg-card/50 rounded hover:bg-card">
                  Dismiss
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Map and Youth */}
          <div className="lg:col-span-2 space-y-4">
            {/* Live Campus Map */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 flex items-center gap-2">
                Live Campus Map
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </h2>
              <div className="relative aspect-[16/10] bg-card/30 rounded border border-border/30">
                {zones.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
                    className={`absolute rounded transition-all hover:scale-[1.02] ${
                      selectedZone === zone.id ? 'ring-2 ring-white' : ''
                    } ${zone.id === 'technest' ? 'ring-1 ring-cyan-400/50' : ''}`}
                    style={{
                      left: `${zone.x}%`,
                      top: `${zone.y}%`,
                      width: `${zone.w}%`,
                      height: `${zone.h}%`,
                      backgroundColor: `${zone.color}20`,
                      borderColor: `${zone.color}50`,
                      borderWidth: '1px',
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xs font-mono font-bold" style={{ color: zone.color }}>
                        {zone.name}
                      </span>
                      <span className="text-lg font-bold font-mono text-white">
                        {zone.count}
                      </span>
                      <span className="text-[10px] text-muted-foreground">people</span>
                    </div>
                    {/* Pulsing dots for active zones */}
                    {zone.count > 5 && (
                      <span
                        className="absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: zone.color }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                <span>Total in building: {zones.reduce((sum, z) => sum + z.count, 0)}</span>
                <span>Your zone highlighted</span>
              </div>
            </div>

            {/* Youth in My Zone */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Youth in {myShift.zone} Right Now
              </h2>
              <div className="space-y-3">
                {inMyZone.map((youth) => (
                  <div key={youth.name} className={`flex items-center justify-between p-3 border rounded transition-colors ${
                    youth.status === 'idle' ? 'border-yellow-500/30 bg-yellow-500/5' : 'border-border/30 bg-card/30'
                  }`}>
                    <div>
                      <div className="font-mono text-foreground flex items-center gap-2">
                        {youth.name}
                        {youth.status === 'idle' && (
                          <span className="text-[10px] px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">
                            IDLE
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Age {youth.age} • {youth.currentQuest || 'No active quest'} • Tapped in {youth.tapIn}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-mono ${
                        youth.status === 'active' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {youth.mood}
                      </div>
                      <div className="flex gap-2 mt-1">
                        <button className="text-xs px-2 py-1 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors">
                          Note
                        </button>
                        <button className="text-xs px-2 py-1 bg-accent/20 text-accent rounded hover:bg-accent/30 transition-colors">
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
                  <div key={crew.name} className="p-3 border border-primary/30 bg-primary/5 rounded hover:border-primary/50 transition-colors">
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
                Today&apos;s Schedule
              </h2>
              <div className="space-y-3">
                {todaySchedule.map((item, i) => (
                  <div key={i} className={`text-sm ${item.status === 'now' ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className="font-mono flex items-center gap-2">
                      {item.time}
                      {item.status === 'now' && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded">
                          NOW
                        </span>
                      )}
                    </div>
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
                <button className="w-full text-left text-sm px-3 py-2 bg-primary/20 text-primary rounded hover:bg-primary/30 font-mono transition-colors">
                  + Check In Youth
                </button>
                <button className="w-full text-left text-sm px-3 py-2 bg-accent/20 text-accent rounded hover:bg-accent/30 font-mono transition-colors">
                  + Log Activity Note
                </button>
                <button className="w-full text-left text-sm px-3 py-2 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 font-mono transition-colors">
                  + Award Badge
                </button>
                <button className="w-full text-left text-sm px-3 py-2 bg-yellow-500/20 text-yellow-400 rounded hover:bg-yellow-500/30 font-mono transition-colors">
                  + Safety Incident
                </button>
              </div>
            </div>

            {/* Walkie Channel */}
            <div className="hud-border bg-card/50 p-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Walkie Channel
              </h2>
              <div className="flex items-center justify-between p-2 bg-green-500/10 border border-green-500/30 rounded">
                <span className="text-sm font-mono text-green-400">All Staff</span>
                <button className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30">
                  Ping
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
