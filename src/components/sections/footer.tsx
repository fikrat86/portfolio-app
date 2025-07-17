import React from "react";
import { socialData } from "@/data/social";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <div className="flex justify-center gap-4 mb-4">
        {socialData.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-950 dark:hover:text-gray-300"
          >
            <social.icon />
          </a>
        ))}
      </div>
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Hushng Fikrat Muhibullah. All rights
        reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
