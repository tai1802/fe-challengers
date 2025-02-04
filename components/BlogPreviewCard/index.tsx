import Image from "next/image";

const BlogPreviewCard = () => {
  return (
    <>
      <div className="p-5 m-auto bg-white rounded-xl shadow-blog max-w-[376px] flex flex-col gap-6">
        <Image src="/illustration-article.svg" alt="" width={336} height={201} className="rounded-xl" />
        <div className="flex flex-col gap-4">
          <p className="px-2 py-1 rounded-md bg-yellow-default w-fit font-bold text-gray-950 text-sm">Learning</p>
          <p className="text-gray-500 font-bold text-sm">Published 21 Dec 2023</p>
          <p className="text-gray-950 text-xl font-bold">HTML & CSS foundations</p>
          <p className="text-gray-500">
            These languages are the backbone of every website, defining structure, content, and presentation
          </p>
          <div className="flex flex-row gap-2">
            <Image src="/avatar-blog-preview.png" alt="" width={40} height={40} />
            <p className="text-gray-950 my-auto font-bold text-base">Greg Hooper</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPreviewCard;
