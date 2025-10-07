import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Header() {
  return (
    <header className="w-full flex justify-center pt-[20px]">
      <div className="relative w-[1080px] h-[75px]">
        {/* Background box */}
        <Image
          src="/assets/header-box.svg"
          alt="Header background"
          fill
          className="rounded-[40px] object-cover"
          sizes="1080px"
          priority
        />

        {/* NAV BUTTONS container per Figma: top padding 17px, left padding 20px, content width 1040px */}
        <div className="absolute inset-0 pt-[17px] pl-[20px]">
          <div className="w-[1040px] h-[40px] flex items-center justify-between gap-[226px]">
          {/* MVC HOME BUTTON */}
          <a
            href="/"
            className="bg-[#CBC6BD] h-[40px] rounded-[20px] px-[15px] flex items-center justify-center"
            aria-label="MVC Home"
          >
            <Image
              src="/assets/logo.svg"
              alt="MVC logo"
              width={65}
              height={27}
              priority
            />
          </a>

          {/* PAGES */}
          <nav className="flex gap-[20px] pt-[6px]">
            <a
              href="#modules"
              className={`${schibsted.className} font-semibold uppercase text-[16px] leading-[0.7em] text-[#CBC6BD]`}
            >
              modules
            </a>
            <a
              href="#pricing"
              className={`${schibsted.className} font-semibold uppercase text-[16px] leading-[0.7em] text-[#CBC6BD]`}
            >
              pricing
            </a>
          </nav>

          {/* LOG IN / SIGN UP */}
          <div className="flex justify-end gap-[5px]">
            <a
              href="/login"
              className={`${schibsted.className} h-[40px] rounded-[30px] px-[15px] flex items-center justify-center border border-[#CBC6BD] text-[#CBC6BD]`}
            >
              LOG IN
            </a>
            <a
              href="/signup"
              className={`${schibsted.className} h-[40px] rounded-[30px] px-[15px] flex items-center justify-center bg-[#CBC6BD] text-[#292826]`}
            >
              SIGN UP
            </a>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}