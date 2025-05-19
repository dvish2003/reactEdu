import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./page/LoginPage.tsx";
import Home from "./page/Home.tsx";
import NavBar from "./component/NavBar.tsx";
import Footer from "./component/Footer.tsx";


function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-gray-50">
                <NavBar />
                <main className="flex-grow">
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
            </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );

}

export default App;