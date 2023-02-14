import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Highlighter from 'react-highlight-words';
import Typography from '@mui/material/Typography';
import { CardDateIcon } from '../Icons/cardDateIcon.js';
import { CardBtnArrow } from '../Icons/cardBtnArrow.js';
import '../components_styles/Card/Card.css';

const convertTime = (time) => {
  return new Date(time).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// const search = (keyword) => {
//   let regExp = new RegExp(keyword, 'gi');
// };

export default function MediaCard({ cards }) {
  return (
    <>
      {cards.map(
        ({
          title,
          url,
          description,
          publishedAt,
          urlToImage,
          content,
          idx,
        }) => (
          <Card className="card" key={idx}>
            <CardMedia
              sx={{ height: 217 }}
              // image="../components/Icons/NoImage.jpg"
              image={
                urlToImage ? urlToImage : '../components/Icons/NoImage.jpg'
              }
            />
            <CardContent className="card__body">
              <Typography
                variant="body2"
                color="text.secondary"
                className="card__date"
              >
                <span className="card__date--span">
                  <CardDateIcon className="card__date--icon" />
                </span>
                {convertTime(publishedAt)}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="card__title"
              >
                {/* {title && (
            <Highlighter searchWords={filterArr} textToHighlight={title} />
          )} */}
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="card__description"
              >
                {description}
              </Typography>
            </CardContent>
            <CardActions key={idx}>
              <Link to={`/article/${idx}`} className="read-more__link">
                {/* <Link to="/article" className="read-more__link"> */}
                <Button
                  color="secondary"
                  disabled={false}
                  className="card__button"
                >
                  Read more
                  <span className="card__button--span">
                    <CardBtnArrow />
                  </span>
                </Button>
              </Link>
            </CardActions>
          </Card>
        )
      )}
    </>
  );
}
