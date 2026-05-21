import logo from "../../../logo.png";

export function BrandLogo({ className = "w-8 h-8 rounded-lg object-contain" }: { className?: string }) {
  return <img src={logo} alt="HealthMate logo" className={className} />;
}
