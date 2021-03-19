import HeadHTML from "../components/Head/HeadHTML";

import { GlobalStyle, Wrapper } from "./index.style";

import MainWheather from "../components/MainWeather/MainWeather";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";

import fetch from "node-fetch";
import { useEffect, useState } from "react";

export default function Home() {
  const [bogota, setBogota] = useState({});
  const [lyon, setLyon] = useState({});
  const [paris, setParis] = useState({});

  const fetchBogota = async () => {
    try {
      const data = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=bogota&units=metric&appid=3f46a5e5e9f15258e9d0318a0f4520c1"
      );
      const results = await data.json();
      setBogota(results);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchLyon = async () => {
    try {
      const data = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=lyon&units=metric&appid=3f46a5e5e9f15258e9d0318a0f4520c1"
      );
      const results = await data.json();
      setLyon(results);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchParis = async () => {
    try {
      const data = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=3f46a5e5e9f15258e9d0318a0f4520c1"
      );
      const results = await data.json();
      setParis(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBogota();
    fetchLyon();
    fetchParis();
  }, []);

  return bogota && paris && lyon ? (
    <>
      <GlobalStyle />
      <HeadHTML />
      <Wrapper>
        <main className="main-container">
          <MainWheather bogota={bogota} />
          <AdditionalInfo paris={paris} lyon={lyon} />
        </main>
      </Wrapper>
    </>
  ) : null;
}
