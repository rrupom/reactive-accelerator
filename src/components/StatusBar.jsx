import { useOnlineStatus } from "../hooks/useOnelineStatus";

export default function StatusBar() {
  const isOneline = useOnlineStatus();
  return <h1>{isOneline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
