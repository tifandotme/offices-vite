import React from "react"
import * as Collapsible from "@radix-ui/react-collapsible"

import { cn } from "@/lib/utils"
import { ArrowIcon, PencilIcon, TrashIcon } from "@/components/ui/icons"

export function LocationItem() {
  const [open, setOpen] = React.useState(false)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <button
          className={cn(
            "border-of flex w-full items-center justify-between rounded-lg p-6 transition-colors duration-300 ease-out data-[state=open]:rounded-b-none",

            open ? "bg-grey text-white" : "bg-white",
          )}
        >
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold leading-9 tracking-wide data-[state=closed]:text-darkblue">
              Headquarters
            </h2>
            <span className="leading-6 data-[state=closed]:text-grey">
              3763 Dallas Street
            </span>
          </div>
          <ArrowIcon
            className={cn(
              "transition-transform duration-300",

              open ? "-rotate-180 text-white" : "text-blue ",
            )}
          />
        </button>
      </Collapsible.Trigger>
      <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-[slideUp_300ms_ease-out] data-[state=open]:animate-[slideDown_300ms_ease-out]">
        <div className="inline-flex w-full flex-col gap-2 rounded-b-lg bg-white px-8 py-6">
          <span className="text-xl font-bold leading-[150%] text-darkblue">
            Hellena John
          </span>
          <span>Software Tester</span>
          <span className="text-blue">email@email.com</span>
          <span>+62840190239</span>

          <hr className="my-2" />

          <div className="flex justify-between">
            <button className="inline-flex items-center gap-2 text-xs text-grey">
              <PencilIcon />
              <span>EDIT</span>
            </button>
            <button className="inline-flex items-center gap-2 text-xs text-red">
              <TrashIcon />
              <span>DELETE</span>
            </button>
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
