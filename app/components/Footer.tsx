import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400","700"] });

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-[20px] pb-[40px]">
      {/* Outer box per Figma: 1080x225, padding 35px 25px, radius 15, border MVC Grey */}
      <div className="relative w-[1080px] rounded-[15px] border border-[#292826] px-[25px] py-[35px] bg-transparent">
        {/* Row layout: gap 197px */}
        <div className="flex flex-row items-start justify-between gap-[197px]">
          {/* Left column: LOGO group + socials + copyright */}
          <div className="flex flex-col gap-[20px]">
            {/* Logo block exported from Figma */}
            <div className="flex flex-col gap-[10px]">
              <div className="relative w-[200px] h-[52px]">
                <Image
                  src="/assets/footer-logo.svg"
                  alt="Million View Club logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1080px) 200px"
                  priority
                />
              </div>
              {/* Tagline: A private network for ambitious creators. */}
              <div className="w-[286px]">
                <p className={`${schibsted.className} m-0 text-[#CBC6BD] text-[12px] leading-[1.2em]`}>A private network for ambitious creators.</p>
              </div>
            </div>

            {/* Social icons exported from Figma */}
            <div className="relative w-[110px] h-[19px]">
              <Image
                src="/assets/footer-socials.svg"
                alt="Social links"
                fill
                className="object-contain"
                sizes="110px"
              />
            </div>

            {/* Copyright */}
            <p className={`${schibsted.className} m-0 text-[#CBC6BD] text-[10px] leading-[1em] text-center`}>
              ©2024 Everbloom Creative Inc | Marator Media Group | All Rights Reserved
            </p>
          </div>

          {/* Right column: Nav (Newsletter + Support) */}
          <div className="flex flex-row justify-center gap-[43px]">
            {/* Newsletter */}
            <div className="flex flex-col gap-[25px]">
              <h4 className={`${schibsted.className} text-[#CBC6BD] text-[14px] font-[700] leading-[1em]`}>Subscribe to our newsletter</h4>
              <div className="flex items-center gap-[10px]">
                <input
                  type="email"
                  placeholder="Email address"
                  className={`${schibsted.className} w-[209px] h-[36px] rounded-[30px] px-[12px] bg-transparent border border-[#CBC6BD] text-[#CBC6BD] placeholder-[#CBC6BD]/60 focus:outline-none focus:ring-2 focus:ring-[#CBC6BD]/60`}
                  aria-label="Email address"
                />
                <button
                  className={`${schibsted.className} h-[36px] rounded-[30px] px-[15px] flex items-center justify-center bg-[#CBC6BD] text-[#151212] font-[700] uppercase hover:bg-[#CBC6BD]/90 transition-colors cursor-pointer`}
                >
                  sign up
                </button>
              </div>
              {/* Legal */}
              <div className="w-[343px]">
                <p className={`${schibsted.className} m-0 text-[#CBC6BD] text-[12px] leading-[1.2em]`}>
                  By submitting your email address, you agree to receive MVC’s monthly newsletter. For more information, please read our privacy policy. You can always withdraw your consent.
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-[25px]">
              <h4 className={`${schibsted.className} text-[#CBC6BD] text-[14px] font-[700] leading-[1em]`}>Support</h4>
              <div className="flex flex-col gap-[15px]">
                <a href="#press" className={`${schibsted.className} text-[#CBC6BD] text-[14px] leading-[1em] hover:opacity-80`}>Press</a>
                <a href="#terms" className={`${schibsted.className} text-[#CBC6BD] text-[14px] leading-[1em] hover:opacity-80`}>Terms of Use</a>
                <a href="#privacy" className={`${schibsted.className} text-[#CBC6BD] text-[14px] leading-[1em] hover:opacity-80`}>Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}