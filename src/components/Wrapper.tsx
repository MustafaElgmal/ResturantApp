import React, { useEffect } from "react";
import { useLocation } from "react-router";

const Wrapper = ({ children }: any) => {
  const location = useLocation();
  if(location.pathname==='/'){
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

export default Wrapper;
