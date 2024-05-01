import { useEffect } from "react"

export function useEscapePress(handler) {
  useEffect(() => {
    const handleOnEsc = (e) => {
      if (e.keyCode === 27) {
        handler()
      }
    }
    window.addEventListener("keydown", handleOnEsc)
    return () => {
      window.removeEventListener("keydown", handleOnEsc)
    }
  }, [handler])
}
