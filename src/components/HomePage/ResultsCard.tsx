import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import calendar from '../../icons/calendar.png'
import rightArrow from '../../icons/rightArrow.png'
import { useAppSelector } from '../../redux/store';
import parse from 'html-react-parser';
import { higlight } from "../../helpers/highlight";
import { response } from "../../redux/stateSlice";
import { truncate } from "../../helpers/truncate";
import { Link } from "react-router-dom";

const ResultsCard: React.FC<response> = ({ id, imageUrl, publishedAt, title, summary }) => {
  const keywords = useAppSelector(state => state.stateSlice.keywords)

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '100%', md: '47%', lg: '30%', xl: '30%' }, marginBottom: '25px' }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="image"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="subtitle2" component="div" color='grey'>
          <img style={{ marginRight: '5px' }} src={calendar} />{publishedAt.slice(0, 10)}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <div>{parse(higlight(title, keywords))}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {parse(higlight(truncate(summary)!, keywords))}
        </Typography>
      </CardContent>
      <CardActions>
        <Link style={{textDecoration: 'none'}} to={`/article/${id}`}>
          <Button size="small" sx={{color: 'black'}}>
            Read more
            <img style={{marginLeft: '3px'}} src={rightArrow}/>
          </Button>
        </Link>

      </CardActions>
    </Card>
  );
}

export default ResultsCard