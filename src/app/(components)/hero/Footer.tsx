'use client';

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiVercel,
  SiReact,
  SiGithub,
} from 'react-icons/si';

export default function Footer() {
  const icons = [
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
    { icon: <SiFramer />, label: 'Framer Motion' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <SiReact />, label: 'React' },
    { icon: <SiGithub />, label: 'GitHub' },
    { icon: <SiVercel />, label: 'Vercel' },
  ];

  return (
    <footer className="mt-24 w-full border-t border-gray-200 bg-white py-4 overflow-hidden">
      <div className="relative w-full">
        <div className="flex gap-10 animate-scroll-left whitespace-nowrap text-gray-600 px-4 text-sm items-center">
          {[...icons, ...icons].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
