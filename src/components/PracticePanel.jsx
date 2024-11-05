const PracticePanel = ({ title, children, isActive, onActive }) => {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <></>}
      <button onClick={onActive}>{isActive ? "Hide" : "Show"}</button>
    </section>
  );
};

export default PracticePanel;
