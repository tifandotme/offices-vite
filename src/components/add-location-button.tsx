import React from "react"

import { AddForm } from "@/components/add-form"
import { PlusIcon } from "@/components/ui/icons"

export function AddLocationButton() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {open ? (
        <AddForm onClose={() => setOpen(false)} />
      ) : (
        <button
          className="flex items-center justify-between gap-6 rounded-lg bg-blue px-6 py-4 leading-6 text-lightgrey shadow-of"
          onClick={() => setOpen(true)}
        >
          <span>Add New Location</span>
          <PlusIcon />
        </button>
      )}
    </>
  )
}
