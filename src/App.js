import Home from './Pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Single from './Pages/single/Single';
import Write from './Pages/write/Write';
import Settings from './Pages/settings/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/register/Register';
import { Routes, Route} from "react-router-dom";

function App() {
  const user = true;
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user?<Register />:<Home />} />
        <Route path="/login" element={user?<Login />:<Home />} />
        <Route path="/write" element={user?<Write />:<Write />} />
        <Route path="/settings" element={user?<Settings />:<Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
      
    </>
  );
}

export default App;
