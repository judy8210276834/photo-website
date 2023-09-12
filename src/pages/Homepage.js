import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Pictures from "../components/Pictures";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  // pixels
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  const auth = "RfCYlmswKdoayMyXWyq0doL8lNbZkMqvpXH2N7KJcmS1jJ1XfPSRkszl";
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
    console.log(parsedData);
  };

  useEffect(() => {
    search(intialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Pictures data={d} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
