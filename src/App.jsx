import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set RegisterForm as the root path */}
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;