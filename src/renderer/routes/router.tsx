import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Hello from 'renderer/components/hello';

export default function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
