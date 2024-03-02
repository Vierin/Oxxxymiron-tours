import "animate.css/animate.min.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "./AppRoutes";

import "../../styles/index.scss";

const App = () => (
    <div className="app">
        <Header />
        <AppRoutes />
        <Footer />
    </div>
);

export default App;
