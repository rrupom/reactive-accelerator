import { useState } from "react";
import { initialTravelPlan } from "../data/places-normalized";

const PlaceTree = ({ id, placesById, parentId, onComplete }) => {
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <li>
      {place.title}
      <button onClick={() => onComplete(parentId, id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              placesById={placesById}
              parentId={id}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

const PracticeTravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            placesById={plan}
            parentId={0}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
};

export default PracticeTravelPlan;
