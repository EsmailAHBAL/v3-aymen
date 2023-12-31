// import ClassName from 'models/classname';
// import styles from './NavListItem.module.scss';
import Link from 'next/link';

const NavListItem = ({ className, item }) => {
  const nestedItems = (item.children || []).map((item) => {
    return <NavListItem key={item.id} item={item} />;
  });

  return (
    <p key={item.id} className="mx-2">
      {!item.path.includes('http') && !item.target && (
        <Link href={item.path} title={item.title}>
          {item.label}
        </Link>
      )}
      {item.path.includes('http') && (
        <a href={item.path} title={item.title} target={item.target}>
          {item.label}
        </a>
      )}

      {nestedItems.length > 0 && <ul className={className}>{nestedItems}</ul>}
    </p>
  );
};

export default NavListItem;
