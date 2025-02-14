import Image from "next/image";

const NFTPreviewCard = () => {
  return (
    <>
      <div className="w-full max-w-80 rounded-xl bg-dark-card m-auto p-5 flex flex-col gap-5">
        <div className="rounded-xl group relative w-[280px] h-[280px] hover:cursor-pointer">
          <div className="w-full h-full rounded-xl group-hover:bg-primary-cyan z-10 absolute group-hover:opacity-40"></div>
          <div className="w-full h-full absolute z-20 invisible group-hover:visible flex">
            <Image src="/icon-view.svg" alt="" width={40} height={40} className="z-20 m-auto" />
          </div>
          <Image src="/image-equilibrium.jpg" alt="" width={280} height={280} className="rounded-xl" />
        </div>
        <p className="text-white hover:text-primary-cyan cursor-pointer">Equilibrium #3429</p>
        <p className="text-primary-soft-blue text-opacity-80 text-base font-light">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex flex-row justify-between text-base">
          <div className="flex gap-2">
            <Image src="/icon-ethereum.svg" alt="" width={14} height={14} />
            <p className="text-primary-cyan">0.041 ETH</p>
          </div>
          <div className="flex gap-2">
            <Image src="/icon-clock.svg" alt="" width={16} height={16} className="max-h-4 m-auto" />
            <p className="text-primary-soft-blue text-opacity-80 text-base">3 days left</p>
          </div>
        </div>
        <div className="border-b w-full border-dark-line"></div>
        <div className="flex gap-4">
          <div className="rounded-full p-0.5 bg-white w-fit h-fit">
            <Image src="/image-avatar.png" alt="" width={36} height={36} className="" />
          </div>
          <p className="text-primary-soft-blue text-opacity-80 text-base my-auto">
            Creation of <span className="cursor-pointer text-white hover:text-primary-cyan">Jules Wyvern</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default NFTPreviewCard;
