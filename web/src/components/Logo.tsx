interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 28, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Magnifying glass circle */}
      <circle cx="42" cy="42" r="28" stroke="currentColor" strokeWidth="7" fill="none" />
      {/* Magnifying glass handle */}
      <line x1="62" y1="62" x2="85" y2="85" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      {/* Downward trend line inside lens */}
      <polyline
        points="22,30 35,38 45,32 58,50"
        fill="none"
        stroke="#22C1C3"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow head on trend line */}
      <polyline
        points="50,42 58,50 52,44"
        fill="none"
        stroke="#22C1C3"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
