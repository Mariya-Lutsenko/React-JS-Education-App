import React from "react";
import "./FallingLeaves.css";

const palettes = [
  ["#fff5a8", "#f8cd38", "#d99412", "#a8660b"],
  ["#fff0a0", "#eeb52b", "#c77a13", "#854b13"],
  ["#ffe7a0", "#f3a83b", "#d75a28", "#922d23"],
  ["#ffed72", "#e9b91d", "#ad7610", "#70480b"],
  ["#ffd7a0", "#e77b36", "#b63d2d", "#76251f"],
];
const leaves = [
  { type: "maple", left: "7%", delay: "1s", duration: "17s", size: 25 },
  { type: "oak", left: "24%", delay: "8s", duration: "23s", size: 17 },
  { type: "maple", left: "43%", delay: "13s", duration: "20s", size: 20 },
  { type: "oak", left: "61%", delay: "4s", duration: "25s", size: 23 },
  { type: "maple", left: "78%", delay: "17s", duration: "19s", size: 16 },
  { type: "oak", left: "93%", delay: "11s", duration: "22s", size: 20 },
  { type: "maple", left: "34%", delay: "24s", duration: "21s", size: 14 },
  { type: "oak", left: "70%", delay: "29s", duration: "24s", size: 26 },
];

function LeafShape({ type, id }) {
  const colors = palettes[id % palettes.length];
  const gradientId = `leaf-gold-${id}`;

  return (
    <svg
      viewBox="0 0 64 64"
      className="leaf-svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="30%" stopColor={colors[1]} />
          <stop offset="68%" stopColor={colors[2]} />
          <stop offset="100%" stopColor={colors[3]} />
        </linearGradient>

        <linearGradient
          id={`vein-${id}`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="0%" stopColor="#fff9d6" stopOpacity=".15" />
          <stop offset="50%" stopColor="#fff6c4" stopOpacity=".9" />
          <stop offset="100%" stopColor="#8d5010" stopOpacity=".45" />
        </linearGradient>
      </defs>

      {type === "maple" ? (
        <g>
          <path
            d="
              M31 59
              C28 53 26 49 24 44
              L12 49 L15 39
              L5 34 L17 29
              L10 19 L23 23
              L24 9 L31 19
              L37 5 L40 21
              L53 13 L47 27
              L59 30 L49 37
              L53 46 L40 43
              C37 49 35 54 31 59 Z
            "
            fill={`url(#${gradientId})`}
            stroke={colors[3]}
            strokeWidth=".8"
            strokeLinejoin="round"
          />

          <path
            d="
              M31 57 Q32 42 37 8
              M32 44 Q25 36 17 31
              M34 37 Q42 33 52 30
              M35 28 L25 22
              M29 49 L43 43
            "
            fill="none"
            stroke={`url(#vein-${id})`}
            strokeWidth="1"
            strokeLinecap="round"
          />

          <path
            d="M29 21 Q31 15 35 11"
            fill="none"
            stroke="#fff9d6"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity=".8"
          />
        </g>
      ) : (
        <g>
          <path
            d="
              M32 59
              C28 54 26 51 24 47
              C18 49 14 44 17 39
              C8 39 8 32 14 28
              C6 23 12 17 19 18
              C17 10 25 8 30 14
              C34 6 42 10 42 17
              C50 13 56 20 50 26
              C59 29 56 37 48 38
              C51 44 44 49 39 46
              C37 51 35 55 32 59 Z
            "
            fill={`url(#${gradientId})`}
            stroke={colors[3]}
            strokeWidth=".8"
            strokeLinejoin="round"
          />

          <path
            d="
              M32 57 Q32 37 32 15
              M32 43 L20 37
              M32 34 L17 26
              M32 28 L40 18
              M32 46 L43 39
              M32 38 L47 29
            "
            fill="none"
            stroke={`url(#vein-${id})`}
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>
      )}
    </svg>
  );
}

export default function FallingLeaves() {
  return (
    <div className="falling-leaves" aria-hidden="true">
      {leaves.map((leaf, index) => (
        <span
          key={index}
          className={`falling-leaf leaf-${index % 4}`}
          style={{
            "--leaf-left": leaf.left,
            "--leaf-delay": leaf.delay,
            "--leaf-duration": leaf.duration,
            "--leaf-size": `${leaf.size}px`,
          }}
        >
          <span className="leaf-spin">
            <LeafShape type={leaf.type} id={index} />
          </span>
        </span>
      ))}
    </div>
  );
}