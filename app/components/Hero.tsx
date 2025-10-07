import { Schibsted_Grotesk } from "next/font/google";
import Image from "next/image";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center px-4 py-8">
      {/* Left button */}
      <div className="hidden lg:block relative w-20 h-20 mr-15 cursor-pointer hover:opacity-80 transition-opacity">
        <Image
          src="/assets/hero-left-button.svg"
          alt="Previous"
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>

      {/* Main Discord Event Banner */}
      <div className="relative w-full max-w-[714px] h-[357px] md:h-[357px] sm:h-[400px] bg-[#1E1919] rounded-[15px] border border-gradient-to-br from-[#282625] to-[#1B1918] overflow-hidden">
        {/* Mario Portrait */}
        <div className="absolute right-0 top-[-5px] w-[275px] h-[412px] md:w-[275px] md:h-[412px] sm:w-[200px] sm:h-[300px] z-10">
          <Image
            src="/assets/mario.png"
            alt="Mario Portrait"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 275px"
          />
          {/* Gradient overlay on Mario image */}
          <div className="absolute bottom-0 left-0 right-0 h-[234px] sm:h-[150px] bg-gradient-to-t from-[#1E1919] via-[#1E1919]/80 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="absolute left-[34px] md:left-[34px] sm:left-[20px] top-[31px] sm:top-[20px] z-20 flex flex-col gap-[30px] sm:gap-[20px]">
          {/* Logo and Live Section */}
          <div className="flex items-center gap-[20px] sm:gap-[15px] flex-wrap">
            {/* MVC 3D Logo */}
            <div className="flex flex-col items-end gap-[3px] pt-[9px]">
              <div className="relative w-[214px] h-[55px] md:w-[214px] md:h-[55px] sm:w-[160px] sm:h-[41px]">
                <Image
                  src="/assets/mvc-logo-3d.png"
                  alt="MVC 3D Logo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 160px, 214px"
                />
              </div>
              <span className={`${schibsted.className} text-[#CBC6BD]/40 text-[11.65px] sm:text-[10px] font-[450] leading-[0.85em] uppercase tracking-wide text-right`}>
                (beta)
              </span>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-[7.66px] sm:gap-[6px] px-[17.5px] sm:px-[12px] py-[17.5px] sm:py-[12px] border border-[#CBC6BD] rounded-[4.38px]">
              <div className="relative w-[10.94px] h-[10.94px] sm:w-[8px] sm:h-[8px]">
                <Image
                  src="/assets/live-icon.svg"
                  alt="Live Icon"
                  fill
                  sizes="(max-width: 640px) 8px, 11px"
                />
              </div>
              <span className={`${schibsted.className} text-[#CBC6BD] text-[16.41px] sm:text-[14px] font-[450] leading-[1em] uppercase tracking-[0.2em] text-center`}>
                live
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-[15px] sm:gap-[12px]">
            {/* Masterclass Badge */}
            <div className="inline-flex items-center justify-center px-[12px] py-[12px] sm:px-[10px] sm:py-[8px] border border-[#CBC6BD] rounded-[48.85px] w-fit">
              <span className={`${schibsted.className} text-[#CBC6BD] text-[16px] sm:text-[14px] font-[450] leading-[1em] text-center`}>
                Masterclass
              </span>
            </div>

            {/* Title */}
            <div className="w-[435.84px] max-w-full sm:max-w-[280px] md:max-w-[380px]">
              <h1 className={`${schibsted.className} text-[#CBC6BD] text-[36px] md:text-[32px] sm:text-[24px] font-[500] leading-[1.1em] text-left`}>
                Breakdown of the YouTube Algorithm from Mario Joos
              </h1>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex items-center gap-[20px] sm:gap-[15px] flex-wrap">
            {/* Date and Time Info */}
            <div className="flex flex-col gap-[10px] sm:gap-[8px]">
              <span className={`${schibsted.className} text-[#CBC6BD] text-[20px] sm:text-[16px] font-[500] leading-[0.85em] uppercase text-left`}>
                May 8
              </span>
              <span className={`${schibsted.className} text-[#CBC6BD] text-[20px] sm:text-[16px] font-[500] leading-[0.85em] text-left`}>
                1PM ET
              </span>
            </div>

            {/* RSVP Button */}
            <div className="flex items-center justify-center px-[15px] py-[15px] sm:px-[12px] sm:py-[10px] bg-[#CBC6BD] rounded-[30px] cursor-pointer hover:bg-[#CBC6BD]/90 transition-colors">
              <span className={`${schibsted.className} text-[#151212] text-[20px] sm:text-[16px] font-[700] leading-[1em] tracking-[-0.01em] uppercase text-center`}>
                rsvp now
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right button */}
      <div className="hidden lg:block relative w-20 h-20 ml-15 cursor-pointer hover:opacity-80 transition-opacity">
        <Image
          src="/assets/hero-right-button.svg"
          alt="Next"
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>
    </section>
  );
}