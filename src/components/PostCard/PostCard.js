import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import { FaMapPin } from 'react-icons/fa';
import styles from './PostCard.module.scss';
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

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  return (
    <div className={postCardStyle}>
      {isSticky && <FaMapPin aria-label="Sticky Post" />}
      <Link href={postPathBySlug(slug)}>
        <h3
          className="text-xl md:text-2xl "
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </Link>
      <div
        className="relative mx-4 
      my-6
       h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
      >
        {featuredImage ? (
          <Image
            src={featuredImage.sourceUrl}
            fill
            alt="somethingFailted"
            className="w-full h-full bg-cover bg-center "
          />
        ) : (
          <div className="flex justify-center items-center h-full text-black"> no imaage for this</div>
        )}
      </div>

      {excerpt && (
        <div
          className="text-lg "
          dangerouslySetInnerHTML={{
            __html: sanitizeExcerpt(excerpt),
          }}
        />
      )}
    </div>
  );
};

export default PostCard;
