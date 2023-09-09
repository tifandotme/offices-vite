import React from "react"

import { ToastContext } from "@/lib/utils"

export function useToastContext() {
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function toast(message: string) {
    setMessage(message)
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }

  return {
    open,
    setOpen,
    message,
    toast,
  }
}

export function useToast() {
  const { toast } = React.useContext(ToastContext)
  return toast
}
