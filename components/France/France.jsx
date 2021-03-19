import { Wrapper } from "./France.styled";
import FranceCard from "../FranceCard/FranceCard";
import AddLocation from "../AddLocation/AddLocation";

const France = ({ paris, lyon }) => {
  return (
    <Wrapper>
      <FranceCard info={paris} />
      <FranceCard info={lyon} />
      <AddLocation />
    </Wrapper>
  );
};

export default France;
