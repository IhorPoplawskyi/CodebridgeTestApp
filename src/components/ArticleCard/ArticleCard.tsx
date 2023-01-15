import { FC } from "react";
import { Link } from "react-router-dom";

import MuiCard from "@mui/material/Card";
import MuiButton from "@mui/material/Button";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiTypography from "@mui/material/Typography";
import MuiCardActions from "@mui/material/CardActions";
import MuiCardContent from "@mui/material/CardContent";

import calendar from "./calendar.png";
import rightArrow from './rightArrow.png';

import parse from "html-react-parser";
import { higlight, truncate } from "../../helpers";

import { IArticle } from '../../types';

import styles from './ArticleCard.module.scss'

interface ArticleCardProps {
  item: IArticle;
  searchTerm: string;
}

export const ArticleCard: FC<ArticleCardProps> = ({ item: {
  id,
  imageUrl,
  publishedAt,
  title,
  summary,
}, searchTerm }) => {

  return (
    <MuiCard className={styles.wrapper}>
      <MuiCardMedia component="img" height="140" image={imageUrl} alt="img" />
      <MuiCardContent sx={{ flexGrow: 1 }}>
        <MuiTypography
          gutterBottom
          variant="subtitle2"
          component="div"
          color="grey"
        >
          <img style={{ marginRight: "5px" }} src={calendar} />
          {publishedAt.slice(0, 10)}
        </MuiTypography>
        <MuiTypography gutterBottom variant="h6" component="div">
          <div>{parse(higlight(title, searchTerm))}</div>
        </MuiTypography>
        <MuiTypography variant="body2" color="text.secondary">
          {parse(higlight(truncate(summary)!, searchTerm))}
        </MuiTypography>
      </MuiCardContent>
      <MuiCardActions>
        <Link style={{ textDecoration: "none" }} to={`/article/${id}`}>
          <MuiButton size="small" sx={{ color: "black" }}>
            Read more
            <img style={{ marginLeft: "3px" }} src={rightArrow} />
          </MuiButton>
        </Link>
      </MuiCardActions>
    </MuiCard>
  );
};
