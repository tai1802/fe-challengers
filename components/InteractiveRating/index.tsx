"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

const InteractiveRating = () => {
  const [indexActive, setIndexActive] = useState<number>(-1);
  const [isSubmit, setSubmit] = useState<boolean>(false);

  const handleOnClick = (idx: number) => {
    setIndexActive(idx);
  };

  const onSubmit = () => setSubmit(true);
  return (
    <div className="max-w-96 w-full bg-neutral-dark-blue m-auto rounded-[32px] p-8">
      {isSubmit ? (
        <div className="flex flex-col gap-8">
          <Image src="/illustration-thank-you.svg" alt="" width={160} height={160} className="mx-auto"/>
          <p className="text-primary-orange bg-neutral-light-grey bg-opacity-10 py-2 px-2.5 rounded-full leading-[15px] w-fit mx-auto">
            You selected {indexActive + 1} out of 5
          </p>
          <div className=" flex flex-col gap-4 text-center">
            <p className="text-white text-3xl">Thank you!</p>
            <p className="text-white text-opacity-50">
              {
                "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
              }
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <div>
            <div className="p-4 rounded-full bg-neutral-light-grey bg-opacity-10 w-fit">
              <Image src="/icon-star.svg" alt="" width={16} height={16} />
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <p className="text-white text-3xl">How did we do?</p>
            <p className="text-white text-opacity-50">
              Please let us know how we did with your support request. All feedback is appreciated to help us improve
              our offering!
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
          <button
            className="py-3 w-full rounded-full bg-white uppercase font-bold leading-[15px] hover:bg-primary-orange"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveRating;
