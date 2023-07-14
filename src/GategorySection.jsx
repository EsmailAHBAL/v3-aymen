import useSite from 'hooks/use-site';
import { categoryPathBySlug } from 'lib/categories';
import Link from 'next/link';

const CategorySection = () => {
  const { categories = [] } = useSite();

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {categories.map((cat) => {
          const { id, slug, name } = cat;
          return (
            <div
              className="p-4 rounded-lg text-center bg-amber-200 mx-3 mt-3  text-2xl  md:text-3xl font-extrabold "
              key={id}
            >
              <Link href={categoryPathBySlug(slug)}>{name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategorySection;
