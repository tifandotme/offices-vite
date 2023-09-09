import React from "react"
import { QueryClient } from "@tanstack/react-query"

import { useToastContext } from "@/hooks/use-toast"

export function cn(...args: unknown[]): string | undefined {
  return (
    args
      .flat()
      .filter((x) => typeof x === "string")
      .join(" ")
      .trim() || undefined
  )
}

// prettier-ignore
export const ToastContext = React.createContext<ReturnType<typeof useToastContext>>({
  open: false,
  setOpen: () => {},
  message: "",
  toast: () => {},
})

export const queryClient = new QueryClient()
