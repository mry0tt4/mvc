"use client";
import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["600"] });

type Card = {
  img: string;
  title: string;
  chapters: string;
};

const cards: Card[] = [
  { img: "/assets/thumb-01.png", title: "Understanding Retention by Mario Joos", chapters: "05 chapters" },
  { img: "/assets/thumb-02.png", title: "Analyzing Retention Data by Mario Joos", chapters: "05 chapters" },
  { img: "/assets/thumb-03.png", title: "Segmentation, Structure, Exposition and Conflict by Mario Joos", chapters: "05 chapters" },
  { img: "/assets/thumb-04.png", title: "Visual Appeal by Mario Joos", chapters: "05 chapters" },
  { img: "/assets/thumb-07.png", title: "Wide Appeal by Mario Joos", chapters: "05 chapters" },
  { img: "/assets/thumb-08.png", title: "10x your partnerships by Justin Moore", chapters: "05 chapters" },
  // Using available assets to complete an 8-card grid
  { img: "/assets/thumb-03.png", title: "Segmentation, Structure, Exposition and Conflict by Mario Joos", chapters: "05 chapters" },
  { img: "/assets/thumb-04.png", title: "Visual Appeal by Mario Joos", chapters: "05 chapters" },
];

export default function CourseThumbnails() {
  return (
    <section className="w-full flex justify-center">
      {/* THUMBNAILS container per Figma: width 1080, 2x2 grid, gap 20 */}
      <div className="w-[1080px] grid grid-cols-2 gap-[20px]">
        {cards.map((card, idx) => (
          <article
            key={idx}
            className="w-full border border-[#292826] rounded-[15px] p-[20px] flex flex-col gap-[16px]"
            aria-label={`Course thumbnail ${idx + 1}`}
          >
            {/* Thumb with image and text overlay */}
            <div className="relative w-full h-[300px] rounded-[15px] overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 1080px) 530px"
                priority={idx < 2}
              />
              {/* Bottom gradient and title overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#151212] via-[#151212]/80 to-transparent" />
              <div className="absolute bottom-[12px] left-[12px] right-[12px]">
                <h3 className={`${schibsted.className} text-[#CBC6BD] text-[22px] leading-[1.1em] font-[600]`}>{card.title}</h3>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                {idx < 2 && (
                  <button className={`${schibsted.className} h-[36px] rounded-[30px] px-[12px] flex items-center justify-center bg-[#E46B4E] text-[#151212] font-[700] uppercase cursor-pointer hover:bg-[#E46B4E]/90 transition-colors`}>
                    REQUEST AN invite
                  </button>
                )}
                <button className={`${schibsted.className} h-[36px] rounded-[30px] px-[12px] flex items-center justify-center bg-[#CBC6BD] text-[#151212] font-[700] uppercase cursor-pointer hover:bg-[#CBC6BD]/90 transition-colors`}>
                  sign up to watch
                </button>
              </div>
              <div className="h-[36px] rounded-[30px] px-[12px] flex items-center justify-center bg-[#151212]">
                <span className={`${schibsted.className} text-white text-[12px] font-[700] uppercase`}>{card.chapters}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}