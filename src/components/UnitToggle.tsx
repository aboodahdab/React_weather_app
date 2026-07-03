import { useEffect } from "react";
import transformFToC from "../functions/transformFToC";

interface Props {
  activeBtn: boolean;
  setActiveBtn: (celsuis: boolean) => void;
  temp: any;
  setTemp: (temp: number) => void;
  setFeelsLikeTemp: (temp: number) => void;
  FeelsLikeTemp: number;
}

export default function UnitToggle({
  setTemp,

  activeBtn,
  setActiveBtn,
  temp,
  setFeelsLikeTemp,
  FeelsLikeTemp,
}: Props) {
  console.log("temp of you", temp);
  return (
    <>
      <div className="inline-flex items-center bg-white/5 border border-white/[0.08] rounded-full p-1 mb-6">
        <button
          className={
            activeBtn === true
              ? "px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer bg-gradient-to-br from-[#00c8b8] to-[#0080ff] text-white transition-all"
              : "px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer bg-none from-[#00c8b8] to-[#0080ff] text-white transition-all"
          }
          onClick={() => {
            if (activeBtn === true) {
              return;
            }
            setActiveBtn(true);
            
            const fahrenhitTemp = transformFToC(true, temp);
            const feelsLike = transformFToC(true, FeelsLikeTemp);
            // console.log(fahrenhitTemp, "that in fahrenhit");
            setTemp(fahrenhitTemp);
            setFeelsLikeTemp(feelsLike);
            // I don't like fahrenhit
          }}
        >
          °F
        </button>
        <button
          className={
            activeBtn === false
              ? "px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer bg-gradient-to-br from-[#00c8b8] to-[#0080ff] text-white transition-all"
              : "px-4 py-1.5 rounded-full text-sm font-medium  cursor-pointer bg-none from-[#00c8b8] to-[#0080ff] text-white transition-all"
          }
          onClick={() => {
            if (activeBtn === false) {
              return;
            }
            setActiveBtn(false);
        
            const celsuisTemp = transformFToC(false, temp);
            const feelsLike = transformFToC(false, FeelsLikeTemp);
            console.log(celsuisTemp, "it's celsuis");
            setFeelsLikeTemp(feelsLike);
            setTemp(celsuisTemp);
          }}
        >
          °C
        </button>
      </div>
    </>
  );
}
