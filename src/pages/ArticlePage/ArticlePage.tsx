import { FC, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import MuiCard from "@mui/material/Card";
import MuiButton from "@mui/material/Button";
import MuiContainer from "@mui/material/Container";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiTypography from "@mui/material/Typography";
import MuiCardActions from "@mui/material/CardActions";
import MuiCardContent from "@mui/material/CardContent";

import { fetchArticle } from "../../redux/thunks";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import leftArrow from "./leftArrow.png";
import styles from './ArticlePage.module.scss';

export const ArticlePage: FC = (): JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  
  const article = useAppSelector((state) => state.stateSlice.activeArticle);
  useEffect(() => {
    dispatch(fetchArticle(params.id!));
  }, []);

  return (
      <MuiContainer className={styles.page}>
        <MuiCardMedia className={styles.cardMedia} component="img" alt="image" height="245" image={article?.imageUrl}/>
        <MuiCard className={styles.cardPosition}>
          <MuiCardContent className={styles.cardContent}>
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
