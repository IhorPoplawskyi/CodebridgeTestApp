import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { articles } from '../../redux/stateSlice';
import calendar from '../../icons/calendar.png'
import { useAppSelector } from '../../redux/store';
import parse from 'html-react-parser';
import { higlight } from "../../helpers/highlight";

const ResultsCard: React.FC<articles> = ({ urlToImage, publishedAt, title, description }) => {
  const keywords = useAppSelector(state => state.stateSlice.keywords)
  const truncate = (str: string) => {
    if (str !== null) {
      return (str.length > 100) ? str.slice(0, 99) + '...' : str;
    }
  };
  
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '100%', md: '47%', lg: '30%', xl: '30%' }, marginBottom: '25px' }}>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt="image"
        />
        <CardContent sx={{flexGrow: 1}}>
          <Typography gutterBottom variant="subtitle2" component="div" color='grey'>
            <img style={{ marginRight: '5px' }} src={calendar} />{publishedAt.slice(0, 10)}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <div>{parse(higlight(title, keywords))}</div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncate(description)}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}

export default ResultsCard