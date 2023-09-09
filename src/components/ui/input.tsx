import React from "react"

import { cn } from "@/lib/utils"
import { ExclamationCircleIcon } from "@/components/ui/icons"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  required?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required = false, ...props }, ref) => (
    <div className="relative inline-flex flex-col gap-[0.13rem]">
      <label className="inline-flex text-darkblue" htmlFor={props.id}>
        {label}
        {required && <span className="ml-1 text-grey">*</span>}
      </label>
      <input
        className={cn(
          "rounded-[0.25rem] focus:border-blue focus:ring-0",

          error ? "border-red" : "border-darkblue/70",
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <>
          <span className="pointer-events-none absolute inset-y-0 end-0 mr-[7px] mt-[6px]  flex items-center">
            <ExclamationCircleIcon className="text-red" />
          </span>

          <span className="self-start text-xs leading-[150%] text-red">
            {error}
          </span>
        </>
      )}
    </div>
  ),
)
Input.displayName = "Input"
