import { useState, useEffect } from "react";

const randomize = (floor: boolean, min: number, max: number): number => {
  const randomNumber = Math.random() * (max - min + 1) + min;
  const result = floor ? Math.floor(randomNumber) : randomNumber;
  return result;
};

const useRandomBetween = (floor = true, min = 0, max = 1): number => {
  const [result, setResult] = useState(randomize(floor, min, max));

  useEffect(() => {
    const randomNumber = randomize(floor, min, max);
    setResult(randomNumber);
  }, [min, max, floor]);

  return result;
};

export default useRandomBetween;
