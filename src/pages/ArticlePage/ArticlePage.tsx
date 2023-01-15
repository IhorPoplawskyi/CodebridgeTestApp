import { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import MuiCard from "@mui/material/Card";
import MuiButton from "@mui/material/Button";
import MuiContainer from "@mui/material/Container";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiTypography from "@mui/material/Typography";
import MuiCardActions from "@mui/material/CardActions";
import MuiCardContent from "@mui/material/CardContent";

import { getArticle } from "../../redux/thunk";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import styles from "./ArticlePage.module.scss";
import leftArrow from "../../icons/leftArrow.png";

export const ArticlePage: FC = (): JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const article = useAppSelector((state) => state.stateSlice.article);

  useEffect(() => {
    if (!params.id) return;
    dispatch(getArticle(params.id));
  }, [params.id]);

  return (
      <MuiContainer
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#FFFFFF",
          width: "80vw",
          minHeight: "100vh",
          borderRadius: "5px 5px 0px 0px",
          padding: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0" },
        }}
      >
        <MuiCardMedia
          sx={{ width: "100%", borderRadius: "5px 5px 0px 0px" }}
          component="img"
          alt="image"
          height="245"
          image={article?.imageUrl}
        />
        <MuiCard
          sx={{
            width: { xs: "100%", sm: "100%", md: "90%", lg: "90%", xl: "90%" },
            position: "absolute",
            top: "140px",
          }}
        >
          <MuiCardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MuiTypography gutterBottom variant="h5" component="div">
              {article?.title}
            </MuiTypography>
            <MuiTypography variant="body2" color="black">
              {article?.summary}
            </MuiTypography>
          </MuiCardContent>
          <MuiCardActions>
            <Link style={{ textDecoration: "none" }} to={"/home"}>
              <MuiButton sx={{ color: "black" }} size="small">
                <img style={{ marginRight: "3px" }} alt="img" src={leftArrow} />
                Back to homepage
              </MuiButton>
            </Link>
          </MuiCardActions>
        </MuiCard>
      </MuiContainer>
  );
};

