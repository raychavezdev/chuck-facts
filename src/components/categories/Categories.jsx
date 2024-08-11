import { useEffect, useState } from 'react'
import useCategories from '../../hooks/useCategories'
import './Categories.css'
import CategoriesItem from './CategoriesItem'

const Categories = ({ setCategory }) => {
  const { fetchCategories, categories, loading, error } = useCategories()
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleChange = (e) => {
    setCategory(e.target.value)
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="mt-4">
      <h2 className="mb-2 text-center text-xl font-extrabold">Categories</h2>
      <ul className="flex flex-wrap justify-center gap-2">
        {loading && <p className="flex-3">Loading Categories...</p>}
        {error && <p className="flex-3">Error: {error}</p>}

        {!loading &&
          categories &&
          categories.map((category, i) => (
            <CategoriesItem
              category={category}
              key={i}
              handleChange={handleChange}
              isChecked={selectedCategory === category}
            />
          ))}
      </ul>
    </div>
  )
}

export default Categories
