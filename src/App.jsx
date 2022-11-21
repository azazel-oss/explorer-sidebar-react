import explorer from "./data/explorerData.js";
import Folder from "./components/Folder.jsx";
import "./components/App.css";

function App() {
  return <Folder data={explorer} />;
}

export default App;
