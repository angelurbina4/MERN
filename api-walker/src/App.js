import ApiWalker from "./components/ApiWalker/ApiWalker";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ApiWalkerId from "./components/ApiWalkerId/ApiWalkerId";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<ApiWalker/>} />
          <Route path="/:id"  element={<ApiWalkerId/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
