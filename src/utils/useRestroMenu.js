import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestroMenu = (fecthdata) => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(MENU_API + fecthdata);
    console.log(data);

    const datajson = await data.json();

    setRes(datajson);
    console.log(datajson);
  };

  return res;
};

export default useRestroMenu;
