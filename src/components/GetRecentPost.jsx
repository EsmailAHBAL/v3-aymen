import useSite from 'hooks/use-site';
import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';
import Link from 'next/link';
import { FaMapPin } from 'react-icons/fa';

const GetRecentsPost = () => {
  const { recentPosts = [] } = useSite();
  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;

  return (
    <div className=" p-4">
      {hasRecentPosts &&
        recentPosts.map((c, i) => (
          <article
            className="rounded-sm mt-2 border-x-0 border-2 border-b-0 border-gray-100 bg-white"
            key={c.title + i.toString()}
          >
            <h2 className="text-sm font-bold text-gray-800 py-2">
              {c.isSticky && <FaMapPin aria-label="Sticky Post" />}

              <Link href={postPathBySlug(c.slug)}>
                <h3
                  className="transition duration-100 hover:text-gray-500 active:text-gray-600 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: c.title,
                  }}
                />
              </Link>
            </h2>
            {c.excerpt && (
              <div
                className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: sanitizeExcerpt(c.excerpt),
                }}
              />
            )}
          </article>
        ))}
    </div>
  );
};
export default GetRecentsPost;
