import { useState } from 'react'
import './App.css'
import Categories from './components/categories/Categories'
import Fact from './components/fact/Fact'
import Logo from './components/logo/Logo'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const setCategory = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <Logo />
      <Fact
        category={
          selectedCategory === 'all' ? '' : '?category=' + selectedCategory
        }
      />
      <Categories setCategory={setCategory} />
    </>
  )
}

export default App
