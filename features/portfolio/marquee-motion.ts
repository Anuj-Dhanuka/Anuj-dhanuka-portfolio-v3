export type MarqueeMotion = {
  /** Track translateX in px, kept within [-cycle, 0) once the cycle is measured. */
  offset: number
  /** Momentum from a drag release in px/s. */
  velocity: number
  /** 0–1 blend of the automatic scroll speed, eased so pauses and resumes are smooth. */
  autoFactor: number
}

export type PointerSample = { time: number; x: number }

const VELOCITY_WINDOW_MS = 100
const STILL_BEFORE_RELEASE_MS = 80
const MAX_VELOCITY = 4000
const FRICTION = 3
const SETTLED_VELOCITY = 15
const AUTO_RESUME_RATE = 2.5
const AUTO_PAUSE_RATE = 8

export function wrapOffset(offset: number, cycle: number) {
  if (cycle <= 0) return offset
  return (((offset % cycle) + cycle) % cycle) - cycle
}

export function releaseVelocity(samples: PointerSample[], now: number) {
  const recent = samples.filter((sample) => now - sample.time <= VELOCITY_WINDOW_MS)
  const first = recent[0]
  const last = recent[recent.length - 1]
  if (!first || !last || last === first || now - last.time > STILL_BEFORE_RELEASE_MS) return 0
  const velocity = ((last.x - first.x) / (last.time - first.time)) * 1000
  return Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, velocity))
}

export function stepMarquee(
  motion: MarqueeMotion,
  {
    dt,
    cycle,
    autoSpeed,
    held,
    reducedMotion,
  }: { dt: number; cycle: number; autoSpeed: number; held: boolean; reducedMotion: boolean },
): MarqueeMotion {
  if (reducedMotion) return { offset: wrapOffset(motion.offset, cycle), velocity: 0, autoFactor: 0 }

  let velocity = motion.velocity * Math.exp(-FRICTION * dt)
  if (Math.abs(velocity) < SETTLED_VELOCITY) velocity = 0

  const autoTarget = held || velocity !== 0 ? 0 : 1
  const rate = autoTarget > motion.autoFactor ? AUTO_RESUME_RATE : AUTO_PAUSE_RATE
  const autoFactor = motion.autoFactor + (autoTarget - motion.autoFactor) * (1 - Math.exp(-rate * dt))

  return {
    offset: wrapOffset(motion.offset + (velocity + autoFactor * autoSpeed) * dt, cycle),
    velocity,
    autoFactor,
  }
}
