import { ReactNode } from "react";
import { useMouseMovement } from "@/hooks/useMovement";
import { twMerge } from "tw-merge";

interface props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export default function GlowCard({ children, className, style }: props) {
  const cardRef = useMouseMovement();
  return (
    <div
      className={twMerge(
        `--landing-card h-[80vh] lg:h-[70vh] w-full border-[2px] border-white/20 rounded-xl shadow-sm shadow-primary-base/50 relative overflow-hidden ${className}`
      )}
      style={style}
      ref={cardRef}
    >
      <div className="w-full h-full absolute top-0 left-0 z-[50] p-3 md:p-4 flex flex-col ">
        {children}
      </div>
    </div>
  );
}
