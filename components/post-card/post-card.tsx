import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PostCard({data}: {data: any}) {
  return (
    <Card elevation={2}>
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image={data.imageUrl}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.subTitle}
        </Typography>
        {data?.description?.map((item: string, key: number) => {
            return (<div key={key}><Typography variant="body2">{item}</Typography></div>)
        })}
      </CardContent>
      <CardActions className='justify-end'>
        <Button color="primary" variant="text" size="small">Read more</Button>
      </CardActions>
    </Card>
  );
}