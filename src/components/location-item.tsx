import React from "react"
import * as Collapsible from "@radix-ui/react-collapsible"

import { DATA, deleteOffice, OfficesResponse } from "@/lib/mock-adapter"
import { cn, queryClient } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { ArrowIcon, PencilIcon, TrashIcon } from "@/components/ui/icons"

import { EditForm } from "@/components/edit-form"

export function LocationItem({
  data,
}: {
  data: OfficesResponse["data"][number]
}) {
  const [expanded, setExpanded] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const toast = useToast()

  const handleDelete = async () => {
    const res = await deleteOffice(data.id)

    if (res.code !== 200) return

    DATA.splice(
      DATA.findIndex((item) => item.id === data.id),
      1,
    )

    await queryClient.invalidateQueries({ queryKey: ["officeData"] })

    toast(res.message)
  }

  return (
    <>
      {open ? (
        <EditForm data={data} onClose={() => setOpen(false)} />
      ) : (
        <Collapsible.Root open={expanded} onOpenChange={setExpanded}>
          <Collapsible.Trigger asChild>
            <button
              className={cn(
                "border-of flex w-full items-center justify-between rounded-lg p-6 transition-colors duration-300 ease-out data-[state=open]:rounded-b-none",

                expanded ? "bg-grey text-white" : "bg-white",
              )}
            >
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-bold leading-9 tracking-wide data-[state=closed]:text-darkblue">
                  {data.title}
                </h2>
                <span className="leading-6 data-[state=closed]:text-grey">
                  {data.address}
                </span>
              </div>
              <ArrowIcon
                className={cn(
                  "transition-transform duration-300",

                  expanded ? "-rotate-180 text-white" : "text-blue",
                )}
              />
            </button>
          </Collapsible.Trigger>
          <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-[slideUp_300ms_ease-out] data-[state=open]:animate-[slideDown_300ms_ease-out]">
            <div className="inline-flex w-full flex-col gap-2 rounded-b-lg bg-white px-8 py-6">
              <span className="text-xl font-bold leading-[150%] text-darkblue">
                {data.detail.fullname}
              </span>
              <span>{data.detail.job}</span>
              <span className="text-blue">{data.detail.email}</span>
              <span>{data.detail.phone}</span>

              <hr className="my-2" />

              <div className="flex justify-between">
                <button
                  className="inline-flex items-center gap-2 text-xs text-grey"
                  onClick={() => setOpen(true)}
                >
                  <PencilIcon />
                  <span>EDIT</span>
                </button>
                <button
                  className="inline-flex items-center gap-2 text-xs text-red"
                  onClick={handleDelete}
                >
                  <TrashIcon />
                  <span>DELETE</span>
                </button>
              </div>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </>
  )
}
