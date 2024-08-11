import { useEffect } from 'react'
import useFact from '../../hooks/useFact'
import Button from '../button/Button'

const Fact = ({ category }) => {
  const { fetchFact, fact, loading, error } = useFact(category)
  useEffect(() => {
    fetchFact()
  }, [])
  return (
    <div className="s mt-4 flex h-[250px] w-full flex-col items-center justify-center gap-4">
      <div className="grid h-full w-full place-items-center overflow-auto rounded-md border border-black bg-slate-50/45 p-4">
        {loading && <p>Loading Fact...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && fact && <p className="text-center text-clamp">{fact}</p>}
      </div>
      <Button text="Get Fact" handleClick={fetchFact} />
    </div>
  )
}

export default Fact
