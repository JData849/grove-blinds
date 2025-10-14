export function track(event: string, payload?: Record<string, any>) {
  if (typeof window === 'undefined') return
  // Hook your analytics here (GA4, Meta Pixel, etc.)
  // eslint-disable-next-line no-console
  console.log('[track]', event, payload || {})
}