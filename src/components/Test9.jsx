import { useEffect, useState, useSyncExternalStore } from "react";

function subscribe(callback) {
  // subscribe
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  // cleanup
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}
function useOnlineState() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine, // client
    () => true // server default state
  );
}
export default function Test9() {
  const isOnline = useOnlineState();
  return <div>I am in {isOnline ? "Online" : "Offline"}</div>;
}
