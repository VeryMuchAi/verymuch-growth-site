import {
  Clock,
  Search,
  TrendingDown,
  TrendingUp,
  Edit,
  Share2,
  BarChart,
  Settings,
  Laptop,
  Bot,
  Zap,
  Radio,
  FileText,
  Users,
  Target,
  Activity,
  Mail,
  MessageCircle,
  Cpu,
  Star,
  Wrench,
  HelpCircle,
  AlertTriangle,
  GitBranch,
  CheckCircle,
  List,
  type LucideIcon,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type IconName =
  | "clock" | "search" | "trending-down" | "trending-up" | "edit"
  | "share" | "bar-chart" | "settings" | "laptop" | "bot" | "zap"
  | "radio" | "file-text" | "users" | "target" | "activity" | "mail"
  | "message" | "cpu" | "star" | "wrench" | "help-circle"
  | "alert-triangle" | "git-branch" | "check" | "list";

export type ColorVariant =
  | "orange" | "teal" | "dark" | "purple" | "green" | "amber";

// ─── Icon registry ────────────────────────────────────────────────────────────

const ICONS: Record<IconName, LucideIcon> = {
  "clock":           Clock,
  "search":          Search,
  "trending-down":   TrendingDown,
  "trending-up":     TrendingUp,
  "edit":            Edit,
  "share":           Share2,
  "bar-chart":       BarChart,
  "settings":        Settings,
  "laptop":          Laptop,
  "bot":             Bot,
  "zap":             Zap,
  "radio":           Radio,
  "file-text":       FileText,
  "users":           Users,
  "target":          Target,
  "activity":        Activity,
  "mail":            Mail,
  "message":         MessageCircle,
  "cpu":             Cpu,
  "star":            Star,
  "wrench":          Wrench,
  "help-circle":     HelpCircle,
  "alert-triangle":  AlertTriangle,
  "git-branch":      GitBranch,
  "check":           CheckCircle,
  "list":            List,
};

// ─── Color system — matches brand board ───────────────────────────────────────

const COLORS: Record<ColorVariant, string> = {
  orange: "linear-gradient(135deg, #D97757 0%, #E8842A 100%)",
  teal:   "linear-gradient(135deg, #2C6B65 0%, #2AB89A 100%)",
  dark:   "linear-gradient(135deg, #2A2A2E 0%, #1A1A1D 100%)",
  purple: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
  green:  "linear-gradient(135deg, #5BA66B 0%, #3D8A4F 100%)",
  amber:  "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
};

const SIZES = {
  sm: { block: 36, icon: 16, radius: "10px" },
  md: { block: 44, icon: 20, radius: "12px" },
  lg: { block: 52, icon: 24, radius: "14px" },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

interface IconBlockProps {
  icon: string;
  color?: ColorVariant;
  size?: keyof typeof SIZES;
}

export default function IconBlock({
  icon,
  color = "teal",
  size = "md",
}: IconBlockProps) {
  const bg = COLORS[color] ?? COLORS.teal;
  const { block, icon: iconSize, radius } = SIZES[size];
  const Icon = (ICONS[icon as IconName] ?? Zap) as LucideIcon;

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center"
      style={{ width: block, height: block, borderRadius: radius, background: bg }}
    >
      <Icon size={iconSize} color="#FFFFFF" strokeWidth={2.25} />
    </div>
  );
}

// ─── Cycling helpers ──────────────────────────────────────────────────────────

/** Cycles through brand colors for card grids */
export const CYCLE_COLORS: ColorVariant[] = ["teal", "orange", "purple", "dark", "green", "amber"];
export const cycleColor = (i: number): ColorVariant => CYCLE_COLORS[i % CYCLE_COLORS.length];
