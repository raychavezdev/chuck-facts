import { useState } from 'react'

const useCategories = () => {
  const [categories, setCategories] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        'https://api.chucknorris.io/jokes/categories'
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      data.unshift('all')
      setCategories(data)
    } catch (err) {
      setError(err.message)
      setCategories(null)
    } finally {
      setLoading(false)
    }
  }
  return { fetchCategories, categories, loading, error }
}

export default useCategories
