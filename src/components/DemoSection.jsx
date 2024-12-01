import { DemoLevelContext } from "../contexts/DemoLevelContext";

const DemoSection = ({ level, children }) => {
  return (
    <section className="section">
      <DemoLevelContext.Provider value={level}>
        {children}
      </DemoLevelContext.Provider>
    </section>
  );
};

export default DemoSection;
