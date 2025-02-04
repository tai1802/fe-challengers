import Image from "next/image";
import ButtonLink from "./ButtonLink";

const SocialLinksProfile = () => {
  const links: { label: string; url: string }[] = [
    {
      label: "GitHub",
      url: "https://github.com/",
    },
    {
      label: "Frontend Mentor",
      url: "/",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/",
    },
    {
      label: "Twitter",
      url: "https://x.com",
    },
    {
      label: "Instagram",
      url: "http://instagram.com/",
    },
  ];

  return (
    <>
      <div className="bg-grey-800 m-auto p-5 rounded-[10px] text-white">
        <Image src="/avatar-jessica.jpeg" width={112} height={112} alt="" className="rounded-full mx-auto" />
        <p className="mt-[30px] text-3xl w-full text-center">Jessica Randall</p>
        <p className="w-full text-center mt-3 text-green-default">London, United Kingdom</p>
        <p className="mb-6 mt-5">{"Front-end developer and avid reader."}</p>
        <div className="w-full flex flex-col gap-5">
          {links?.map((item, index) => (
            <ButtonLink key={index} label={item?.label} url={item?.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialLinksProfile;
