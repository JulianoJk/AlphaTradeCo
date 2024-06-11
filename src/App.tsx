import AppInner from "./AppInner";
import { AppContextProvider } from "./components/context/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <AppInner />
    </AppContextProvider>
  );
}
