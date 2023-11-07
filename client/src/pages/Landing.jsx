import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Login from "./Login";
// import Register from "./";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <h1>Keeper</h1>
      </nav>
      <Login />
    </Wrapper>
  );
};
export default Landing;
