import useSite from 'hooks/use-site';
import { categoryPathBySlug } from 'lib/categories';
import Link from 'next/link';
import { useState } from 'react';
// import { categoryPathBySlug } from 'lib/categories';
// import Link from 'next/link';

const CategorySection = () => {
  const { categories = [] } = useSite();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="md:hidden w-full  bg-white">
        <div className="flex justify-between p-3 pt-4 items-center">
          <div className="Logo">LOgo</div>
          <div className="Logo" onClick={() => setShowMenu(!showMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
        <ul className={`${showMenu ? 'w-full  z-10 ease-in-out duration-1000 transition-all' : 'hidden ease-out'}`}>
          {categories.map((c, i) => (
            <li key={i}>
              {c.children?.edges.length ? (
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500
            hover:bg-amber-100/30 hover:text-gray-700"
                  >
                    <span className="text-sm font-medium"> {c.name} </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    {c.children.edges.map((e, ii) => (
                      <li key={ii}>
                        <Link className="navbar-item" href={categoryPathBySlug(e.node.slug)}>
                          {e.node.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <div></div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className=" justify-center items-center text-xs hidden lg:flex">
        <div className="md:flex ">
          {categories.map((c, i) => (
            <div className="flex text-xs" key={i}>
              {c.children?.edges.length ? (
                <>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">{c.name}</a>

                    <div className="navbar-dropdown">
                      {c.children.edges.map((e, ii) => (
                        <Link className="navbar-item" key={ii} href={categoryPathBySlug(e.node.slug)}>
                          {e.node.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div></div>
                </>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CategorySection;
