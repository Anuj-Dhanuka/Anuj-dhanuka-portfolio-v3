type RateLimitEntry = {
  count: number
  resetAt: number
}

type RateLimitOptions = {
  limit: number
  windowMs: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

export function checkRateLimit(key: string, options: RateLimitOptions, now = Date.now()) {
  const current = rateLimitStore.get(key)

  if (!current || current.resetAt <= now) {
    const resetAt = now + options.windowMs
    rateLimitStore.set(key, { count: 1, resetAt })
    return { allowed: true, remaining: options.limit - 1, resetAt }
  }

  current.count += 1
  rateLimitStore.set(key, current)

  return {
    allowed: current.count <= options.limit,
    remaining: Math.max(0, options.limit - current.count),
    resetAt: current.resetAt,
  }
}

export function clearRateLimitStore() {
  rateLimitStore.clear()
}

export function getClientIp(headers: Headers) {
  const forwardedFor = headers.get("x-forwarded-for")
  return forwardedFor?.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown"
}
