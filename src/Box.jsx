import { Pen } from "./Pen";

function Box() {
  return (
    <div className="box">
      <Pen />
      <Pen />
      <Pen />
      <Pen />
      <Pen />
      <Pen />
      <Pen />
      <Pen />
      <MainBox />
      <MainBox />
      <MainBox />
      <MainBox />
    </div>
  );
}

export function MainBox() {
  return (
    <div className="main-box">
      <h1>hello</h1>
    </div>
  );
}

export default Box;
