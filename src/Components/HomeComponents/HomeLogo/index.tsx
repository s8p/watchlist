import { Container } from "./style";
import Logo from "Assets/Logo.png";
const HomeLogo = () => {
  return (
    <Container>
      <div className="image_container">
        <img src={Logo} alt="WatchList" />
      </div>
    </Container>
  );
};

export default HomeLogo;
