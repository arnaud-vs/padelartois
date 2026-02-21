import { useEffect, useState } from "react";

const BouncingBall = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="bouncing-ball">
        <span className="text-4xl md:text-5xl drop-shadow-lg">🎾</span>
      </div>

      <style>{`
        .bouncing-ball {
          position: absolute;
          top: 0;
          left: -60px;
          animation: 
            ball-move-x 3s ease-in forwards,
            ball-move-y 0.5s ease-in alternate infinite,
            ball-fade 3s ease-in forwards;
        }

        @keyframes ball-move-x {
          0% { left: -60px; }
          100% { left: 110vw; }
        }

        @keyframes ball-move-y {
          0% { top: 20vh; transform: rotate(0deg); }
          100% { top: 85vh; transform: rotate(180deg); }
        }

        @keyframes ball-fade {
          0%, 80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default BouncingBall;
