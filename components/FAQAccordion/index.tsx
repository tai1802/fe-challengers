"use client";

import Image from "next/image";
import { useState } from "react";
import Accordion from "./Accordion";
import { twMerge } from "tailwind-merge";

interface IProps {
  accordionData?: { question: string; answers: string }[];
}

const FAQAccordion: React.FC<IProps> = ({ accordionData = [] }) => {
  const [indexExpand, setIndexExpand] = useState<number>(0);

  return (
    <section className="w-full h-full absolute top-0 flex">
      <div className="mx-auto px-8 mt-[21vh]">
        <div className="bg-white rounded-xl p-8 max-w-lg sm:min-w-[512px] min-h-[512px] h-fit w-full">
          <div className="w-full flex gap-3">
            <Image src="/icon-star.svg" alt="icon star" width={24} height={24} />
            <p className="text-3xl font-bold">FAQs</p>
          </div>
          <div className="flex flex-col mt-8">
            {accordionData?.map((item, index) => (
              <Accordion
                key={index}
                isExpand={indexExpand === index}
                title={item?.question}
                content={item?.answers}
                className={twMerge(
                  "text-sm transition-all duration-200 ease-out transform translate-y-[-10px]",
                  indexExpand === index ? "translate-y-0" : "translate-y-[-10px]",
                  index < accordionData?.length - 1 ? "border-b pb-4" : ""
                )}
                handleChange={(value) => (value ? setIndexExpand(index) : setIndexExpand(-1))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
