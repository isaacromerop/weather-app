import HeadHTML from "../components/Head/HeadHTML";

import { GlobalStyle, Wrapper } from "./index.style";

import MainWheather from "../components/MainWeather/MainWeather";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <HeadHTML />
      <Wrapper>
        <main className="main-container">
          <MainWheather />
          <AdditionalInfo />
        </main>
      </Wrapper>
    </>
  );
}
