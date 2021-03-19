import { Wrapper } from "./France.styled";
import FranceCard from "../FranceCard/FranceCard";
import AddLocation from "../AddLocation/AddLocation";

const France = () => {
  return (
    <Wrapper>
      <FranceCard />
      <FranceCard />
      <AddLocation />
    </Wrapper>
  );
};

export default France;
