import explorer from "./data/explorerData.js";
import Folder from "./components/Folder.jsx";
import "./App.css";

function App() {
  return <Folder data={explorer} />;
}

export default App;
