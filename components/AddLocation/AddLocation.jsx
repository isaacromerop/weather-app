import { Wrapper } from "./AddLocation.style";

const AddLocation = () => {
  return (
    <Wrapper>
      <div className="button">
        <button>AddLocation</button>
      </div>
      <div className="image">
        <img src="/assets/images/draw.png" alt="draw" />
      </div>
    </Wrapper>
  );
};

export default AddLocation;
