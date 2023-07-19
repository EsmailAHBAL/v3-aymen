import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

import Hero from 'components/Hero';
import SliderRecents from 'components/SliderRecent';

export default function Home({ posts, pagination }) {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <div className="max-w-5xl mx-auto">
        <Hero />
      </div>
      <Section>
        <Container>
          <div className=" text-2xl md:text-4xl">Recent Posts</div>
          <div>
            <SliderRecents />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className=" text-2xl md:text-4xl">all Posts</div>
          <div className="bg-gray-300 w-full h-1 my-2 "></div>
          <ul className="grid grid-cols-1 w-4/5 place-content-center md:w-full  md:grid-cols-2 gap-x-3 gap-y-3 p-4 md:p-2">
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
    revalidate: 60,
  };
}
