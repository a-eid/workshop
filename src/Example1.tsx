import * as React from "react"
import axios from "axios"
import { useQuery } from "react-query"

export function Example1() {
  const [page, setPage] = React.useState(1)
  const {
    data = [],
    isFetching,
    isLoading,
  } = useQuery(["pokemon", page], async () => {
    await new Promise(res => setTimeout(res, 3000))
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${20 * page}&limit=20`)
    return data
  })

  return (
    <div>
      <h2>{isFetching ? "fetching..." : "fetched"}</h2>
      <h2>{isLoading ? "loading..." : "loaded"}</h2>
      {data.results?.map((p: any) => (
        <h4 key={p.name}>{p.name}</h4>
      ))}

      <button disabled={page === 1} onClick={() => setPage(1)}>
        1
      </button>
      <button disabled={page === 2} onClick={() => setPage(2)}>
        2
      </button>
      <button disabled={page === 3} onClick={() => setPage(3)}>
        3
      </button>
      <button disabled={page === 4} onClick={() => setPage(4)}>
        4
      </button>
    </div>
  )
}
