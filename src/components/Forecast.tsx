// interface Props {
//   minTemp: number;
//   maxTemp: number;
// }
// export default function Forecast({ minTemp, maxTemp }: Props) {
//   return (
//     <>
//       <div className="w-full max-w-[700px]">
//         <p className="text-[11px] text-white/30 tracking-[2.5px] uppercase text-center mb-4">
//           7-Day Forecast
//         </p>
//         <div className="grid grid-cols-7 gap-2">
//           <div className="flex flex-col items-center gap-2 bg-[rgba(0,200,180,0.1)] border border-[rgba(0,200,180,0.35)] rounded-[22px] py-[18px] px-1.5 backdrop-blur-md cursor-default hover:-translate-y-1 transition-transform">
//             <span className="text-[11px] font-medium text-[rgba(0,210,185,0.9)]">
//               Today
//             </span>
//             <span className="text-[26px]">⛅</span>
//             <span className="text-sm font-medium text-white">72°</span>
//             <span className="text-xs text-white/30">60°</span>
//           </div>

import transformFToC from "../functions/transformFToC";

//           <div className="flex flex-col items-center gap-2 bg-white/5 border border-white/[0.08] rounded-[22px] py-[18px] px-1.5 backdrop-blur-md cursor-default hover:bg-white/[0.09] hover:border-white/[0.15] hover:-translate-y-1 transition-all">
//             <span className="text-[11px] font-medium text-white/45">Thu</span>
//             <span className="text-[26px]">🌧</span>
//             <span className="text-sm font-medium text-white">65°</span>
//             <span className="text-xs text-white/30">52°</span>
//           </div>

//           <div className="flex flex-col items-center gap-2 bg-white/5 border border-white/[0.08] rounded-[22px] py-[18px] px-1.5 backdrop-blur-md cursor-default hover:bg-white/[0.09] hover:border-white/[0.15] hover:-translate-y-1 transition-all">
//             <span className="text-[11px] font-medium text-white/45">Fri</span>
//             <span className="text-[26px]">☀️</span>
//             <span className="text-sm font-medium text-white">70°</span>
//             <span className="text-xs text-white/30">57°</span>
//           </div>

//           <div className="flex flex-col items-center gap-2 bg-white/5 border border-white/[0.08] rounded-[22px] py-[18px] px-1.5 backdrop-blur-md cursor-default hover:bg-white/[0.09] hover:border-white/[0.15] hover:-translate-y-1 transition-all">
//             <span className="text-[11px] font-medium text-white/45">Sat</span>
//             <span className="text-[26px]">🌤</span>
//             <span className="text-sm font-medium text-white">71°</span>
//             <span className="text-xs text-white/30">59°</span>
//           </div>

//           <div className="flex flex-col items-center gap-2 bg-white/5 border border-white/[0.08] rounded-[22px] py-[18px] px-1.5 backdrop-blur-md cursor-default hover:bg-white/[0.09] hover:border-white/[0.15] hover:-translate-y-1 transition-all">
//             <span className="text-[11px] font-medium text-white/45">Sun</span>
//             <span className="text-[26px]">⛅</span>
//             <span className="text-sm font-medium text-white">69°</span>
//             <span className="text-xs text-white/30">56°</span>
//           </div>

//           <div className="flex flex-col items-center gap-2 bg-white/5 border border-white/[0.08] rounded-[22px] py-[18px] px-1.5 backdrop-blur-md cursor-default hover:bg-white/[0.09] hover:border-white/[0.15] hover:-translate-y-1 transition-all">
//             <span className="text-[11px] font-medium text-white/45">Mon</span>
//             <span className="text-[26px]">☀️</span>
//             <span className="text-sm font-medium text-white">75°</span>
//             <span className="text-xs text-white/30">60°</span>
//           </div>

//           <div className="flex flex-col items-center gap-2 bg-white/5 border border-white/[0.08] rounded-[22px] py-[18px] px-1.5 backdrop-blur-md cursor-default hover:bg-white/[0.09] hover:border-white/[0.15] hover:-translate-y-1 transition-all">
//             <span className="text-[11px] font-medium text-white/45">Tue</span>
//             <span className="text-[26px]">🌤</span>
//             <span className="text-sm font-medium text-white">72°</span>
//             <span className="text-xs text-white/30">58°</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
interface Props {
  // it contains max and min temp that are getting displayed
  data: any;
  today_max_temp: number;
  today_min_temp: number;
  activeBtn: boolean;
}

export default function Forecast({
  data,
  today_max_temp,
  today_min_temp,
  activeBtn,
}: Props) {
  console.log(data);
  const daily = data.daily;
  const min_temp = daily["temperature_2m_min"];
  const max_temp = daily["temperature_2m_max"];
  const today = new Date();
  function changeTemp(temp:number) {
    if (activeBtn === false) {
      return transformFToC(activeBtn, temp);
    }
    return null;
  }
  return (
    <>
      <>
        <div className="w-full max-w-[700px]">
          <p className="text-[11px] text-white/30 tracking-[2.5px] uppercase text-center mb-4">
            7-Day Forecast
          </p>

          <div className="grid grid-cols-7 gap-2">
            <div className="flex flex-col items-center gap-2 bg-[rgba(0,200,180,0.1)] border border-[rgba(0,200,180,0.35)] rounded-[22px] py-[18px] px-1.5 backdrop-blur-md cursor-default hover:-translate-y-1 transition-transform">
              <span className="text-[11px] font-medium text-[rgba(0,210,185,0.9)]">
                Today
              </span>
              <span className="text-[26px]">⛅</span>
              <span className="text-sm font-medium text-white">
                {activeBtn === true
                  ? today_max_temp
                  : transformFToC(activeBtn, today_max_temp)}
                °
              </span>
              <span className="text-xs text-white/30">
                {activeBtn === true
                  ? today_min_temp
                  : transformFToC(activeBtn, today_min_temp)}
                °
              </span>
            </div>
            {min_temp.map((data: number, index: number) => {
              let rounded_min_temp = Math.round(data);
              let rounded_max_temp = Math.round(max_temp[index]);
              const max_temp2 = changeTemp(rounded_max_temp);
              const min_temp = changeTemp(rounded_min_temp);
              if (max_temp2) {
                rounded_max_temp = max_temp2;
              }
              if (min_temp) {
                rounded_min_temp = min_temp;
              }
              const futureDate = new Date(today);
              futureDate.setDate(today.getDate() + index);
              const dayName = futureDate.toLocaleString("en-US", {
                weekday: "short",
              });

              return (
                <>
                  <div className="flex flex-col items-center gap-2 bg-white/5 border border-white/[0.08] rounded-[22px] py-[18px] px-1.5 backdrop-blur-md cursor-default hover:bg-white/[0.09] hover:border-white/[0.15] hover:-translate-y-1 transition-all">
                    <span className="text-[11px] font-medium text-white/45 ">
                      {dayName}
                    </span>
                    <span className="text-[26px]">⛅</span>
                    <span className="text-sm font-medium text-white">
                      {rounded_max_temp}°
                    </span>
                    <span className="text-xs text-white/30">
                      {rounded_min_temp}°
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
}
