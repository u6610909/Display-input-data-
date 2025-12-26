import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';

function App() {
  return (
    /* Add the basename here to match your GitHub repository name */
    <BrowserRouter basename="/Display-input-data-">
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;