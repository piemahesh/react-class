export const Display = (props) => {
  const { data, name, age, count, ...rest } = props;

  console.log(rest.isVisble);
  if (!rest.isVisble) {
    return;
  }

  return (
    <div
      className={`disp-card ${count % 2 == 0 ? "success" : "danger"}`}
      //   style={{
      //     background: `${count % 2 == 0 ? "red" : "green"}`,
      //     border: "2px solid",
      //     marginTop: "10px",
      //   }}
    >
      <h1>{name}</h1>
      <h4>{age}</h4>
      <div>
        <p>{data}</p>
      </div>
      <button onClick={rest?.myFunc}>
        {rest?.count ? count : "$"}click me
      </button>
    </div>
  );
};
