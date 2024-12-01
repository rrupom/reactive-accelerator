import { useContext } from "react";
import { DemoLevelContext } from "../contexts/DemoLevelContext";

const DemoSection = ({ children }) => {
  const level = useContext(DemoLevelContext);
  return (
    <section className="section">
      <DemoLevelContext.Provider value={level + 1}>
        {children}
      </DemoLevelContext.Provider>
    </section>
  );
};

export default DemoSection;
