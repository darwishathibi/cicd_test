"use client";
import React from "react";

export default function JumpingMan() {
  return (
    <div className="flex justify-center items-end h-64">
      <svg
        width="80"
        height="180"
        viewBox="0 0 80 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="jumping-man"
      >
        {/* Head */}
        <circle cx="40" cy="30" r="16" fill="#222" />
        {/* Body */}
        <rect x="34" y="46" width="12" height="40" rx="6" fill="#444" />
        {/* Left Arm */}
        <rect
          x="18"
          y="50"
          width="28"
          height="8"
          rx="4"
          fill="#666"
          transform="rotate(-20 18 50)"
        />
        {/* Right Arm */}
        <rect
          x="34"
          y="50"
          width="28"
          height="8"
          rx="4"
          fill="#666"
          transform="rotate(20 34 50)"
        />
        {/* Left Leg */}
        <rect
          x="32"
          y="86"
          width="8"
          height="36"
          rx="4"
          fill="#888"
          transform="rotate(-10 32 86)"
        />
        {/* Right Leg */}
        <rect
          x="40"
          y="86"
          width="8"
          height="36"
          rx="4"
          fill="#888"
          transform="rotate(10 40 86)"
        />
      </svg>
      <style jsx>{`
        .jumping-man {
          animation: jump 1.2s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes jump {
          0% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-40px) scaleY(0.95);
          }
          40% {
            transform: translateY(-60px) scaleY(1.05);
          }
          60% {
            transform: translateY(-40px) scaleY(0.98);
          }
          80% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
