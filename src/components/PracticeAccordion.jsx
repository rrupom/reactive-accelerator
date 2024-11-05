import { useState } from "react";
import PracticePanel from "./PracticePanel";

const PracticeAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhastan</h2>
      <PracticePanel
        title={"About"}
        isActive={activeIndex === 0}
        onActive={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam
        excepturi odit incidunt quos officiis dolorum mollitia exercitationem
        harum. A.
      </PracticePanel>
      <PracticePanel
        title={"Etymology"}
        isActive={activeIndex === 1}
        onActive={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
        cupiditate blanditiis beatae, enim quos dolorum doloribus neque cum non!
      </PracticePanel>
    </>
  );
};

export default PracticeAccordion;
