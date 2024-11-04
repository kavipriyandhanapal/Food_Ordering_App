import { useState } from "react";
import { RESTRO_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogIn] = useState("LogIn");
  const online = useOnlineStatus();
  console.log('offline');
  
  return (
    <div className="flex justify-between bg-pink-300">
      <div className="Logo">
        <img className="w-28" src={RESTRO_LOGO}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status {online === true ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/home">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4"> 
            <Link to="/contactus">ContactUs</Link>
          </li>
          <li className="px-5">Cart</li>
          <button
            className="Login"
            onClick={() => {
              login === "LogIn" ? setLogIn("LogOut") : setLogIn("LogIn");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
