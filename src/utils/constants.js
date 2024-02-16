import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiHanger } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Worship", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Christian Music", icon: <IoLogoJavascript />, type: "category" },
  { name: "Prophet", icon: <FaReact />, type: "category" },
  { name: "Ministry", icon: <CgMusicNote />, type: "category" },
  { name: "Holy Spirit", icon: <FiFilm />, type: "category" },
  { name: "Fasting", icon: <MdLiveTv />, type: "category" },
  { name: "Angels", icon: <SiYoutubegaming />, type: "category" },
  { name: "Apostles", icon: <ImNewspaper />, type: "category" },
  { name: "Evangelism", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Bible Reading",
    icon: <GiHanger />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
