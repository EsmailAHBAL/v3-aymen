import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import { FaMapPin } from 'react-icons/fa';

const PostCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false } = post;
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
    <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 mt-4">
      <div className="group relative block h-7 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
        <img
          src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          loading="lazy"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-400">April 2, 2022</span>

        <h2 className="text-xl font-bold text-gray-800">
          {isSticky && <FaMapPin aria-label="Sticky Post" />}

          <Link href={postPathBySlug(slug)}>
            <h3
              className="transition duration-100 hover:text-gray-500 active:text-gray-600"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </Link>
        </h2>

        {excerpt && (
          <div
            className="text-xs "
            dangerouslySetInnerHTML={{
              __html: sanitizeExcerpt(excerpt),
            }}
          />
        )}
        <div>
          <div className="font-semibold text-grays-500 transition duration-100 hover:text-gray-600 active:text-rose-700">
            Read more
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
