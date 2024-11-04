import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { swiggyAPI } from "../utils/constants";
import RestroCard from "./RestroCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [search, setSearch] = useState("");
  const [fileredData, setFilteredData] = useState([]);

  useEffect(() => {
    fecthdata();
  }, []);

  const fecthdata = async () => {
    const data = await fetch(swiggyAPI);
    const jsonData = await data.json();
    console.log(jsonData);
    setResData(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredData(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const online = useOnlineStatus();

  if (online === false) {
    return <h1>You Are In Offline , Please Check Your Internet Connection</h1>;
  }

  return (
    <div className="Body">
      <div className="filter border-solid  border-black">
        <div className="search m-4 p-4">
        <button
          className=" px-4 m-2 bg-gray-400 rounded-lg"
          onClick={() => {
            const filteredData = resData.filter(
              (res) => res.info.avgRating > 4.3
            );
            setResData(filteredData);
          }}
        >
          TOP RESTARUNT
        </button>
        <input
          className="search border-solid border-black"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button className="search px-4 bg-green-300 m-4 rounded-lg"
          onClick={() => {
            const filterData = resData.filter((res) =>
              res.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredData(filterData);
          }}
        >
          SEARCH
        </button>
      </div>
      </div>
      <div className="flex flex-wrap">
        {fileredData.map((restraunt) => (
          <Link to={"/restromenu/" + restraunt.info.id} key={restraunt.info.id}>
            <RestroCard resobj={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
