import { useState } from "react";

export default function BgChanger() {
    const [color, setcolor] = useState("olive");
  return (
    < >
       <div
        className="w-full h-screen duration-200 text-red"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:'red'}}
              onClick={() => {
                setcolor("red");
              }}
            >
              red
            </button>
            <br />
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:'blue'}}
              onClick={() => {
                setcolor("blue");
              }}
            >
              blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:'yellow'}}
              onClick={() => {
                setcolor("yellow");
              }}
            >
              yellow
            </button>
            <button
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor:'black'}}
              onClick={() => {
                setcolor("black");
              }}
            >
              black
            </button>
          </div>
        </div>
      </div>


    </>
  )
}
