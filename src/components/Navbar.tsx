import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className="w-full border-b border-[#1C1917]/10 py-6 px-6 lg:px-12 flex items-center justify-between animate-fadeIn">
      <div className="font-serif text-2xl font-bold tracking-widest uppercase text-[#1C1917]">
        OS.
      </div>
      
      <div className="hidden md:flex gap-8">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="text-sm font-medium tracking-widest text-[#1C1917] uppercase hover:opacity-60 transition-opacity">
            {link.label}
          </a>
        ))}
      </div>

      <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
        <span className="block h-[1px] w-6 bg-[#1C1917]"></span>
        <span className="block h-[1px] w-6 bg-[#1C1917]"></span>
      </button>
    </nav>
  );
}
