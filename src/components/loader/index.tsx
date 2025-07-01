"use client";

import {useEffect, useRef} from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import CounterDigit from "../counter-digit";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Loader() {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const tl = gsap.timeline({
            delay: 0.3,
            defaults: {
                ease: "hop",
            },
        });

        const counts = ref.current.querySelectorAll(".count");

        counts.forEach((count: Element, index: number) => {
            const digits = count.querySelectorAll(".digit h1");

            tl.to(digits, {
                y: "0%",
                opacity: 1,
                duration: 1,
                stagger: 0.075,
            }, index);

            tl.to(digits, {
                y: "-100%",
                duration: 1,
                opacity: 0,
                stagger: 0.075,
            }, index + 1);
        });

        tl.to(".spinner", {
            opacity: 0,
            duration: 0.3,
        });

        tl.to(".word h1", {
            y: "0%",
            duration: 1,
        }, "<");

        tl.to(".divider", {
            scaleY: "100%",
            duration: 1,
            onComplete: () => {
                gsap.to(".divider", {
                    opacity: 0,
                    duration: 0.3,
                    delay: 0.3
                });
            }});

        tl.to("#word-1 h1", {
            y: "100%",
            duration: 1,
            delay: 0.3,
        });

        tl.to("#word-2 h1", {
                y: "-100%",
                duration: 1,
            }, "<"
        );

        tl.to(".loader-block", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1.5,
            stagger: 0.1,
            delay: 0.75,
            onComplete: () => {
                if (ref.current) ref.current.style.display = "none";
            }
        }, "<");

    }, []);

    return (
        <div ref={ref}
             className="loader fixed top-0 left-0 w-screen h-screen overflow-hidden z-[2]"
        >
            <div className="absolute top-0 w-full h-full flex overlay">
                <div className="w-full h-full bg-[#f4efe6] loader-block"></div>
                <div className="w-full h-full bg-[#f4efe6] loader-block"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 intro-logo">
                <div id="word-1" className="relative word overflow-hidden">
                    <h1 className="text-[2.5rem] text-[#b60708] translate-y-full font-semibold italic">
                        <span>Psi</span>
                    </h1>
                </div>
                <div id="word-2" className="word overflow-hidden">
                    <h1 className="text-[2.5rem] text-[#b60708] -translate-y-full font-semibold">Nous</h1>
                </div>
            </div>

            <div
                className="divider absolute top-0 left-[calc(50%-1.15rem)] -translate-x-1/2 origin-top w-px h-full bg-[#b60708] scale-y-0"></div>

            <div className="spinner-container absolute bottom-[10%] left-1/2 -translate-x-1/2">
                <div
                    className="spinner w-[50px] h-[50px] border-[1.4px] border-[#b60708] border-t-white/[0.125] rounded-full animate-spin opacity-100"></div>
            </div>

            <div className="counter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
                {[
                    ["0", "0"],
                    ["2", "7"],
                    ["6", "5"],
                    ["9", "8"],
                    ["9", "9"],
                ].map((pair, i) => (
                    <div key={i}
                         className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex"
                    >
                        <CounterDigit digit={parseInt(pair[0])}/>
                        <CounterDigit digit={parseInt(pair[1])}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
