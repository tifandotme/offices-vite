import React from "react"
import * as Toast from "@radix-ui/react-toast"

import { ToastContext } from "@/lib/utils"
import { useToastContext } from "@/hooks/use-toast"
import { CheckIcon, Close2Icon } from "@/components/ui/icons"

export function Toaster() {
  const { open, setOpen, message } = React.useContext(ToastContext)

  return (
    <>
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="relative flex h-20 w-full items-center justify-center border-t-[2px] border-blue bg-white"
      >
        <Toast.Title className="inline-flex items-center gap-4">
          <CheckIcon className="text-blue" />
          <span className="leading[100%] text-xs uppercase tracking-[0.015rem]">
            {message}
          </span>
        </Toast.Title>
        <Toast.Close className="absolute inset-y-0 right-8 ">
          <Close2Icon className="text-grey" />
        </Toast.Close>
      </Toast.Root>

      <Toast.Viewport className="fixed left-0 top-0 z-[2147483647] m-0 flex w-full max-w-[100vw] list-none" />
    </>
  )
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <Toast.Provider duration={3000}>
      <ToastContext.Provider value={useToastContext()}>
        {children}

        <Toaster />
      </ToastContext.Provider>
    </Toast.Provider>
  )
}
