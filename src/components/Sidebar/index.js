import React from "react";
import {
  LinkList,
  SidebarContainer,
  SidebarHeader,
  StyledLinkContainer,
  ListItem,
  SocialIconContainer,
  SocialLink,
} from "./StyledSidebar";
import logo from "../../logo.svg";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import { links, social } from "../../data";
import { useGlobalContext } from "../../MainContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <SidebarHeader>
        <img src={logo} alt="coding addict" />
        <Button onClick={closeSidebar}>
          <ClearIcon
            sx={{
              fontSize: "1.5rem",
              stroke: "red",
              strokeWidth: "2",
            }}
          />
        </Button>
      </SidebarHeader>
      <LinkList>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <ListItem key={id}>
              {icon}
              <StyledLinkContainer href={url} underline="none">
                {text}
              </StyledLinkContainer>
            </ListItem>
          );
        })}
      </LinkList>
      <SocialIconContainer>
        {social.map((social) => {
          const { id, url, icon } = social;
          return (
            <SocialLink key={id} href={url}>
              {icon}
            </SocialLink>
          );
        })}
      </SocialIconContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
