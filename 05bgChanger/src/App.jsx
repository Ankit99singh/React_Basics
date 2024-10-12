import { useState } from "react";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="bg-red text-white outline-none px-4 rounded-3xl"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green text-white outline-none px-4 rounded-3xl"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="bg-yellow text-white outline-none px-4 rounded-3xl"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="bg-blue text-white outline-none px-4 rounded-3xl"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            className="bg-pink text-white outline-none px-4 rounded-3xl"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            pink
          </button>
          <button
            className="bg-black text-white outline-none px-4 rounded-3xl"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            black
          </button>
          <button
            className="bg-brown text-white outline-none px-4 rounded-3xl"
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")}
          >
            brown
          </button>
          <button
            className="bg-orange text-white outline-none px-4 rounded-3xl"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
