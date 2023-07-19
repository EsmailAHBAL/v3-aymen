import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import useSite from 'hooks/use-site';
import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';
import Link from 'next/link';
import Image from 'next/image';

const SliderRecents = () => {
  const { recentPosts = [] } = useSite();
  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;

  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    breakpoints: {
      '(min-width: 460px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 2, spacing: 10 },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full h-auto mt-4">
      {hasRecentPosts &&
        recentPosts.map((p) => {
          const { title, id, excerpt, slug, featuredImage } = p;
          return (
            <div className="keen-slider__slide number-slide1  rounded-xl" key={id}>
              <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 ">
                {featuredImage ? (
                  <Image
                    height={500}
                    width={500}
                    priority={true}
                    alt="Lava"
                    src={featuredImage.sourceUrl}
                    className="h-96 md:h-56 bg-cover bg-center w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] mb-4"
                  />
                ) : (
                  <div
                    className="mt-4 h-56 w-full rounded-sm object-cover shadow-xl transition group-hover:grayscale-[50%]
    
        bg-gray-100/25"
                  ></div>
                )}
                <div className="py-4 h-24 line-clamp-3 ">{title}</div>
                <div className=""></div>
                {excerpt && (
                  <div
                    className="text-xs line-clamp-2 "
                    dangerouslySetInnerHTML={{
                      __html: sanitizeExcerpt(excerpt),
                    }}
                  />
                )}
                <div className="text-center mt-4">
                  <Link href={postPathBySlug(slug)}>
                    <button className="inline-block rounded bg-gradient-to-r from-black via-black to-gray-400 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                      <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                        Read More
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SliderRecents;
