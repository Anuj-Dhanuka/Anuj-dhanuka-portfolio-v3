import { describe, expect, it } from "vitest"
import { releaseVelocity, stepMarquee, wrapOffset, type MarqueeMotion } from "./marquee-motion"

const idle: MarqueeMotion = { offset: -100, velocity: 0, autoFactor: 1 }

describe("wrapOffset", () => {
  it("keeps offsets inside one cycle so the doubled track loops seamlessly", () => {
    expect(wrapOffset(-50, 400)).toBe(-50)
    expect(wrapOffset(0, 400)).toBe(-400)
    expect(wrapOffset(30, 400)).toBe(-370)
    expect(wrapOffset(-430, 400)).toBe(-30)
    expect(wrapOffset(-1250, 400)).toBe(-50)
  })

  it("leaves the offset alone before the cycle has been measured", () => {
    expect(wrapOffset(25, 0)).toBe(25)
  })
})

describe("releaseVelocity", () => {
  it("measures recent pointer movement in pixels per second", () => {
    const samples = [
      { time: 1000, x: 100 },
      { time: 1050, x: 150 },
      { time: 1100, x: 200 },
    ]
    expect(releaseVelocity(samples, 1100)).toBe(1000)
  })

  it("ignores movement older than the sampling window", () => {
    const samples = [
      { time: 0, x: 0 },
      { time: 1000, x: 100 },
      { time: 1050, x: 110 },
    ]
    expect(releaseVelocity(samples, 1050)).toBe(200)
  })

  it("returns zero when the pointer was held still before release", () => {
    const samples = [
      { time: 1000, x: 0 },
      { time: 1040, x: 80 },
    ]
    expect(releaseVelocity(samples, 1300)).toBe(0)
  })

  it("caps a flick so the strip cannot spin uncontrollably", () => {
    const samples = [
      { time: 1000, x: 0 },
      { time: 1010, x: 500 },
    ]
    expect(releaseVelocity(samples, 1010)).toBe(4000)
  })
})

describe("stepMarquee", () => {
  const base = { dt: 0.1, cycle: 1000, autoSpeed: -50, held: false, reducedMotion: false }

  it("auto-scrolls in the track direction when untouched", () => {
    const next = stepMarquee(idle, base)
    expect(next.offset).toBeCloseTo(-105)
  })

  it("glides with decaying momentum after a release instead of auto-scrolling", () => {
    const next = stepMarquee({ offset: -500, velocity: 800, autoFactor: 0 }, base)
    expect(next.offset).toBeGreaterThan(-500)
    expect(next.velocity).toBeLessThan(800)
    expect(next.velocity).toBeGreaterThan(0)
    expect(next.autoFactor).toBe(0)
  })

  it("eases auto-scroll back in once momentum has settled", () => {
    let motion: MarqueeMotion = { offset: -500, velocity: 0, autoFactor: 0 }
    motion = stepMarquee(motion, base)
    expect(motion.autoFactor).toBeGreaterThan(0)
    expect(motion.autoFactor).toBeLessThan(1)
    for (let i = 0; i < 40; i++) motion = stepMarquee(motion, base)
    expect(motion.autoFactor).toBeCloseTo(1, 2)
  })

  it("pauses auto-scroll while hovered or dragged", () => {
    let motion = idle
    for (let i = 0; i < 40; i++) motion = stepMarquee(motion, { ...base, held: true })
    expect(motion.autoFactor).toBeCloseTo(0, 2)
  })

  it("has no auto-scroll or momentum under reduced motion", () => {
    const next = stepMarquee({ offset: -500, velocity: 800, autoFactor: 1 }, { ...base, reducedMotion: true })
    expect(next.offset).toBe(-500)
    expect(next.velocity).toBe(0)
  })
})
