import Image from "next/image";

const QRCode = () => {
  return (
    <>
      <section className="bg-slate-300 w-screen h-screen flex">
        <div className="bg-white max-w-80 w-80 min-h-[499px] max-h-[499px] m-auto p-4 rounded-[20px] shadow-card space-y-4">
          <Image src="/qr.png" width={288} height={288} alt="" />
          <div className="px-4 text-center space-y-4">
            <p className="font-bold text-[22px] leading-[26px] text-slate-900">
              Improve your front-end skills by building projects
            </p>
            <p className="text-[15px] leading-[21px] text-slate-500 tracking-[0.2px]">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default QRCode;
