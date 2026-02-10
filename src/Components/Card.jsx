import React, { useState } from "react";
import Bio from "./Bio";
const Card = () => {
  const [Info, setInfo] = useState(Bio);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);
  const Toggletheme = () => {
    setTheme((prev) => !prev);
  };
  const LikeCount = () => {
    setCount(count + 1);
  };
  return (
    <div
      className={` p-5 min-h-screen transition-all duration-300 ${theme ? "bg-gray-900" : "bg-gray-200"}`}
    >
      <div className="flex justify-center ml-82 my-3 items-center gap-3">
        <div
          className={`flex items-center py-2 px-4  gap-3 rounded-2xl ${theme ? "bg-white text-black" : "bg-blue-200 text-black"}`}
          onClick={Toggletheme}
        >
          <span>
            <img
              src={theme ? "assets/blackmoon.svg" : "assets/sun.svg"}
              alt="theme"
              style={{ width: 20 }}
            />
          </span>
          <span>{theme ? "Dark mode" : "Light mode"}</span>
        </div>
      </div>
      <div className="flex justify-center">
        {Info &&
          Info.map((user) => (
            <div
              key={user.Id}
              className={`w-[500px] h-[500px] p-6  rounded-xl ${theme ? "bg-gray-500" : "bg-white"}`}
            >
              <div className="flex items-center gap-2">
                <img
                  src={user.Img}
                  style={{ width: 90, height: 90, margin: 5 }}
                  className="full-rounded"
                  alt={user.Name}
                />
                <div className="flex flex-col text-left">
                  <p
                    className={`text-2xl font-semibold  tracking-widest ${theme ? "text-white " : "text-black"}`}
                  >
                    {user.Name}
                  </p>
                  <p
                    className={`text-md font-normal font-sans ${theme ? "text-gray-100" : "text-gray-600"}`}
                  >
                    {user.Role}
                  </p>
                </div>
              </div>
              <div className="flex justify-center p-5 text-left">
                <div
                  className={`flex justify-center ${theme ? "text-white" : "text-black"}`}
                >
                  {user.Description}
                </div>
              </div>
              <div
                className={`flex text-left mx-3 font-sans font-normal ${theme ? "text-gray-200" : "text-gray-600"}`}
              >
                Skills
              </div>
              <div className="flex flex-wrap gap-2  items-center justify-between pt-2 text-md  mx-2">
                {user.Skill.map((Skill, Index) => (
                  <span
                    className={`py-1  px-2 flex  items-center rounded-2xl ${theme ? "bg-white" : "bg-blue-100"}`}
                    key={Index}
                  >
                    {Skill}
                  </span>
                ))}
              </div>
              <div className="py-12 flex justify-around">
                <div className="gap-2 flex items-center text-center">
                  <span>
                    <img
                      src={theme ? "assets/cloud.svg" : "assets/sun.svg"}
                      style={{ width: 40 }}
                      alt="dark mode"
                    />
                  </span>
                  <span className={` ${theme ?  "text-white": "text-black"}`}>{theme ? "dark mode" : "light mode"}</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span>
                    <img
                      src={theme ? "assets/left-white.svg" : "assets/left-black.svg"}
                      style={{ width: 20 }}
                      alt="previous"
                    />
                  </span>
                  <span>
                    <img
                      src={theme ? "assets/right-white.svg" : "assets/right-black.svg"}
                      style={{ width: 20 }}
                      alt="next"
                    />
                  </span>
                  <span className={`${theme ? "text-white" : "text-black"}`}>1/4</span>
                </div>
                <div
                  className="gap-2 flex items-center text-center rounded-xl"
                  onClick={LikeCount}
                >
                  <span>
                    <img
                      src={theme ? "assets/unfille-heart-white.svg" : "assets/unfille-heart.svg"}
                      style={{ width: 30 }}
                      alt="like"
                    />
                  </span>
                  <span className={`${theme ? "text-white" : "text-black"}`}>{count}</span>
                </div>
                <div className="gap-2 flex items-center text-center bg-blue-400 py-1 px-3 rounded-xl">
                  <span>
                    <img
                      src={theme ? "assets/white-mail.svg": "assets/black-mail.svg"}
                      style={{ width: 30 }}
                      alt="dark mode"
                    />
                  </span>
                  <span className={`${theme ? "text-white" : "text-black"}`}>mail</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
