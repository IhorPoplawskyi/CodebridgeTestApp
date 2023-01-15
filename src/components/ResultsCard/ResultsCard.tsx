import { FC } from 'react';

import { IArticle } from "../../types";

import { Link } from "react-router-dom";

import calendar from "../../icons/calendar.png";
import rightArrow from "../../icons/rightArrow.png";

import { fixText } from '../../helpers/fixText';

import { useAppSelector } from "../../redux/store";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";

import { ResultsCardStyle } from './ResultsCardStyle';

interface IResultsCardProps {
  item: IArticle;
}

export const ResultsCard: FC<IResultsCardProps> = ({ item: { id, imageUrl, publishedAt, title, summary } }): JSX.Element => {
  const keywords = useAppSelector((state) => state.stateSlice.keywords);

  return (
    <Card sx={ResultsCardStyle}>
      <CardMedia component="img" height="140" image={imageUrl} alt="image" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="subtitle2" component="div" color="grey">
          <img src={calendar} alt="calendar" style={{ marginRight: "5px" }} />
          {publishedAt.slice(0, 10)}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <div>{fixText(title, keywords)}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>{fixText(summary, keywords)}</div>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/article/${id}`} style={{ textDecoration: "none" }}>
          <Button size="small" sx={{ color: "black" }}>
            Read more
            <img src={rightArrow} alt='arrow' style={{ marginLeft: "3px" }} />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
