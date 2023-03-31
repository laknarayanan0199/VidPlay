import { Navigate, Route, Routes } from "react-router";
import EduBucket from "./components/pages/bucket/EduBucket";
import EntertainmentBucket from "./components/pages/bucket/EntertainmentBucket";
import NewsBucket from "./components/pages/bucket/NewsBucket";
import TrendBucket from "./components/pages/bucket/TrendBucket";
import History from "./components/pages/history/History";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/trending"} />} />
      <Route path="/trending" element={<TrendBucket />} />
      <Route path="/Education" element={<EduBucket />} />
      <Route path="/Entertainment" element={<EntertainmentBucket />} />
      <Route path="/News" element={<NewsBucket />} />
      <Route path="/History" element={<History />} />
    </Routes>
  );
}

export default App;
