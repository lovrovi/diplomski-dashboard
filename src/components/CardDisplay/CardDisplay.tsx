import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CardDisplayProps = {
  title: string;
  content: string;
  image: string;
  buttonText: string;
};

const CardDisplay = ({ title, content, image, buttonText }: CardDisplayProps) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
};

export default CardDisplay;
