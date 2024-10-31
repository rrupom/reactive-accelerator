import { useState } from "react";

const ProfileEditor = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Rakib");
  const [lastName, setLastName] = useState("Talukder");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First name:{" "}
          {isEditing ? (
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          ) : (
            <b>{firstName}</b>
          )}
        </label>
      </div>
      <div>
        <label>
          Last Name:{" "}
          {isEditing ? (
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          ) : (
            <b>{lastName}</b>
          )}
        </label>
      </div>
      <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}
        </i>
      </p>
    </form>
  );
};

export default ProfileEditor;
