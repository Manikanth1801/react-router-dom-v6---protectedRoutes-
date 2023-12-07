import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { MovieDataType } from "../index.type";

interface GLobalContextType {
  movieData: MovieDataType[] | [];
  setMovieData: Dispatch<SetStateAction<MovieDataType[]>>;
}

interface GlobalProviderInterface {
  children: ReactNode;
}

const initialValues = {
  movieData: [],
  setMovieData: () => {},
} as GLobalContextType;

const GlobalContext = createContext(initialValues);
export { GlobalContext };

const GlobalProvider: FC<GlobalProviderInterface> = ({ children }) => {
  const [movieData, setMovieData] = useState<MovieDataType[] | []>([]);
  return (
    <GlobalContext.Provider
      value={{
        movieData,
        setMovieData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
