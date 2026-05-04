import React, { useEffect, useRef, useState, useCallback } from 'react';
import { asciiLines } from '../data/asciiPortrait';
import './AsciiPortrait.css';

// Color themes matching portfolio palette
const THEMES = [
  { name: 'matcha',  bright: '#a8c5a0', mid: '#7aaa6e', dim: '#4a7a44', bg: 'transparent' },
  { name: 'pink',    bright: '#e8a0b4', mid: '#d4607a', dim: '#9b3a55', bg: 'transparent' },
  { name: 'lavender',bright: '#c4a8e0', mid: '#9b7fe8', dim: '#6a50b0', bg: 'transparent' },
];

// Map char density to brightness 0-1
function charBrightness(ch) {
  const ramp = ' .,:;+*?%S#@';
  const idx = ramp.indexOf(ch);
  if (idx === -1) return 0;
  return idx / (ramp.length - 1);
}

export default function AsciiPortrait() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -1, y: -1 });
  const [themeIdx, setThemeIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const theme = THEMES[themeIdx];

  const CHAR_W = 9;
  const CHAR_H = 16;
  const COLS = asciiLines[0]?.length || 68;
  const ROWS = asciiLines.length;
  const W = COLS * CHAR_W;
  const H = ROWS * CHAR_H;

  const draw = useCallback((t) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const wave = isHovered ? t * 0.002 : 0;

    ctx.font = `${CHAR_H - 2}px 'Courier New', monospace`;
    ctx.textBaseline = 'top';

    for (let row = 0; row < ROWS; row++) {
      const line = asciiLines[row] || '';
      for (let col = 0; col < line.length; col++) {
        const ch = line[col];
        if (ch === ' ') continue;

        const brightness = charBrightness(ch);
        if (brightness < 0.05) continue;

        const cx = col * CHAR_W;
        const cy = row * CHAR_H;

        // Distance from mouse for ripple effect
        const dx = mx >= 0 ? cx - mx : 9999;
        const dy = my >= 0 ? cy - my : 9999;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ripple = mx >= 0 ? Math.sin(dist * 0.08 - wave * 3) * 0.3 : 0;

        // Glitch wave
        const waveOffset = isHovered
          ? Math.sin(row * 0.3 + wave) * 0.15
          : 0;

        const finalBrightness = Math.max(0, Math.min(1, brightness + ripple + waveOffset));

        // Color by brightness level
        let color;
        if (finalBrightness > 0.75) color = theme.bright;
        else if (finalBrightness > 0.4) color = theme.mid;
        else color = theme.dim;

        // Proximity glow
        if (mx >= 0 && dist < 60) {
          const glow = 1 - dist / 60;
          ctx.shadowBlur = glow * 8;
          ctx.shadowColor = theme.bright;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = color;
        ctx.globalAlpha = 0.2 + finalBrightness * 0.85;
        ctx.fillText(ch, cx, cy);
      }
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    animRef.current = requestAnimationFrame(draw);
  }, [theme, isHovered, W, H, COLS, ROWS]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  const handleMouseMove = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: (e.clientX - rect.left) * (W / rect.width),
      y: (e.clientY - rect.top) * (H / rect.height),
    };
  }, [W, H]);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1, y: -1 };
    setIsHovered(false);
  }, []);

  return (
    <div className="ascii-portrait">
      <div className="ascii-portrait__canvas-wrap"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="ascii-portrait__canvas"
        />
      </div>

      {/* Theme switcher */}
      <div className="ascii-portrait__themes">
        {THEMES.map((t, i) => (
          <button
            key={t.name}
            className={`ascii-theme-btn ${i === themeIdx ? 'ascii-theme-btn--active' : ''}`}
            style={{ '--btn-color': t.bright }}
            onClick={() => setThemeIdx(i)}
            aria-label={t.name}
          />
        ))}
      </div>
    </div>
  );
}
