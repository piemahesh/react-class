import { useState } from "react";
import { Counter } from "../components/Counter";
import { Display } from "../components/Display";
import { Navbar } from "../components/Navbar";
import { HooksConcepts } from "./HooksConcepts";

export function Home() {
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(false);
  const sayHi = () => {
    console.log("lsadjflkasdjklf");
    setCount((prev) => prev + 1);
    // setCount(20);
  };
  return <HooksConcepts />;
}

/*
   <div style={{ position: "relative", display: "sticky", top: "0" }}>
      <Navbar />
      <Counter />
      <div>
        <button onClick={() => setVisible(true)}>user 1</button>
      </div>
      <Display
        isVisble={visible}
        age={24}
        data={"hi this is prop drilling"}
        name={"props concept"}
        myFunc={sayHi}
        count={count}
      />
      <Display
        age={654}
        data={"sdfasdf this is prop drilling"}
        name={"props sadfasd"}
      />
      <Display
        age={124}
        data={"hi this dfasdis prop drilling"}
        name={"props sdafasd"}
      />
    </div>
*/
