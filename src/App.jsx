import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Navigation = () => (
  <div className="links" style={{ display: "flex", gap: "1rem" }}>
    <Link to="/">Testpage 1</Link>
    <Link to="/testpage2">Testpage 2</Link>
    <Link to="/testpage3">Testpage 3</Link>
    <Link to="/testpage4">Testpage 4</Link>
    <Link to="/testpage5">Testpage 5</Link>
  </div>
);

const Testpage1 = () => (
  <div>
    <Navigation />
    <br /><br />
    <img src="https://www.w3schools.com/html/pic_trulli.jpg" useMap="#example-map" alt="Example image map" />
    <map name="example-map">
      <area shape="rect" coords="34,44,270,350" href="#" />
    </map>
    <label htmlFor="upload-image">upload image
      <input type="image" id="upload-image" width="50" height="50" src="https://www.w3schools.com/html/pic_trulli.jpg" />
    </label>
    <label htmlFor="upload-image2">upload image
      <input type="image" id="upload-image2" width="50" height="50" src="https://www.w3schools.com/html/pic_trulli.jpg" />
    </label>
  </div>
);

const Testpage2 = () => (
  <div>
    <Navigation />
    <br /><br />
    <input type="text" />
    <input type="text" id="input-123" />
  </div>
);

const Testpage3 = () => (
  <div>
    <Navigation />
    <br /><br />
    <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" width="500" height="333" />
  </div>
);

const Testpage4 = () => (
  <div>
    <Navigation />
    <br /><br />
    <a href="download.html">
      <img src="download-icon.png" />
    </a>
  </div>
);

const Testpage5 = () => (
  <div>
    <Navigation />
    <br /><br />
    <input type="text" />
    <input type="text" id="input-123" />
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Testpage1 />} />
      <Route path="/testpage2" element={<Testpage2 />} />
      <Route path="/testpage3" element={<Testpage3 />} />
      <Route path="/testpage4" element={<Testpage4 />} />
      <Route path="/testpage5" element={<Testpage5 />} />
    </Routes>
  </Router>
);

export default App;