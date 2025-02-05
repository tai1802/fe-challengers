import SummaryItem from "./SummaryItem";

const ResultsSummary = () => {
  return (
    <div className="bg-white shadow-2xl m-auto max-w-xl rounded-3xl flex flex-row">
      <div className="bg-gradient-to-t from-gradients-light-royal-blue from-35% via-gradients-light-slate-blue via-100% max-w-80 h-96 rounded-3xl p-8 flex flex-col gap-5 min-w-72">
        <p className="text-neutral-light-lavender text-center text-lg">Your Result</p>
        <div className="p-6 rounded-full bg-gradient-to-b from-gradients-violet-blue from-20% via-gradients-persian-blue via-100% min-w-32 min-h-32 flex mx-auto">
          <div className="m-auto">
            <p className="text-white text-5xl">76</p>
            <p className="text-neutral-light-lavender text-sm text-center text-opacity-45">of 100</p>
          </div>
        </div>
        <p className="text-3xl text-neutral-pale-blue text-center">Great</p>
        <p className="text-center text-neutral-light-lavender text-base">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className="min-w-72 p-8 space-y-6">
        <p className="text-xl font-extrabold text-neutral-dark-gray-blue">Summary</p>
        <div className="flex flex-col gap-4">
          <SummaryItem iconPath="/icon-reaction.svg" name="Reaction" score={80} color="light-red" />
          <SummaryItem iconPath="/icon-memory.svg" name="Memory" score={92} color="orangey-yellow" />
          <SummaryItem iconPath="/icon-verbal.svg" name="Verbal" score={61} color="green-teal" />
          <SummaryItem iconPath="/icon-visual.svg" name="Visual" score={72} color="cobalt-blue" />
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;
