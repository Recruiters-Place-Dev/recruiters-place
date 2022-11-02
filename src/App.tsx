import RoutesMain from "./routes";
import { WebProvider } from "./context/webcontext";

function App() {
  return (
    <WebProvider>
      <RoutesMain />
    </WebProvider>
  );
}

export default App;
