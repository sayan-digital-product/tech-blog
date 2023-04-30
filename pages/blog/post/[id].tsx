import Layout from '@santech/components/layout/layout';
import { getAllPostIds, getPostData } from '@santech/core/posts/posts';
import { PostModel } from './post.interface';
import { IKContext, IKImage } from 'imagekitio-react';
import { imageBaseurl } from '@santech/core/config/app.config';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: {postData: PostModel}) {
    return (
      <Layout>
        <>
          <Card className='minimum-height bg-card-background'>
            <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={postData.imageUrl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {postData.title}
                  </Typography>
                  <Typography gutterBottom variant='h6' component="div">
                    {postData.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                  </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </>
      </Layout>
    );
}