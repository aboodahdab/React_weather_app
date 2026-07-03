interface Props {
  city: string;
}
export default function CityNotFound({ city }: Props) {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="blob-1 absolute rounded-full blur-[90px] w-[560px] h-[560px] bg-[rgba(0,190,210,0.22)] -top-[140px] -left-[100px]"></div>
        <div className="blob-2 absolute rounded-full blur-[90px] w-[480px] h-[480px] bg-[rgba(110,40,255,0.28)] -bottom-[80px] -right-[80px]"></div>
        <div className="blob-3 absolute rounded-full blur-[90px] w-[380px] h-[380px] bg-[rgba(0,230,160,0.13)] top-[45%] left-[45%]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-5">
        {/* <!-- Error Card --> */}
        <div className="flex flex-col items-center justify-center text-center bg-white/5 border border-white/[0.08] rounded-3xl px-10 py-12 backdrop-blur-md max-w-sm w-full">
          <span className="text-5xl mb-5">🌫️</span>
          <p className="text-white text-lg font-medium mb-2">City not found</p>
          <p className="text-white/40 text-sm">
            We couldn't find any results for {city}
            <span className="text-white/70 font-medium">"new california"</span>.
            Check the spelling and try again.
          </p>
        </div>
      </div>
    </>
  );
}
