import { useSearchParams } from "react-router-dom"
import Select from "./Select"

export default function SortyBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBy = searchParams.get("sortBy") || ""

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value)
    setSearchParams(searchParams)
  }
  3

  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  )
}
