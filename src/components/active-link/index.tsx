'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function ActiveLink({ href, children }: { href: string, children: React.ReactNode }) {

    const pathname = usePathname();

    const normalize = (url: string) => url.replace(/\/$/, '');
    const isActive = normalize(pathname) === normalize(href);

    return (
        <Link
            href={href}
            className={clsx(
                'text-black cursor-pointer hover:text-[#b60708] transition-colors duration-200',
                {
                    'text-[#b60708]': isActive,
                }
            )}
        >
            {children}
        </Link>
    );
}
