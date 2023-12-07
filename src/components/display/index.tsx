import { FC, useContext } from "react";
import { GlobalContext } from "../../context/globalProvider";
import ApiService from "../../services";

const DisplayComponent: FC = () => {
  // const [data, setData] = useState<any>([]);
  const { movieData } = useContext(GlobalContext);
  return (
    <>
      <ApiService />
      The details of the movie is :{movieData}
    </>
  );
};

export default DisplayComponent;
