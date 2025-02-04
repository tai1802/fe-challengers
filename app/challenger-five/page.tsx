import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  const data: { question: string; answers: string }[] = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answers:
        "Frontend Mentor offfers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript. It's suitable for all levels and ideal for portfolio building",
    },
    {
      question: "Is Frontend Mentor free?",
      answers:
        "Frontend Mentor offers a free tier with access to a limited number of challenges. However, to unlock the full library of challenges and additional features like design files and private solutions, you'll need a paid subscription.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answers:
        "Absolutely! Frontend Mentor encourages you to showcase your completed projects in your portfolio. It's a great way to demonstrate your skills and experience to potential employers or clients.",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answers:
        "The Frontend Mentor Discord server is a highly active community where you can quickly get help when you're stuck on a challenge. You can post your questions in the dedicated #help channel, and fellow learners or mentors will be happy to assist you.",
    },
  ];

  return (
    <div className="w-full h-full bg-light-pink relative">
      <div className="bg-[url(/background-pattern-desktop.svg)] w-full h-1/3"></div>
      <FAQAccordion accordionData={data} />
    </div>
  );
}
