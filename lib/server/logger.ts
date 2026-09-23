type LogContext = Record<string, boolean | number | string | null | undefined>

function serializeError(error: unknown) {
  if (error instanceof Error) {
    return { name: error.name, message: error.message, stack: error.stack }
  }

  return { message: "Unknown error" }
}

export function logError(event: string, error: unknown, context: LogContext = {}) {
  console.error(
    JSON.stringify({
      level: "error",
      event,
      timestamp: new Date().toISOString(),
      ...context,
      error: serializeError(error),
    }),
  )
}

export function logInfo(event: string, context: LogContext = {}) {
  console.info(
    JSON.stringify({
      level: "info",
      event,
      timestamp: new Date().toISOString(),
      ...context,
    }),
  )
}
