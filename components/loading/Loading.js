import styles from './Loading.module.css';

export default function Loading({ show = true }) {
  if (!show) return null;

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loaderContainer}>
        {/* SVG Circle Progress - MBA at TOP and NINJA at BOTTOM */}
        <svg className={styles.progressCircle} viewBox="0 0 200 200" style={{ transform: 'rotate(-90deg)' }}>
          <defs>
            {/* Gradient for the progress circle - Elegant blue to purple */}
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#d946ef', stopOpacity: 1 }} />
            </linearGradient>

            {/* Gradient for text - Elegant deep blue to indigo */}
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
            </linearGradient>

            {/* Path for MBA - at top of circle */}
            <path 
              id="topArc" 
              d="M 32,100 A 68,68 0 0,1 168,100" 
              fill="none"
            />
            {/* Path for NINJA - at bottom of circle */}
            <path 
              id="bottomArc" 
              d="M 20,100 A 80,80 0 0,0 180,100" 
              fill="none"
            />
          </defs>

          {/* Background circle - THICK (30px) with soft gradient */}
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke="url(#backgroundGradient)"
            strokeWidth="30"
            opacity="0.15"
          />

          {/* Second background layer for depth */}
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="30"
            opacity="0.3"
          />
          
          {/* Animated gradient circle that fills - THICK (30px) */}
          <circle
            className={styles.progressBar}
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="30"
            strokeLinecap="round"
          />

          {/* MBA text - CURVED along TOP arc - naturally following the curve */}
          <text 
            fill="url(#textGradient)"
            fontSize="26"
            fontWeight="900"
            letterSpacing="8"
          >
            <textPath href="#topArc" startOffset="50%" textAnchor="middle">
              <tspan className={styles.letter} style={{ animationDelay: '0.2s' }}>M</tspan>
              <tspan className={styles.letter} style={{ animationDelay: '0.4s' }}>B</tspan>
              <tspan className={styles.letter} style={{ animationDelay: '0.6s' }}>A</tspan>
            </textPath>
          </text>

          {/* NINJA text - CURVED along BOTTOM arc - naturally following the curve */}
          <text 
            fill="url(#textGradient)"
            fontSize="24"
            fontWeight="900"
            letterSpacing="6"
          >
            <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
              <tspan className={styles.letter} style={{ animationDelay: '0.5s' }}>N</tspan>
              <tspan className={styles.letter} style={{ animationDelay: '0.7s' }}>I</tspan>
              <tspan className={styles.letter} style={{ animationDelay: '0.9s' }}>N</tspan>
              <tspan className={styles.letter} style={{ animationDelay: '1.1s' }}>J</tspan>
              <tspan className={styles.letter} style={{ animationDelay: '1.3s' }}>A</tspan>
            </textPath>
          </text>
        </svg>

        {/* Logo in center */}
        <div className={styles.logoCenter}>
          <img 
            src="/images/loading.png" 
            alt="MBA NINJA Loading" 
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
}
