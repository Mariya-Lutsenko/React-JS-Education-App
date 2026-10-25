import React from "react";
import "./FallingLeaves.css";

const palettes = [
  ["#fff5a8", "#f8cd38", "#d99412", "#a8660b"],
  ["#fff0a0", "#eeb52b", "#c77a13", "#854b13"],
  ["#ffe7a0", "#f3a83b", "#d75a28", "#922d23"],
  ["#ffed72", "#e9b91d", "#ad7610", "#70480b"],
  ["#ffd7a0", "#e77b36", "#b63d2d", "#76251f"],
];
const leaves =[
  { type: "linden", left: "7%", delay: "1s", duration: "19s", size: 25 },
  { type: "oak", left: "24%", delay: "8s", duration: "23s", size: 18 },
  { type: "maple", left: "43%", delay: "13s", duration: "21s", size: 22 },
  { type: "oval", left: "61%", delay: "4s", duration: "25s", size: 16 },
  { type: "linden", left: "78%", delay: "17s", duration: "20s", size: 19 },
  { type: "oak", left: "93%", delay: "11s", duration: "24s", size: 22 },
  { type: "oval", left: "34%", delay: "24s", duration: "22s", size: 14 },
  { type: "maple", left: "70%", delay: "29s", duration: "24s", size: 26 },
];

function LeafShape({ type, id }) {
  const colors = palettes[id % palettes.length];
  const gradientId = `leaf-gold-${id}`;
  const veinId = `vein-${id}`;

  const shapes = {
    // Липа — широкое сердцевидное основание и вытянутый кончик
    linden: {
      path: `
        M32 59
        C28 54 23 49 18 43
        L13 44 L15 38
        L9 35 L13 30
        L8 26 L15 24
        L13 18 L20 20
        L22 13 L28 17
        L32 7
        L36 17 L43 13
        L45 21 L53 19
        L50 27 L57 30
        L51 36 L54 42
        L46 43
        C41 49 36 55 32 59 Z
      `,
      veins: `
        M32 57 Q31 38 32 9
        M32 39 Q24 32 14 27
        M32 32 Q40 26 51 23
        M32 45 Q40 39 51 35
        M31 25 L23 19
      `,
    },

    // Дуб — округлые лопасти, а не острые лучи
    oak: {
      path: `
        M32 59
        C29 53 27 49 25 44
        C18 48 13 44 16 38
        C8 39 6 32 13 28
        C7 22 13 17 20 20
        C19 12 27 10 31 17
        C35 10 43 13 42 20
        C50 16 56 22 50 28
        C58 32 54 39 47 39
        C51 46 43 49 38 44
        C36 50 34 55 32 59 Z
      `,
      veins: `
        M32 57 Q32 38 32 16
        M32 43 L20 38
        M32 34 L15 28
        M32 28 L42 20
        M32 46 L46 39
        M32 38 L49 29
      `,
    },

    // Клён — пять широких лопастей с мягкими кончиками
    
    // Овальный лист — простая вытянутая форма
    oval: {
      path: `
        M32 59
        C26 51 16 39 15 29
        C14 18 24 10 32 7
        C41 14 50 23 47 34
        C44 44 37 53 32 59 Z
      `,
      veins: `
        M32 57 Q32 32 32 9
        M32 43 L20 31
        M32 34 L43 23
        M32 26 L24 17
        M32 48 L41 39
      `,
    },
  };

  const shape = shapes[type] || shapes.linden;

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
          id={veinId}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#fff9d6" stopOpacity=".35" />
          <stop offset="50%" stopColor="#fff6c4" stopOpacity=".9" />
          <stop offset="100%" stopColor="#8d5010" stopOpacity=".5" />
        </linearGradient>
      </defs>

      <path
        d={shape.path}
        fill={`url(#${gradientId})`}
        stroke={colors[3]}
        strokeWidth=".8"
        strokeLinejoin="round"
      />

      <path
        d={shape.veins}
        fill="none"
        stroke={`url(#${veinId})`}
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M32 56 Q34 59 36 61"
        fill="none"
        stroke={colors[3]}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
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