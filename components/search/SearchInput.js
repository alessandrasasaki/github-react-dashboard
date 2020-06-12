import { useInput } from "../../hooks/form/input"
import { useEffect } from "react"
import { useDebouncedCallback } from "use-debounce"

export default function SearchInput({ onSearchUpdate, placeholder = "Type your search...", className="user-input" }) {
  const [search, searchInput] = useInput({ placeholder, type: "text", className })
  const [onSearchUpdateDebounced] = useDebouncedCallback((value) => {
    onSearchUpdate(value);
  }, 500, { maxWait: 2000 })

  const handleSubmit = (e) => {
    onSearchUpdateDebounced(search)
    e.preventDefault()
  }

  useEffect(() => {
    onSearchUpdateDebounced(search)
  }, [search])

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      {searchInput}
    </form>
  )
}
