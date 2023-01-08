import { Navbar } from "./components";
import {
  Header,
  About,
  Services,
  Experts,
  Testimonial,
  Hire,
  Clients,
  Footer,
} from "./containers";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experts />
      <Testimonial />
      <Hire />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
