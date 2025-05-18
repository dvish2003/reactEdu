import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./page/LoginPage.tsx";
import Home from "./page/Home.tsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;