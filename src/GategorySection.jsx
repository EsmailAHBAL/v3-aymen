import NavCategories from 'components/NavCategories';
import useSite from 'hooks/use-site';
// import { categoryPathBySlug } from 'lib/categories';
// import Link from 'next/link';

const CategorySection = () => {
  const { categories = [] } = useSite();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center py-4">
      <div className="flex justify-center items-center ">
        {categories.map((c, i) => (
          <div key={i}>
            {c.parent?.node.name && (
              <div className="">
                <NavCategories parent={c.parent?.node.name} childrens={c.parent?.node.children.nodes} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategorySection;
