import { FC, useEffect } from "react";

const BASE_URL = "https://swapi.dev/api/films";

const ApiService: FC = () => {
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(BASE_URL);

        // Check if the response is successful (status code 200)
        if (response.ok) {
          // Parse the response as JSON
          const data = await response.json();

          // Now you can do something with the data
          console.log(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchApi();
  }, []);

  return <></>;
};

export default ApiService;
