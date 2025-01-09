import OpenLink from "../components/Core/OpenLink";

import Body from '../Components/Home/Body.jsx';
import Footer from '../Components/Home/Footer.jsx';

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
const Home = () => {
    return (
        <div>
            <OpenLink redirectURL="https://vite.dev" logoImage={reactLogo} />
            <OpenLink redirectURL="https://react.dev" logoImage={viteLogo} />
            <OpenLink redirectURL="https://github.com/alvaro696/frontend-readct" logoImage={githubLogo} />
            <Body />
            <Footer />
        </div>
    );
};

export default Home;