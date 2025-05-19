import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./page/LoginPage.tsx";
import Customer from "./page/Customer.tsx";
import NavBar from "./component/NavBar.tsx";
import Footer from "./component/Footer.tsx";
import ItemPage from "./page/ItemPage.tsx";
import OrderPage from "./page/OrderPage.tsx";


function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-gray-50">
                <NavBar />
                <main className="flex-grow">
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/item" element={<ItemPage />} />
                <Route path="/order" element={<OrderPage />} />
            </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );

}

export default App;