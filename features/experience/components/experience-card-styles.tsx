// Homepage card language ("What I Bring"): violet border, soft violet shadow, brand icon tile and a
// thin brand→accent bar along the top. Shared so every experience case-study section feels like home.
export const homeCard =
  "rounded-lg border border-purple-100 bg-white/90 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_45px_rgba(124,58,237,0.07)] backdrop-blur-sm dark:border-purple-800/30 dark:bg-gray-950/55 dark:shadow-none"

// Grid cards lift on hover like the homepage What I Bring cards; the accent bar brightens and the
// icon tile grows with them. Long reading panels stay still, as on the homepage.
export const homeCardLift = `group ${homeCard} transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_24px_55px_rgba(124,58,237,0.12)] dark:hover:border-brand-700/70 motion-reduce:transition-none motion-reduce:hover:translate-y-0`

export const homeIconTile =
  "flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-brand-100 bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 dark:border-brand-800/50 dark:bg-brand-900/25 dark:text-brand-300"

// The homepage's featured card (Recognition): a brand border over a soft white→purple→pink wash.
// Used where a section needs one emphasised panel, in place of a dark block.
export const homeFeatureCard =
  "rounded-lg border border-brand-200 bg-gradient-to-br from-white via-purple-50/80 to-pink-50/80 shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_70px_rgba(124,58,237,0.13)] backdrop-blur dark:border-purple-800/35 dark:from-gray-950/85 dark:via-purple-950/25 dark:to-pink-950/20"

// Place inside a `relative overflow-hidden` card.
export function AccentBar() {
  return (
    <span
      className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-600 to-accent1-600 opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:from-brand-500 dark:to-accent1-500"
      aria-hidden="true"
    />
  )
}
