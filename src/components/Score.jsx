/* eslint-disable react/prop-types */
const Score = ({ score }) => {
  return (
    <div className="text-[21px] border-2 border-white p-3 flex justify-between items-center ">
      <h1 className="text-white font-bold font-barlow  leading-[16px] uppercase md:text-[40px] md:leading-[32px]">
        Rock <br /> Paper <br /> Scissors
      </h1>
      <div className="bg-white rounded-md flex flex-col text-center font-barlow py-3 px-7 md:py-6 md:px-10">
        <span className="font-semibold text-[10px] text-blue tracking-[1.56px]  md:text-[16px]">
          score
        </span>
        <span className="font-bold text-[40px]  leading-10 text-grey md:text-[64px] ">
          {score}
        </span>
      </div>
    </div>
  );
};

export default Score;
