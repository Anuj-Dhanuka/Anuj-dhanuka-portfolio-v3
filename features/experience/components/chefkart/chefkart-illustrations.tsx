// Hand-drawn wireframe illustrations for the ChefKart case studies. They explain how the work
// behaves without reproducing real ChefKart screens, data, prices or branding.
// Brand colours only: violet #7c3aed / #ede9fe, pink #db2777 / #fce7f3, neutrals.

const ink = "#1f2937"
const muted = "#9ca3af"
const line = "#e5e7eb"
const violet = "#7c3aed"
const violetSoft = "#ede9fe"
const pink = "#db2777"
const pinkSoft = "#fce7f3"

function Bar({
  x,
  y,
  w,
  h = 6,
  fill = line,
}: {
  x: number
  y: number
  w: number
  h?: number
  fill?: string
}) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />
}

// Wallet, cashback and payment states inside a phone.
export function PaymentsIllustration() {
  return (
    <svg viewBox="0 0 420 340" role="img" aria-labelledby="payments-ill-title" className="h-auto w-full">
      <title id="payments-ill-title">
        Illustration of a phone checkout with a wallet balance, a cashback strip, payment methods and the
        possible payment outcomes
      </title>
      <defs>
        <linearGradient id="pay-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={violet} />
          <stop offset="1" stopColor={pink} />
        </linearGradient>
      </defs>

      {/* Phone */}
      <rect x="40" y="14" width="190" height="312" rx="26" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
      <rect x="110" y="24" width="50" height="6" rx="3" fill={ink} />

      {/* Wallet card */}
      <rect x="56" y="44" width="158" height="62" rx="12" fill="url(#pay-grad)" />
      <text x="68" y="64" fontSize="9" fill="#ffffff" opacity="0.85" fontFamily="sans-serif">
        Wallet balance
      </text>
      <Bar x={68} y={74} w={64} h={10} fill="#ffffff" />
      <Bar x={68} y={92} w={40} h={5} fill="#ffffff" />

      {/* Cashback strip */}
      <rect
        x="56"
        y="116"
        width="158"
        height="34"
        rx="9"
        fill={pinkSoft}
        stroke={pink}
        strokeDasharray="4 3"
      />
      <text x="66" y="131" fontSize="8.5" fontWeight="700" fill={pink} fontFamily="sans-serif">
        Add a little more
      </text>
      <text x="66" y="143" fontSize="8" fill={ink} fontFamily="sans-serif">
        to unlock cashback
      </text>

      {/* Payment methods */}
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(56 ${162 + row * 34})`}>
          <rect
            width="158"
            height="28"
            rx="8"
            fill="#ffffff"
            stroke={row === 0 ? violet : line}
            strokeWidth={row === 0 ? 2 : 1}
          />
          <circle cx="16" cy="14" r="8" fill={row === 0 ? violetSoft : "#f3f4f6"} />
          <Bar x={32} y={11} w={row === 0 ? 70 : 56} />
          <circle cx="142" cy="14" r="5" fill="none" stroke={row === 0 ? violet : muted} strokeWidth="2" />
          {row === 0 && <circle cx="142" cy="14" r="2.5" fill={violet} />}
        </g>
      ))}

      {/* Pay button */}
      <rect x="56" y="272" width="158" height="34" rx="10" fill="url(#pay-grad)" />
      <text
        x="135"
        y="293"
        fontSize="11"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        Pay
      </text>

      {/* Outcome states */}
      <path
        d="M232 289 C 262 289, 262 289, 268 289"
        stroke={violet}
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 3"
      />
      {[
        { y: 196, label: "Success", sub: "Confirm booking", color: "#059669", bg: "#ecfdf5" },
        { y: 248, label: "Unclear", sub: "Check with server", color: violet, bg: violetSoft },
        { y: 300, label: "Cancelled", sub: "Back to checkout", color: pink, bg: pinkSoft },
      ].map((state) => (
        <g key={state.label}>
          <path
            d={`M268 289 C 280 289, 276 ${state.y}, 290 ${state.y}`}
            stroke={muted}
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="290"
            y={state.y - 20}
            width="118"
            height="40"
            rx="10"
            fill={state.bg}
            stroke={state.color}
          />
          <text
            x="302"
            y={state.y - 3}
            fontSize="10"
            fontWeight="700"
            fill={state.color}
            fontFamily="sans-serif"
          >
            {state.label}
          </text>
          <text x="302" y={state.y + 11} fontSize="8.5" fill={ink} fontFamily="sans-serif">
            {state.sub}
          </text>
        </g>
      ))}
    </svg>
  )
}

// A city page in a browser, with each section tagged by how fresh its data must be.
export function CityPageIllustration() {
  const tag = (x: number, y: number, label: string, live: boolean) => (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width={live ? 64 : 76}
        height="18"
        rx="9"
        fill={live ? pinkSoft : violetSoft}
        stroke={live ? pink : violet}
      />
      <circle cx="11" cy="9" r="3.5" fill={live ? pink : violet} />
      <text
        x="20"
        y="12.5"
        fontSize="8.5"
        fontWeight="700"
        fill={live ? pink : violet}
        fontFamily="sans-serif"
      >
        {label}
      </text>
    </g>
  )

  return (
    <svg viewBox="0 0 420 330" role="img" aria-labelledby="city-ill-title" className="h-auto w-full">
      <title id="city-ill-title">
        Illustration of a server-rendered city page where content sections are cached and availability and
        prices are always live
      </title>

      {/* Browser */}
      <rect x="10" y="10" width="330" height="310" rx="14" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
      <path d="M10 36 H340" stroke={ink} strokeWidth="2" />
      <circle cx="26" cy="23" r="4" fill={pink} />
      <circle cx="40" cy="23" r="4" fill={violet} />
      <circle cx="54" cy="23" r="4" fill={muted} />
      <rect x="72" y="16" width="180" height="14" rx="7" fill="#f3f4f6" />
      <text x="80" y="26" fontSize="8" fill={muted} fontFamily="sans-serif">
        /city/your-city
      </text>

      {/* Hero content (cached) */}
      <rect x="26" y="50" width="298" height="58" rx="10" fill={violetSoft} />
      <Bar x={40} y={64} w={150} h={10} fill={violet} />
      <Bar x={40} y={82} w={210} />
      <Bar x={40} y={94} w={160} />

      {/* Live slots and prices */}
      <rect
        x="26"
        y="120"
        width="298"
        height="58"
        rx="10"
        fill="#ffffff"
        stroke={pink}
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      {[0, 1, 2, 3].map((slot) => (
        <g key={slot} transform={`translate(${40 + slot * 70} 134)`}>
          <rect
            width="60"
            height="30"
            rx="8"
            fill={slot === 1 ? pinkSoft : "#ffffff"}
            stroke={slot === 1 ? pink : line}
          />
          <Bar x={10} y={9} w={40} h={5} fill={slot === 1 ? pink : muted} />
          <Bar x={10} y={19} w={26} h={4} />
        </g>
      ))}

      {/* Dishes, cooks, reviews (cached) */}
      {[0, 1, 2].map((card) => (
        <g key={card} transform={`translate(${26 + card * 101} 190)`}>
          <rect width="94" height="72" rx="10" fill="#ffffff" stroke={line} />
          <rect x="8" y="8" width="78" height="32" rx="6" fill="#f3f4f6" />
          <Bar x={8} y={48} w={60} />
          <Bar x={8} y={59} w={42} h={5} />
        </g>
      ))}

      {/* Sticky booking bar (live) */}
      <rect x="26" y="274" width="298" height="34" rx="10" fill={ink} />
      <Bar x={40} y={288} w={90} h={6} fill="#ffffff" />
      <rect x="244" y="281" width="68" height="20" rx="7" fill={pink} />
      <text
        x="278"
        y="295"
        fontSize="9"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        Book
      </text>

      {/* Freshness tags */}
      <path d="M326 79 H344" stroke={violet} strokeWidth="1.5" />
      {tag(344, 70, "Cached", false)}
      <path d="M326 149 H352" stroke={pink} strokeWidth="1.5" />
      {tag(352, 140, "Live", true)}
      <path d="M326 226 H344" stroke={violet} strokeWidth="1.5" />
      {tag(344, 217, "Cached", false)}
      <path d="M326 291 H352" stroke={pink} strokeWidth="1.5" />
      {tag(352, 282, "Live", true)}
    </svg>
  )
}

// An operations dashboard: visit statuses, a visit timeline and an incident alert.
export function OperationsIllustration() {
  const statuses = [
    { color: "#059669", bg: "#ecfdf5", w: 44 },
    { color: violet, bg: violetSoft, w: 52 },
    { color: pink, bg: pinkSoft, w: 40 },
    { color: "#059669", bg: "#ecfdf5", w: 44 },
    { color: violet, bg: violetSoft, w: 52 },
  ]

  return (
    <svg viewBox="0 0 420 300" role="img" aria-labelledby="ops-ill-title" className="h-auto w-full">
      <title id="ops-ill-title">
        Illustration of an operations dashboard with a list of visits and their statuses, a visit timeline and
        an incident alert
      </title>

      <rect x="10" y="10" width="400" height="280" rx="14" fill="#ffffff" stroke={ink} strokeWidth="2.5" />

      {/* Sidebar */}
      <rect x="10" y="10" width="70" height="280" rx="14" fill={ink} />
      <rect x="66" y="10" width="14" height="280" fill={ink} />
      {[0, 1, 2, 3, 4].map((item) => (
        <rect
          key={item}
          x="24"
          y={36 + item * 26}
          width={item === 1 ? 42 : 34}
          height="8"
          rx="4"
          fill={item === 1 ? violet : "#4b5563"}
        />
      ))}

      {/* Visit list */}
      <text x="96" y="36" fontSize="10" fontWeight="700" fill={ink} fontFamily="sans-serif">
        Visits
      </text>
      {statuses.map((status, row) => (
        <g key={row} transform={`translate(96 ${48 + row * 30})`}>
          <rect
            width="176"
            height="24"
            rx="7"
            fill={row === 1 ? "#faf5ff" : "#ffffff"}
            stroke={row === 1 ? violet : line}
          />
          <Bar x={10} y={9} w={62} />
          <rect
            x={164 - status.w}
            y="6"
            width={status.w}
            height="12"
            rx="6"
            fill={status.bg}
            stroke={status.color}
          />
        </g>
      ))}

      {/* Timeline */}
      <text x="288" y="36" fontSize="10" fontWeight="700" fill={ink} fontFamily="sans-serif">
        Timeline
      </text>
      <path d="M298 52 V196" stroke={line} strokeWidth="2" />
      {[0, 1, 2, 3].map((step) => (
        <g key={step} transform={`translate(298 ${58 + step * 44})`}>
          <circle r="6" fill={step < 3 ? violet : "#ffffff"} stroke={violet} strokeWidth="2" />
          <Bar x={14} y={-6} w={step === 3 ? 60 : 80} />
          <Bar x={14} y={4} w={48} h={4} />
        </g>
      ))}

      {/* Incident alert */}
      <rect x="96" y="210" width="300" height="66" rx="12" fill={pinkSoft} stroke={pink} />
      <circle cx="122" cy="243" r="13" fill={pink} />
      <text
        x="122"
        y="248"
        fontSize="13"
        fontWeight="800"
        fill="#ffffff"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        !
      </text>
      <text x="146" y="236" fontSize="10" fontWeight="700" fill={pink} fontFamily="sans-serif">
        SOS alert
      </text>
      <Bar x={146} y={245} w={150} fill="#fbcfe8" />
      <rect x="326" y="232" width="56" height="22" rx="8" fill="#ffffff" stroke={pink} />
      <text
        x="354"
        y="247"
        fontSize="9"
        fontWeight="700"
        fill={pink}
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        Resolve
      </text>
    </svg>
  )
}

// A cook listing with search and filters, and one cook's profile opened beside it.
export function CooksIllustration() {
  const star = (x: number, y: number, filled: boolean) => (
    <path
      key={x}
      transform={`translate(${x} ${y}) scale(0.5)`}
      d="M10 1 L12.6 7 L19 7.6 L14.2 11.8 L15.6 18 L10 14.8 L4.4 18 L5.8 11.8 L1 7.6 L7.4 7 Z"
      fill={filled ? violet : line}
    />
  )

  return (
    <svg viewBox="0 0 420 330" role="img" aria-labelledby="cooks-ill-title" className="h-auto w-full">
      <title id="cooks-ill-title">
        Illustration of a cook listing with a search bar, filters and cook cards, and a cook profile showing
        experience, ratings, reviews and a booking button
      </title>

      {/* Listing */}
      <rect x="10" y="10" width="236" height="310" rx="14" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
      <rect x="24" y="24" width="208" height="24" rx="12" fill="#f3f4f6" />
      <circle cx="38" cy="36" r="5" fill="none" stroke={muted} strokeWidth="1.8" />
      <text x="50" y="39.5" fontSize="8.5" fill={muted} fontFamily="sans-serif">
        Search cooks near you
      </text>
      {[
        { x: 24, w: 52, on: true },
        { x: 82, w: 60, on: false },
        { x: 148, w: 44, on: true },
      ].map((chip) => (
        <rect
          key={chip.x}
          x={chip.x}
          y="56"
          width={chip.w}
          height="16"
          rx="8"
          fill={chip.on ? violetSoft : "#ffffff"}
          stroke={chip.on ? violet : line}
        />
      ))}
      {[0, 1, 2].map((card) => (
        <g key={card} transform={`translate(24 ${84 + card * 78})`}>
          <rect
            width="208"
            height="68"
            rx="10"
            fill={card === 0 ? "#faf5ff" : "#ffffff"}
            stroke={card === 0 ? violet : line}
            strokeWidth={card === 0 ? 1.8 : 1}
          />
          <circle cx="26" cy="26" r="15" fill={card === 0 ? violetSoft : "#f3f4f6"} />
          <Bar x={50} y={14} w={card === 1 ? 70 : 84} h={7} fill={card === 0 ? ink : "#d1d5db"} />
          {[0, 1, 2, 3, 4].map((s) => star(50 + s * 11, 25, s < 4))}
          <rect x="50" y="42" width="38" height="12" rx="6" fill={pinkSoft} />
          <rect x="92" y="42" width="44" height="12" rx="6" fill={violetSoft} />
          <Bar x={160} y={16} w={36} h={7} fill={card === 0 ? violet : muted} />
        </g>
      ))}

      {/* Arrow to profile */}
      <path
        d="M232 118 C 248 118, 248 118, 262 118"
        stroke={violet}
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 3"
      />

      {/* Profile */}
      <rect x="262" y="40" width="148" height="262" rx="14" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
      <circle cx="336" cy="80" r="22" fill={violetSoft} />
      <Bar x={300} y={110} w={72} h={8} fill={ink} />
      <g>{[0, 1, 2, 3, 4].map((s) => star(310 + s * 11, 124, s < 4))}</g>
      {[
        { y: 148, label: "Experience" },
        { y: 172, label: "Cuisines" },
        { y: 196, label: "Service areas" },
      ].map((row) => (
        <g key={row.y}>
          <text x="276" y={row.y + 7} fontSize="8" fill={muted} fontFamily="sans-serif">
            {row.label}
          </text>
          <Bar x={346} y={row.y + 2} w={50} h={6} />
        </g>
      ))}
      <rect x="276" y="216" width="120" height="34" rx="8" fill="#f9fafb" stroke={line} />
      <text x="284" y="230" fontSize="7.5" fontWeight="700" fill={ink} fontFamily="sans-serif">
        Customer review
      </text>
      <Bar x={284} y={237} w={96} h={5} />
      <rect x="276" y="260" width="120" height="28" rx="9" fill={pink} />
      <text
        x="336"
        y="278"
        fontSize="10"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        Book this cook
      </text>
    </svg>
  )
}

// A party booking on the customer's phone, and the same booking in the operations dashboard.
export function PartyIllustration() {
  const label = (x: number, y: number, text: string, fill = ink) => (
    <text x={x} y={y} fontSize="8.5" fontWeight="700" fill={fill} fontFamily="sans-serif">
      {text}
    </text>
  )

  return (
    <svg viewBox="0 0 420 330" role="img" aria-labelledby="party-ill-title" className="h-auto w-full">
      <title id="party-ill-title">
        Illustration of a party booking on a phone with an editable menu, ingredients and equipment, and an
        advance and remaining payment, mirrored in an operations dashboard
      </title>

      {/* Phone */}
      <rect x="20" y="10" width="200" height="310" rx="26" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
      <rect x="95" y="20" width="50" height="6" rx="3" fill={ink} />

      {/* Menu */}
      {label(36, 48, "Party menu")}
      {[0, 1, 2].map((dish) => (
        <g key={dish} transform={`translate(36 ${56 + dish * 26})`}>
          <rect width="168" height="21" rx="7" fill="#ffffff" stroke={dish === 1 ? violet : line} />
          <circle cx="11" cy="10.5" r="5" fill={dish === 1 ? violetSoft : "#f3f4f6"} />
          <Bar x={22} y={8} w={dish === 1 ? 70 : 84} h={5} fill={dish === 1 ? ink : "#d1d5db"} />
          <text
            x="156"
            y="14"
            fontSize="8"
            fontWeight="700"
            fill={violet}
            textAnchor="end"
            fontFamily="sans-serif"
          >
            Edit
          </text>
        </g>
      ))}

      {/* Ingredients and equipment */}
      {label(36, 152, "Ingredients and equipment")}
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(36 ${160 + row * 15})`}>
          <rect width="9" height="9" rx="2" fill={row < 2 ? violet : "#ffffff"} stroke={violet} />
          {row < 2 && <path d="M2 4.5 L4 6.5 L7.5 2.5" stroke="#ffffff" strokeWidth="1.5" fill="none" />}
          <Bar x={16} y={2} w={row === 1 ? 90 : 110} h={5} />
        </g>
      ))}

      {/* Payment summary */}
      <rect x="36" y="214" width="168" height="58" rx="10" fill={violetSoft} />
      {label(46, 230, "Advance paid", violet)}
      <Bar x={150} y={225} w={42} h={6} fill={violet} />
      {label(46, 246, "Remaining", pink)}
      <Bar x={150} y={241} w={42} h={6} fill={pink} />
      <rect x="46" y="256" width="146" height="6" rx="3" fill="#ffffff" />
      <rect x="46" y="256" width="62" height="6" rx="3" fill={violet} />

      <rect x="36" y="282" width="168" height="26" rx="9" fill={pink} />
      <text
        x="120"
        y="299"
        fontSize="10"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        Pay remaining
      </text>

      {/* Link to dashboard */}
      <path
        d="M220 150 C 236 150, 236 150, 248 150"
        stroke={violet}
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 3"
      />

      {/* Operations dashboard */}
      <rect x="248" y="60" width="164" height="190" rx="14" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
      <rect x="248" y="60" width="164" height="28" rx="14" fill={ink} />
      <rect x="248" y="74" width="164" height="14" fill={ink} />
      <text x="262" y="78" fontSize="9" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">
        Operations team
      </text>
      {["Menu", "Preferences", "Equipment", "Payment"].map((row, index) => (
        <g key={row} transform={`translate(262 ${104 + index * 26})`}>
          <text y="8" fontSize="8" fill={muted} fontFamily="sans-serif">
            {row}
          </text>
          <Bar x={64} y={3} w={index === 3 ? 50 : 72} h={6} fill={index === 3 ? violetSoft : line} />
        </g>
      ))}
      <rect x="262" y="210" width="136" height="24" rx="8" fill={pinkSoft} stroke={pink} />
      <text
        x="330"
        y="225.5"
        fontSize="8.5"
        fontWeight="700"
        fill={pink}
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        Ready to fulfil
      </text>
    </svg>
  )
}
