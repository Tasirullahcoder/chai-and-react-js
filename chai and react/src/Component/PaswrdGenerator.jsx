import { useCallback, useState,useEffect } from "react";

export default function PaswrdGenerator() {
  const [length, setlength] = useState("");
  const [numberallowed, setnumberallowed] = useState(true);
  const [characterallowed, setcharacterallowed] = useState(false);
  const [passward, setpasward] = useState("");

  const passwardgenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numberallowed) str += "0123456789";
    if (characterallowed) str += "@#$%^&*()?{}<>";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpasward(pass);
  }, [length, numberallowed, characterallowed, setpasward]);

  useEffect(() => {
    passwardgenerator()
  }, [length ,passwardgenerator,numberallowed,characterallowed])
  
  return (
    <div className="bg-gray-600">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 ">
        <h1 className="text-white text-center my-3">passward generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={passward}
            className="outline-none w-full py-1 px-3"
            placeholder="passward"
            readOnly
          />
          <button className="outlin-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={numberallowed}
              id="numberallowed"
              onChange={() => {
                setnumberallowed((pre) => !pre);
              }}
            />
            <label htmlFor="numberinput">number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={characterallowed}
              id="characterallowed"
              onChange={() => {
                setnumberallowed((pre) => !pre);
              }}
            />
            <label htmlFor="charectorinput">charactor</label>
          </div>
        </div>
      </div>
    </div>
  );
}
