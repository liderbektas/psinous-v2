import Image from "next/image";
import {breadcrumbs} from "@/utils/navigation";
import ActiveLink from "@/components/active-link";

export default function Header() {

    return (
        <header className="h-28 w-screen bg-[#f4efe6] text-black shadow-lg">
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
                <div className="shrink-0">
                    <Image
                        src="https://www.psinous.org/static/media/logo.81f7ef798d962d9cf3be.png"
                        alt="logo"
                        width={140}
                        height={140}
                        className="object-cover"
                    />
                </div>

                <ul className="flex items-center gap-x-6 text-sm font-medium relative">
                    {breadcrumbs.map((item, i) => (
                        <li key={i} className="relative group">
                            <ActiveLink href={item.slug}>
                                {item.text}
                            </ActiveLink>

                            {item.children && item.children.length > 0 && (
                                <ul className="absolute left-0 top-full bg-[#f4efe6] shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-100 min-w-[180px] z-50">
                                    {item.children.map((child, index) => (
                                        <li key={index} className="px-4 py-2">
                                            <ActiveLink href={child.slug}>
                                                {child.text}
                                            </ActiveLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="shrink-0 text-sm">sosyal-medya</div>
            </div>
        </header>
    );
}
