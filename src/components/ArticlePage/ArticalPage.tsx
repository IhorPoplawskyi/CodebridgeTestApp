import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Container } from '@mui/material'
import { getArticle } from '../../redux/thunk';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ArticalPage: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const article = useAppSelector(state => state.stateSlice.article);
  useEffect(() => {
    dispatch(getArticle(params.id!))
  }, [])

  return (
    <>
      <Container sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#FFFFFF', width: '80vw', minHeight: '100vh', borderRadius: '5px 5px 0px 0px', padding: { xs: '0', sm: '0', md: '0', lg: '0', xl: '0' } }}>
        <CardMedia sx={{ width: "100%", borderRadius: '5px 5px 0px 0px' }}
          component="img"
          alt="image"
          height="245"
          image={article?.imageUrl}
        />
        <Card sx={{ width: { xs: '100%', sm: '100%', md: '90%', lg: '90%', xl: '90%' }, position: 'absolute', top: '140px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              {article?.title}
            </Typography>
            <Typography variant="body2" color="black">
              {article?.summary}
            </Typography>
          </CardContent>
          <CardActions>
            <Link style={{textDecoration: 'none'}} to={'/home'}>
              <Button sx={{color: 'black'}} size="small">Back to homepage</Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}

export default ArticalPage;