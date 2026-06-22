import { PORTFOLIO_DATA } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-neutral-900">
      <p className="text-sm text-neutral-500">
        © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
      </p>
    </footer>
  );
}
