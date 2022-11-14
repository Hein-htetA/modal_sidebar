import { Link } from "@mui/material";
import { Box, styled } from "@mui/system";

export const SidebarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "white",
  transition: "all 0.5s linear",
  maxWidth: "1000px",
  padding: "20px",
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "400px",
  },
}));

export const SidebarHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const LinkList = styled("ul")({
  padding: "0px",
  display: "flex",
  flexDirection: "column",
});

export const ListItem = styled("li")({
  padding: "1rem 0px",
  fontSize: "1.5rem",
  color: "#102a42",
  listStyleType: "none",
  display: "flex",
  alignItems: "center",
});

export const StyledLinkContainer = styled(Link)({
  marginLeft: "1.5rem",
  textTransform: "capitalize",
  color: "#102a42",
});

export const SocialIconContainer = styled("ul")({
  display: "flex",
  justifyContent: "center",
  marginTop: "auto",
  padding: "2rem 0px",
});

export const SocialLink = styled(Link)(({ theme }) => ({
  color: "gray",
  fontSize: "2rem",
  margin: "0px 8px",
}));
