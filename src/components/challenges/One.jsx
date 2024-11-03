const Clock = (props) => {
  const color = props.color;

  return <h1 style={{ color }}>{props.time}</h1>;
};

export default Clock;
