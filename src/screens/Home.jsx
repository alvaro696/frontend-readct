import OpenLink from "../components/Core/OpenLink";

import Body from '../Components/Home/Body.jsx';
import Footer from '../Components/Home/Footer.jsx';

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            <span>Count value: {count}</span>
            <div>
                <OpenLink redirectURL="https://vite.dev" logoImage={viteLogo} />
                <OpenLink redirectURL="https://react.dev" logoImage={reactLogo} />
                <OpenLink redirectURL="https://github.com/alvaro696/frontend-readct" logoImage={githubLogo} />
            </div>
            <Body />
            <Footer />
        </div>
    );
};

export default Home;