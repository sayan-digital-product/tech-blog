import Layout from '@santech/components/layout/layout';
import { getAllPostIds, getPostData } from '@santech/core/posts/posts';
import { PostModel } from '@santech/core/models/post.interface';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

export async function getStaticProps({ params }:{params: any}) {
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
          <Card elevation={0} className='minimum-height'>
                {/* <CardMedia
                  component="img"
                  height="140"
                  image={postData.imageUrl}
                  alt="green iguana"
                /> */}
                <CardContent className='m-8'>
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
            <CardActions>
              {/* <Button size="small" color="primary">
                Share
              </Button> */}
            </CardActions>
          </Card>
        </>
      </Layout>
    );
}