import { useRef, useState } from "react";

export default function CatFriends() {
  const itemsRef = useRef(null);
  const [index, setIndex] = useState(0);

  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  };

  const scrollCatIntoView = (i) => {
    const map = getMap();
    const node = map.get(i);
    node.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };

  return (
    <>
      <nav>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex((prev) => prev + 1);
              scrollCatIntoView(index);
            } else {
              setIndex(0);
              scrollCatIntoView(0);
            }
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                map.set(i, node);
                return () => {
                  map.delete(i);
                };
              }}
            >
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://loremflickr.com/250/200/cat?lock=" + i,
  });
}
