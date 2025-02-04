const ResultsSummary = () => {
  return (
    <div className="bg-white shadow-lg m-auto max-w-[640px]">
      <div className="bg-gradient-to-t from-gradients-light-royal-blue from-50% via-gradients-light-slate-blue via-100% max-w-80 h-96 rounded-xl p-8 flex flex-col gap-5 min-w-60">
        <p>Your Result</p>
        <div className="p-6 rounded-full bg-gradient-to-b from-gradients-violet-blue from-50% via-gradients-persian-blue via-100% min-w-32 min-h-32 flex mx-auto">
          <div className="m-auto">
            <p className="text-white text-5xl">76</p>
            <p>of 100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;
