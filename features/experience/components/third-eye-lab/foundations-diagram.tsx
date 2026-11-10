import { thirdEyeLabFoundations } from "@/features/experience/data/third-eye-lab"

// Numbered marker shared by the diagram and the list beside it.
export const foundationMarker =
  "flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 border-brand-600 bg-white text-xs font-bold text-brand-700 shadow-[0_6px_18px_rgba(124,58,237,0.2)] dark:border-brand-400 dark:bg-gray-950 dark:text-brand-300"

// Marker positions (% of the diagram), in the order of thirdEyeLabFoundations.items:
// React Native CLI, components, navigation and state, Firebase, Git.
const markers = [
  { x: 92, y: 54 },
  { x: 62, y: 35 },
  { x: 34, y: 19 },
  { x: 62, y: 69 },
  { x: 93, y: 89 },
] as const

const screens = [
  { x: 6, label: "Category" },
  { x: 38, label: "Quiz" },
  { x: 70, label: "Result" },
] as const

// Moving dashes along a connector: three loops (under 5s, per WCAG 2.2.2) once the diagram scrolls
// into view, then still. Reduced-motion visitors see still dashes.
const flow = "motion-safe:group-data-[visible=true]:[animation:diagram-flow_1.6s_linear_3]"

// Hand-drawn architecture sketch, in the PPCROY principles-diagram style: shapes run through a light
// turbulence filter so they read as sketched, and labels are HTML so they use the type tokens.
// Connectors stay crisp and carry moving dashes to show what flows where: navigation between
// screens, screens resting on the React Native project, Firebase data up into the app, Git history.
export function FoundationsDiagram() {
  const { items } = thirdEyeLabFoundations

  return (
    <figure
      aria-label="Sketch of the quiz app: category, quiz and result screens linked by navigation, built on one React Native CLI project, with Firebase supplying data and Git history underneath"
      className="relative mx-auto aspect-square w-full max-w-[36rem]"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-500/15 to-accent1-500/10 blur-3xl"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-brand-400 dark:text-brand-600"
        aria-hidden="true"
      >
        <defs>
          <filter id="third-eye-lab-sketch">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="0.3" />
          </filter>
          <marker
            id="third-eye-lab-arrow"
            viewBox="0 0 6 6"
            refX="5"
            refY="3"
            markerWidth="4.5"
            markerHeight="4.5"
            orient="auto"
          >
            <path
              d="M0.5 0.8 L5 3 L0.5 5.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {/* Shapes: sketched */}
        <g
          filter="url(#third-eye-lab-sketch)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {screens.map((screen) => (
            <rect
              key={screen.label}
              x={screen.x}
              y="8"
              width="24"
              height="36"
              rx="3"
              strokeWidth="0.5"
              className="fill-white dark:fill-gray-950"
            />
          ))}

          {/* Category: a 2×2 grid and a start button */}
          {[
            [9.5, 14],
            [18.5, 14],
            [9.5, 23],
            [18.5, 23],
          ].map(([x, y]) => (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="8"
              height="7"
              rx="1.2"
              strokeWidth="0.35"
              className="fill-brand-50/70 dark:fill-brand-950/30"
            />
          ))}
          <rect
            x="9.5"
            y="36"
            width="17"
            height="3"
            rx="1.5"
            strokeWidth="0.35"
            className="fill-brand-100 dark:fill-brand-900/50"
          />

          {/* Quiz: progress, question card and answers */}
          <line x1="41" y1="12.5" x2="59" y2="12.5" strokeWidth="0.35" />
          <line x1="41" y1="12.5" x2="47" y2="12.5" strokeWidth="1" className="text-brand-600" />
          <rect
            x="41"
            y="15.5"
            width="18"
            height="7"
            rx="1.2"
            strokeWidth="0.35"
            className="fill-brand-50/70 dark:fill-brand-950/30"
          />
          {[25.5, 30.5, 35.5].map((y, index) => (
            <rect
              key={y}
              x="41"
              y={y}
              width="18"
              height="3.5"
              rx="1"
              strokeWidth={index === 0 ? 0.55 : 0.35}
              className={index === 0 ? "fill-brand-50 text-brand-600 dark:fill-brand-950/40" : undefined}
            />
          ))}

          {/* Result: score ring and actions */}
          <circle cx="82" cy="20" r="6" strokeWidth="0.35" />
          <path d="M82 14 A6 6 0 1 1 76.3 21.9" strokeWidth="1" className="text-brand-600" />
          <line x1="74" y1="31" x2="90" y2="31" strokeWidth="0.35" />
          <line x1="74" y1="34" x2="86" y2="34" strokeWidth="0.35" />
          <rect
            x="73.5"
            y="37"
            width="17"
            height="3"
            rx="1.5"
            strokeWidth="0.35"
            className="fill-brand-100 dark:fill-brand-900/50"
          />

          {/* The React Native CLI project the screens sit on */}
          <rect
            x="4"
            y="50"
            width="92"
            height="8"
            rx="2"
            strokeWidth="0.5"
            className="fill-brand-50 dark:fill-brand-950/40"
          />

          {/* Firebase: a data store */}
          <path
            d="M42 66 V74 A8 2.2 0 0 0 58 74 V66"
            strokeWidth="0.5"
            className="fill-white dark:fill-gray-950"
          />
          <ellipse
            cx="50"
            cy="66"
            rx="8"
            ry="2.2"
            strokeWidth="0.5"
            className="fill-white dark:fill-gray-950"
          />
          <path d="M42 70 A8 2.2 0 0 0 58 70" strokeWidth="0.3" />

          {/* Git commits */}
          {[18, 34, 66, 82].map((x) => (
            <circle
              key={x}
              cx={x}
              cy="89"
              r="1.5"
              strokeWidth="0.4"
              className="fill-white dark:fill-gray-950"
            />
          ))}
          <circle
            cx="50"
            cy="83"
            r="1.5"
            strokeWidth="0.4"
            className="fill-brand-100 dark:fill-brand-900/50"
          />
        </g>

        {/* Connectors: crisp, with moving dashes. Lines stop short of commit dots so they stay hollow. */}
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeDasharray="1.2 1.4"
          className="text-brand-500 dark:text-brand-400"
        >
          {/* Navigation: Category → Quiz → Result */}
          <path
            d="M30.8 26 C 33 24.5, 35 24.5, 37.2 26"
            strokeWidth="0.5"
            markerEnd="url(#third-eye-lab-arrow)"
            className={flow}
          />
          <path
            d="M62.8 26 C 65 24.5, 67 24.5, 69.2 26"
            strokeWidth="0.5"
            markerEnd="url(#third-eye-lab-arrow)"
            className={flow}
          />
          {/* Each screen rests on the project */}
          {screens.map((screen) => (
            <line
              key={screen.label}
              x1={screen.x + 12}
              y1="44.5"
              x2={screen.x + 12}
              y2="49.5"
              strokeWidth="0.4"
              className={flow}
            />
          ))}
          {/* Firebase data up into the project */}
          <path
            d="M50 63.2 V58.8"
            strokeWidth="0.45"
            markerEnd="url(#third-eye-lab-arrow)"
            className={flow}
          />
          {/* Git: main line and a branch merged back */}
          <path
            d="M8 89 H16.5 M19.5 89 H32.5 M35.5 89 H64.5 M67.5 89 H80.5 M83.5 89 H88"
            strokeWidth="0.45"
            className={flow}
          />
          <path
            d="M34 89 C 36 83, 40 83, 42 83 H48.5 M51.5 83 H58 C 60 83, 64 83, 66 89"
            strokeWidth="0.4"
            className={flow}
          />
        </g>
      </svg>

      {/* Labels */}
      {screens.map((screen) => (
        <span
          key={screen.label}
          className="type-caption absolute -translate-x-1/2 font-semibold copy-heading"
          style={{ left: `${screen.x + 12}%`, top: "1%" }}
        >
          {screen.label}
        </span>
      ))}
      <span className="type-caption absolute left-[8%] top-[54%] -translate-y-1/2 font-semibold text-brand-700 dark:text-brand-300">
        One React Native CLI project
      </span>
      <span className="type-caption absolute left-1/2 top-[77.5%] -translate-x-1/2 font-semibold copy-body">
        Firebase
      </span>
      <span className="type-caption absolute left-[8%] top-[92%] font-semibold copy-body">Git history</span>

      {/* Numbered markers matching the list */}
      {markers.map((marker, index) => (
        <span
          key={items[index].title}
          className={`${foundationMarker} absolute z-10 -translate-x-1/2 -translate-y-1/2`}
          style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
          aria-hidden="true"
        >
          {index + 1}
        </span>
      ))}
    </figure>
  )
}
