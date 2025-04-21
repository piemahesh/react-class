import { useEffect, useRef, useState } from "react";

export const HooksConcepts = () => {
  //   const userRef = useRef(null);
  //   const [username, setUserName] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleSubmit = (e) => {
  //     console.log(userRef.current.value);
  //     console.log({ username, password });
  //     e.preventDefault();
  //   };

  //   // {"username":"ocean","password":"ocean@1234"}
  //   return (
  //     <form action="">
  //       <label htmlFor="username">username</label>
  //       <input
  //         ref={userRef}
  //         onChange={(e) => {
  //           setUserName(e.target.value);
  //         }}
  //         type="text"
  //         id="username"
  //         placeholder="Enter user name"
  //       />
  //       <label htmlFor="password">password</label>
  //       <input
  //         onChange={(e) => {
  //           setPassword(e.target.value);
  //         }}
  //         type="text"
  //         id="password"
  //         placeholder="Enter user password"
  //       />
  //       <button onClick={handleSubmit}>submit</button>
  //     </form>
  //   );
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, []);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
};

/* 
Important react hooks
* useState
* useEffect
* useRef
* useCallback
* useContext
*/

/*
memo
*/

/*

<parent>

<display>
<Child/>
</display>

</parent>

*/

/* 
===concepts
const [name, setName] = useState("ocean");
  let count = 1;
  useEffect(() => {
    setInterval(() => {
      setName(count);
      count++;
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("ocean Academy")}>change name</button>
    </div>
  );


*/
