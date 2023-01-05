import { Navbar } from "./components";
import { Header } from "./containers";
import { About } from "./containers";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
