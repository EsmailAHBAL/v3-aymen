import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import useSite from 'hooks/use-site';
import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';
import Link from 'next/link';

const SliderRecents = () => {
  const { recentPosts = [] } = useSite();
  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;

  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 15 },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full h-auto mt-4">
      {hasRecentPosts &&
        recentPosts.map((p) => {
          const { title, id, excerpt, slug } = p;
          return (
            <div className="keen-slider__slide number-slide1  rounded-xl" key={id}>
              <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                  alt="Home"
                  src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                  <dl>
                    <div>
                      <dt className="sr-only">Price</dt>

                      <dd className="text-sm text-gray-500">SmartMiniCar</dd>
                    </div>

                    <div>
                      <dt className="sr-only">title</dt>

                      <dd className="font-lg">{title}</dd>
                    </div>
                  </dl>
                </div>
                <div className=""></div>
                {excerpt && (
                  <div
                    className="text-xs h-16"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeExcerpt(excerpt),
                    }}
                  />
                )}
                <div></div>
                <div className="text-center">
                  <Link href={postPathBySlug(slug)}>
                    <button
                      className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                      href="/download"
                    >
                      <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                        Download
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
