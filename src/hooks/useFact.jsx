import { useState } from 'react'

const useFact = (category) => {
  const [fact, setFact] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchFact = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        'https://api.chucknorris.io/jokes/random' + category
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setFact(data.value)
    } catch (err) {
      setError(err.message)
      setFact(null)
    } finally {
      setLoading(false)
    }
  }

  return { fetchFact, fact, loading, error }
}

export default useFact
