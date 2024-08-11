const CategoriesItem = ({ category, handleChange, isChecked }) => {
  return (
    <li
      key={category}
      className="relative flex cursor-pointer flex-row-reverse items-center gap-x-1"
    >
      <input
        type="radio"
        id={category}
        name="categories"
        className="invisible cursor-pointer"
        onChange={handleChange}
        value={category}
        checked={isChecked}
      />
      <label htmlFor={category} className="cursor-pointer text-sm sm:text-base">
        {category}
      </label>
    </li>
  )
}

export default CategoriesItem
