
export default function RippleDivider({ tone = "navy" }) {
  const strokeColor =
    tone === "foam" ? "#F7F9FB" : tone === "teal" ? "#0FA3B1" : "#0B2647";

 
  return (
    <div className="ripple-divider" aria-hidden="true">
      <svg viewBox="0 0 1600 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,30 C50,5 150,55 200,30 C250,5 350,55 400,30 C450,5 550,55 600,30
             C650,5 750,55 800,30 C850,5 950,55 1000,30 C1050,5 1150,55 1200,30
             C1250,5 1350,55 1400,30 C1450,5 1550,55 1600,30"
          fill="none"
          stroke={strokeColor}
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
