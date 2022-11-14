import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <PeopleIcon />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FolderCopyIcon />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <CalendarMonthIcon />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <AssignmentIcon />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <TwitterIcon />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <LinkedInIcon />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <InstagramIcon />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <EmailIcon />,
  },
];
