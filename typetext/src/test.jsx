import { useState } from "react";

export default function Test() {
  const [name, setName] = useState("");

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" w-full h-full flex flex-col justify-center items-center gap-y-20">
        <div className="text-fuchsia-600 font-mono font-bold text-xl text-center overflow-hidden overflow-scroll break-words h-40 w-96 scroll-m-4">
          {<h2>Type Something: {name}</h2>}
        </div>
        <div
          className=" h-36 px-80 border ring-2 ring-slate-600 rounded-md
          "
        >
          <form
            action=""
            className=" h-48 flex justify-center flex-col items-center gap-2"
          >
            <h1 className="text-sky-500 font-bold text-xl ">Text App</h1>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" placeholder:italic py-2 pl2 placeholder:text-slate-400 w-60 bg-green-100 text-center outline-none border border-gray-200 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-200 focus:ring-1 sm:text-sm"
              type="text-area"
              placeholder="Type somethings here"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
