import React from "react"

import { LocationForm } from "@/components/location-form"
import { PlusIcon } from "@/components/ui/icons"

export function AddLocation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {isOpen ? (
        <LocationForm onClose={() => setIsOpen(false)} />
      ) : (
        <button
          className="flex items-center justify-between gap-6 rounded-lg bg-blue px-6 py-4 leading-6 text-lightgrey shadow-of"
          onClick={() => setIsOpen(true)}
        >
          <span>Add New Location</span>
          <PlusIcon />
        </button>
      )}
    </>
  )
}
