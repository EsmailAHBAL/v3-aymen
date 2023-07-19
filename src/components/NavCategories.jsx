export default function NavCategories({ parent, childrens }) {
  return (
    <div className="flex justify-center items-center text-sm  gap-x-2">
      <select value="p-2  rounded-lg  bg-white">
        <option value="px-3">{parent}</option>
        {childrens.map((c, i) => (
          <option key={i} value={c.name} className="bg-red-200">
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
