import { RES_CARD } from "../utils/constants";

const RestroCard = (resList) => {
  const { resobj } = resList;
  const { name, cuisines, avgRating, locality } = resobj.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rounded-lg"
        src={RES_CARD + resobj.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name} </h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4> {locality} Minutes</h4>
    </div>
  );
};

export default RestroCard;
