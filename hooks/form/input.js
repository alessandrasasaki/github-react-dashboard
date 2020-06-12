import { useState } from "react"

export function useInput({ type, placeholder, className }) {
  const [value, setValue] = useState("")
  const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} placeholder={placeholder} className={className} />
  return [value, input]
}
