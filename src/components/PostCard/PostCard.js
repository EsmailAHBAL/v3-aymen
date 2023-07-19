import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import { FaMapPin } from 'react-icons/fa';
import Image from 'next/image';

const PostCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false, featuredImage } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  return (
    <article className="group">
      {featuredImage ? (
        <Image
          height={500}
          width={500}
          priority={true}
          alt="Lava"
          src={featuredImage.sourceUrl}
          className="h-full w-full md:h-72 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] mb-4"
        />
      ) : (
        <div
          className="mt-4 h-64 w-full rounded-sm object-cover shadow-xl transition group-hover:grayscale-[50%]
    
        bg-gray-100/25"
        ></div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">
          {isSticky && <FaMapPin aria-label="Sticky Post" />}
          <Link href={postPathBySlug(slug)}>
            <h3
              className="transition duration-100 hover:text-gray-500 active:text-gray-600 md:my-2 my-4 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </Link>{' '}
        </h3>

        {excerpt && (
          <div
            className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
            dangerouslySetInnerHTML={{
              __html: sanitizeExcerpt(excerpt),
            }}
          />
        )}
        <div></div>
      </div>
    </article>
  );
};

export default PostCard;
