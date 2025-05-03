import * as React from "react";
const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="metalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#85c5ff" />
        <stop offset="25%" stopColor="#4d9de0" />
        <stop offset="50%" stopColor="#3a8cd6" />
        <stop offset="75%" stopColor="#4d9de0" />
        <stop offset="100%" stopColor="#7ab8f5" />
      </linearGradient>
      <linearGradient id="jsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#333" />
        <stop offset="50%" stopColor="#222" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
      <linearGradient id="jsHighlight" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#444" stopOpacity={0.7} />
        <stop offset="100%" stopColor="#222" stopOpacity={0} />
      </linearGradient>
      <filter id="hindiLighting" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceAlpha" stdDeviation={2} result="blur" />
        <feOffset in="blur" dx={1} dy={1} result="offsetBlur" />
        <feSpecularLighting
          in="blur"
          surfaceScale={5}
          specularConstant={1.2}
          specularExponent={20}
          lightingColor="#FFFFFF"
          result="specOut"
        >
          <fePointLight x={200} y={100} z={150} />
        </feSpecularLighting>
        <feComposite
          in="specOut"
          in2="SourceAlpha"
          operator="in"
          result="specOut"
        />
        <feComposite
          in="SourceGraphic"
          in2="specOut"
          operator="arithmetic"
          k1={0}
          k2={1}
          k3={1}
          k4={0}
        />
      </filter>
    </defs>
    <rect
      x={50}
      y={50}
      width={290}
      height={290}
      rx={15}
      fill="#f7df1e"
      stroke="#a8940c"
      strokeWidth={2}
    />
    <line x1={195} y1={50} x2={195} y2={150} stroke="black" strokeWidth={2} />
    <g transform="translate(195,150)">
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-15;10;-7;5;-3;2;0"
          keyTimes="0;0.2;0.4;0.6;0.8;0.9;1"
          dur="2s"
          fill="freeze"
        />
        <text
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fontSize={42}
          fill="url(#metalBlue)"
          filter="url(#hindiLighting)"
        >
          {"\n        \u0939\u093F\u0902\u0926\u0940\n      "}
        </text>
      </g>
    </g>
    <g transform="translate(195, 200)">
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          additive="sum"
          values="0,0; 0,20; 0,0; 0,12; 0,0; 0,6; 0,0"
          keyTimes="0;0.15;0.3;0.45;0.6;0.75;1"
          dur="2s"
          repeatCount={1}
          fill="freeze"
        />
        <path
          d="M-67,108 C-90,108 -109,98 -122,78 L-102,63 C-94,78 -82,85 -67,85 C-52,85 -42,78 -42,58 L-42,-22 L-17,-22 L-17,58 C-17,93 -37,108 -67,108 Z"
          fill="#151515"
        />
        <path
          d="M-70,105 C-93,105 -112,95 -125,75 L-105,60 C-97,75 -85,82 -70,82 C-55,82 -45,75 -45,55 L-45,-25 L-20,-25 L-20,55 C-20,90 -40,105 -70,105 Z"
          fill="url(#jsGradient)"
        />
        <path
          d="M-70,105 C-93,105 -112,95 -125,75 L-105,60 C-97,75 -85,82 -70,82 C-55,82 -45,75 -45,55 L-45,-25 L-20,-25 L-20,55 C-20,90 -40,105 -70,105 Z"
          fill="url(#jsHighlight)"
          opacity={0.6}
        />
        <path
          d="M45,-45 C78,-45 98,-25 98,0 L73,0 C73,-15 63,-25 45,-25 C28,-25 18,-15 18,-5 C18,10 28,15 53,20 C83,27 98,40 98,65 C98,90 78,110 43,110 C8,110 -12,90 -22,70 L3,55 C13,75 28,85 43,85 C63,85 73,75 73,65 C73,50 63,42 38,35 C8,28 -7,15 -7,-5 C-7,-30 13,-45 45,-45 Z"
          fill="#151515"
        />
        <path
          d="M42,-25 C75,-25 95,-5 95,20 L70,20 C70,5 60,-5 42,-5 C25,-5 15,5 15,15 C15,30 25,35 50,40 C80,47 95,60 95,85 C95,110 75,130 40,130 C5,130 -15,110 -25,90 L0,75 C10,95 25,105 40,105 C60,105 70,95 70,85 C70,70 60,62 35,55 C5,48 -10,35 -10,15 C-10,-10 10,-25 42,-25 Z"
          fill="url(#jsGradient)"
          transform="translate(0,-20)"
        />
        <path
          d="M42,-25 C75,-25 95,-5 95,20 L70,20 C70,5 60,-5 42,-5 C25,-5 15,5 15,15 C15,30 25,35 50,40 C80,47 95,60 95,85 C95,110 75,130 40,130 C5,130 -15,110 -25,90 L0,75 C10,95 25,105 40,105 C60,105 70,95 70,85 C70,70 60,62 35,55 C5,48 -10,35 -10,15 C-10,-10 10,-25 42,-25 Z"
          fill="url(#jsHighlight)"
          opacity={0.6}
          transform="translate(0,-20)"
        />
      </g>
    </g>
  </svg>
);
export default SVGComponent;
