import {Route, Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
