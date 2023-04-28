import Layout from '@santech/components/layout/layout';
import { getAllPostIds, getPostData } from '@santech/core/posts/posts';
import { PostModel } from './post.interface';
import { IKContext, IKImage } from 'imagekitio-react';
import { imageBaseurl } from '@santech/core/config/app.config';

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
          <header>
            <IKContext urlEndpoint={imageBaseurl.imageBase}>
                        <IKImage src={postData.imageUrl} alt="slides" />
            </IKContext>
          </header>
          <main>
            <div>
              {postData.title}
            </div>
            <div>
              {postData.id}
            </div>
            <div>
              {postData.date}
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </main>
        </>
      </Layout>
    );
}