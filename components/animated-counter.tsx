"use client";

import CountUp from "react-countup";

interface IAnimatedCounter {
  amount: number;
}
export const AnimatedCounter = ({ amount }: IAnimatedCounter) => {
  return (
    <div className="w-full">
      <CountUp end={amount} prefix="$" decimal="," decimals={2} />
    </div>
  );
};
