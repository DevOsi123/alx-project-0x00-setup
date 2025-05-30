export interface PillProps {
  title: string;
  styles?: string; // ✅ optional custom styles
}

export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
  styles: string;    // <-- new optional styles prop
  onClick?: () => void;
}