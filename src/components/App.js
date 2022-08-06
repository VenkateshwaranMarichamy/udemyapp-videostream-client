import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

// function App() {
//   return (
//     <div >
//       App
//     </div>
//   );
// }

const pageOne = () => {
  return (<div>
    PageOne
    <Link to="/pagetwo">Navigate page 2</Link>
    </div>);
}

const pageTwo = () => {
  return (<div>
    PageTwo
    <button>Click Me</button>
    <Link to="/">Navigate page 1</Link></div>);
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          {/* can be mulitple route components
          <Route path="/" exact component={pageOne} /> */}
          <Route path="/" exact component={pageOne} />
          <Route path="/pagetwo" exact component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
