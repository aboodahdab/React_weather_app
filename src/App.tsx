import { useState } from "react";
import SearchComponent from "./components/SearchComponents";

function App() {
  const [activeBtn, setActiveBtn] = useState(true);
  const [data, setData] = useState({});

  return (
    <>
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="blob-1 absolute rounded-full blur-[90px] w-[560px] h-[560px] bg-[rgba(0,190,210,0.22)] -top-[140px] -left-[100px]"></div>

        <div className="blob-2 absolute rounded-full blur-[90px] w-[480px] h-[480px] bg-[rgba(110,40,255,0.28)] -bottom-[80px] -right-[80px]"></div>
        <div className="blob-3 absolute rounded-full blur-[90px] w-[380px] h-[380px] bg-[rgba(0,230,160,0.13)] top-[45%] left-[45%]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center px-5   pt-[52px] pb-11">
        <SearchComponent
          data={data}
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          setData={setData}
        />
      </div>
    </>
  );
}

export default App;
