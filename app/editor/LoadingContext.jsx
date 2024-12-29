import { createContext } from "react";

const LoadingContext = createContext({
  loading: false,
  startLoad: () => {},
  endLoad: () => {},
});

export default LoadingContext;
