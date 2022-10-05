import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Index from 'renderer/pages';
import KitchenPage from 'renderer/pages/kitchen';
import Login from 'renderer/pages/login';
import Relatorio from 'renderer/pages/relatorio';
import TablePage from 'renderer/pages/table';
import Users from 'renderer/pages/users';

export default function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mesas" element={<Index />} />
        <Route path="/mesa/:id" element={<TablePage />} />
        <Route path="/relatorio" element={<Relatorio />} />
        <Route path="/cozinha" element={<KitchenPage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}
