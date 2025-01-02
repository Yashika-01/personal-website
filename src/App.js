import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import Experience from './pages/Experience';
import EducationTimeline from './pages/Education';
import Publication from './pages/Publication';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/education" element={<EducationTimeline/>} />
        <Route path="/publications" element={<Publication />}/>
      </Routes>
    </Router>
  );
};

export default App;