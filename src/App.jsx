import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ActiveReports from './ActiveReports';
import ReportIssue from './ReportIssue';
import BrowseMap from './BrowseMap';
import Login from './Login';
import Dashboard from './Dashboard';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="active-reports" element={<ActiveReports />} />
          <Route path="report-issue" element={<ReportIssue />} />
          <Route path="map" element={<BrowseMap />} />
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
