import { useEffect } from "react";
import { createConnection } from "../utils/chat";
import { showNotification } from "../utils/showNotifications";
import { experimental_useEffectEvent as useEffectEventt } from "react";

const serverUrl = "https://localhost:1234";
export default function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEventt(() => {
    showNotification("Connected", theme);
  });
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on("connected", () => {
      onConnected();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  return <h1>Welcome to the {roomId} room!</h1>;
}
