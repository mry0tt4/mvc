"use client";
import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";
import { useState } from "react";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["600"] });

export default function CourseFilter() {
  const [active, setActive] = useState<string>("Retention");

  const Button = ({ label }: { label: string }) => {
    const isActive = active === label;
    const base = "h-[40px] rounded-[30px] px-[15px] flex items-center justify-center border";
    const inactive = `${schibsted.className} ${base} border-[#151212] text-[#151212] font-[700] uppercase`;
    const activeCls = `${schibsted.className} ${base} border-[#151212] bg-[#151212] text-white font-[700] uppercase`;
    return (
      <button
        className={isActive ? activeCls : inactive}
        onClick={() => setActive(label)}
        aria-pressed={isActive}
      >
        {label}
      </button>
    );
  };
  return (
    <section className="w-full flex justify-center">
      {/* Match Header width/height and rounded proportions */}
      <div className="relative w-[1080px] h-[75px] rounded-[40px] bg-[#CBC6BD]">

        {/* Content container: per Figma width and spacing */}
        <div className="absolute inset-0 pt-[17px] pl-[20px]">
          <div className="w-[1040px] h-[40px] flex items-center justify-between gap-[28px]">
            {/* Left group: Course type */}
            <div className="flex items-center gap-[10px]">
              <Button label="Retention" />
              <Button label="Thumbnails" />
              <Button label="Masterclass" />
            </div>

            {/* Right group: Sort */}
            <div className="flex items-center gap-[10px]">
              <span className={`${schibsted.className} text-[#292826] font-[700] uppercase`}>10 Modules</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}