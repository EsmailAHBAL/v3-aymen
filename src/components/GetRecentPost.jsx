import useSite from 'hooks/use-site';
import { postPathBySlug } from 'lib/posts';
import Link from 'next/link';
import { FaMapPin } from 'react-icons/fa';

const GetRecentsPost = () => {
  const { recentPosts = [] } = useSite();
  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;

  return (
    <div className="">
      {hasRecentPosts &&
        recentPosts.map((c) => (
          <h2 className="text-xl font-bold text-gray-800" key={c.title}>
            {c.isSticky && <FaMapPin aria-label="Sticky Post" />}

            <Link href={postPathBySlug(c.slug)}>
              <h3
                className="transition duration-100 hover:text-gray-500 active:text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: c.title,
                }}
              />
            </Link>
          </h2>
        ))}
    </div>
  );
};
export default GetRecentsPost;
