import { styled } from "@mui/material/styles";

export const ResultsStyle = styled("div")(({ theme }) => ({
  marginTop: '25px',
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "calc(100% - 150px)",
    marginLeft: "75px",
    marginRight: "75px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "calc(100% - 150px)",
    marginLeft: "75px",
    marginRight: "75px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "calc(100% - 150px)",
    marginLeft: "75px",
    marginRight: "75px",
  },
}));