import Image from "next/image";

type Size = "sm" | "md" | "lg";

interface Props {
  size?: Size;
  className?: string;
}

const SIZE_MAP: Record<Size, { h: string; w: number; px: number }> = {
  sm: { h: "h-7",            w: 140, px: 28 },
  md: { h: "h-9 xl:h-10",    w: 200, px: 40 },
  lg: { h: "h-12",           w: 240, px: 48 },
};

export default function BrandLogo({ size = "md", className = "" }: Props) {
  const s = SIZE_MAP[size];
  const aspect = 5; // 2000x400 master = 5:1
  const widthPx = Math.round(s.px * aspect);
  return (
    <span className={`inline-flex items-center ${className}`} aria-label="Verymuch.ai">
      <Image
        src="/logo-white.png"
        alt="Verymuch.ai"
        width={widthPx}
        height={s.px}
        className={`logo-white ${s.h} w-auto object-contain`}
        priority
      />
      <Image
        src="/Verymuch_Logo_transparent_real.png"
        alt="Verymuch.ai"
        width={widthPx}
        height={s.px}
        className={`logo-color ${s.h} w-auto object-contain`}
        priority
      />
    </span>
  );
}
