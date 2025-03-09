import { useOnlineStatus } from "../hooks/useOnelineStatus";

export default function SaveButton() {
  const isOneline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOneline} onClick={handleSaveClick}>
      {isOneline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
