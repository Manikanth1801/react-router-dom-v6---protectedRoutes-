import axios from "axios";
import { FC, useEffect, useState } from "react";
import { MovieDataType } from "../../index.type";

const ProtectedPage: FC = () => {
  const [movieData, setMovieData] = useState<MovieDataType[]>([]),
    [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get(`https://swapi.dev/api/films/?search=${searchTerm}`)
        .then((res) => res.data.results)
        .then((res) => setMovieData(res));
      return response;
    };
    getData();
  }, [searchTerm]); // Run useEffect whenever searchTerm changes

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="App">
        <div>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {movieData.map((data, i) => (
            <div key={i}>
              <h2>{data?.title}</h2>
              {/* <p>{data?.opening_crawl}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProtectedPage;
