import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="TAF — Trang chủ">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Điều hướng chính">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors relative"
              activeProps={{ className: "text-foreground font-medium [&]:after:content-[''] [&]:after:absolute [&]:after:left-0 [&]:after:right-0 [&]:after:-bottom-1.5 [&]:after:h-[2px] [&]:after:bg-brand-red" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>



        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/lien-he"
            className="inline-flex items-center px-4 py-2 text-sm font-medium border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors rounded-[2px]"
          >
            Yêu cầu báo giá
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1" aria-label="Điều hướng mobile">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base text-foreground border-b border-border/50"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/lien-he"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center px-4 py-3 text-sm font-medium border border-accent text-foreground rounded-[2px]"
            >
              Yêu cầu báo giá
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
