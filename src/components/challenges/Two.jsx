import { useState } from "react";

const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];
const PackingList = () => {
  const [items, setItems] = useState(initialItems);
  const [value, setValue] = useState("");

  const handleAddItem = () => {
    const nextId = items.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1;

    setItems([
      ...items,
      {
        id: nextId,
        title: value,
        packed: false,
      },
    ]);

    setValue("");
  };

  const handleClickItem = (e, id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            packed: !item.packed,
          };
        }

        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const numberOfPackedItems = items.reduce(
    (acc, cur) => acc + (cur.packed ? 1 : 0),
    0
  );

  console.log(items);

  const totalNumberOfItems = items.length;

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onClick={(e) => handleClickItem(e, item.id)}
            />
            {item.title}
            <button onClick={(e) => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <p>
        {numberOfPackedItems} out of {totalNumberOfItems} packed
      </p>
    </>
  );
};

export default PackingList;
