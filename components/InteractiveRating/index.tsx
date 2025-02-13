"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

const InteractiveRating = () => {
  const [indexActive, setIndexActive] = useState<number>(-1);
  const handleOnClick = (idx: number) => {
    setIndexActive(idx);
  };

  return (
    <div className="max-w-96 w-full bg-neutral-dark-blue m-auto rounded-[32px] flex flex-col gap-8 p-8">
      <div>
        <div className="p-4 rounded-full bg-neutral-light-grey bg-opacity-10 w-fit">
          <Image src="/icon-star.svg" alt="" width={16} height={16} />
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <p className="text-white text-3xl">How did we do?</p>
        <p className="text-white text-opacity-50">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our
          offering!
        </p>
      </div>
      <div className="flex flex-row justify-between">
        {Array.from({ length: 5 })?.map((_, index) => (
          <Button
            key={index}
            label={`${index + 1}`}
            onClick={() => handleOnClick(index)}
            isActive={indexActive === index}
          />
        ))}
      </div>
      <button className="py-3 w-full rounded-full bg-white uppercase font-bold leading-[15px] hover:bg-primary-orange">Submit</button>
    </div>
  );
};

export default InteractiveRating;
