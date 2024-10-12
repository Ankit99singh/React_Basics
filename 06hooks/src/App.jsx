import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [isNum, SetIsNum] = useState(false);
  const [isSpecialChar, SetIsSpecialCase] = useState(false);
  const [password, setPassword] = useState("");
  const passWordReference = useRef(null);
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNum) str += "0123456789";
    if (isSpecialChar) str += "!@#$%^&*(){}";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, isNum, isSpecialChar, setPassword]);

  const copyPassword = useCallback(() => {
    passWordReference.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, isNum, isSpecialChar, passGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-400">
      <h1 className="text-white text-center">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passWordReference}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0"
          onClick={copyPassword}
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length : {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={isNum}
            id="isNum"
            onChange={() => {
              SetIsNum(!isNum);
            }}
          />
          <label htmlFor="isNum">Numbers</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={isSpecialChar}
            id="isSpecialChar"
            onChange={() => {
              SetIsSpecialCase(!isSpecialChar);
            }}
          />
          <label htmlFor="isSpecialChar">characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
