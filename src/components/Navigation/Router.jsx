import Home from "../../screens/Home";
import Product from "../../screens/Product";
import About from "../../screens/About";
import Think from "../../screens/Think";
import Counter from "../Counter/Counter";
import { Route, Routes } from "react-router";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="think" element={<Think />} />
            <Route path="about" element={<About />} />
            <Route path="counter" element={<Counter />} />

        </Routes>
    );
}
export default Router