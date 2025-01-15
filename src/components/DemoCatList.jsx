import { useRef, useState } from "react";

export default function DemoCatList() {
  const itemsRef = useRef(null);
  const [catList, setCatList] = useState(setupCatList);

  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  const scrollToCat = (cat) => {
    const map = getMap();
    const node = map.get(cat);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={() => scrollToCat(catList[0])}>Neo</button>
        <button onClick={() => scrollToCat(catList[1])}>Millie</button>
        <button onClick={() => scrollToCat(catList[2])}>Bella</button>
      </nav>
      <div style={{ width: "100%", overflowX: "auto", scrollbarWidth: "none" }}>
        <ul style={{ display: "flex", gap: "10px" }}>
          {catList.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                const map = getMap();
                map.set(cat, node);
                return () => {
                  map.delete(cat);
                };
              }}
            >
              <img src={cat} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}
