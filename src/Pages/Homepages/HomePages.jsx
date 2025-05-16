import React from "react";
import { MyProfile } from "./Section/MyProfile";
import { MySkill } from "./Section/MySkill";
import { MyProjects } from "./Section/MyProjects";
import { Aboutme } from "./Section/Aboutme";

export const HomePages = () => {
  return (
    <div>
      <MyProfile />
      <MySkill />
      <MyProjects />
      <Aboutme />
    </div>
  );
};
