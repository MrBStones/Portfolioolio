"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function TransitionLink({
  children,
  href,
  className,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}) {
  const router = useRouter();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { contextSafe } = useGSAP({});

  const handleClick = contextSafe(() => {
    // if already on the same page, do nothing
    if (window.location.pathname === href) return;

    gsap
      .timeline()
      .to(".mainContainer", {
        duration: 1,
        opacity: 0,
        filter: "blur(5px)",
        x: 100,
        ease: "power3.out",
      })
      .call(() => {
        router.push(href);
      });
  });

  const handleMouseEnter = contextSafe(() => {
    gsap.to(linkRef.current, {
      duration: 0.4,
      x: 10,
      ease: "power3.out",
    });
  });
  const handleMouseLeave = contextSafe(() => {
    gsap.to(linkRef.current, {
      duration: 0.4,
      x: 0,
      ease: "power3.out",
    });
  });

  return (
    <Link
      ref={linkRef}
      id="link"
      href={href}
      onClick={(e) => {
        if (onClick) {
          onClick();
        }
        e.preventDefault();
        handleClick();
      }}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Link>
  );
}
