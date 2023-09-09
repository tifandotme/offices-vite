import { useForm } from "react-hook-form"
import { v4 as uuid } from "uuid"

import { addOffice, AddOfficeBody, DATA } from "@/lib/mock-adapter"
import { queryClient } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { CloseIcon } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"

export function AddForm({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddOfficeBody>()

  const toast = useToast()

  const onSubmit = async (data: AddOfficeBody) => {
    const { title, address, email, fullname, job, phone } = data

    const res = await addOffice(data)

    DATA.push({
      id: uuid(),
      title,
      address,
      detail: {
        email,
        fullname,
        job,
        phone,
      },
    })

    toast(res.message)

    await queryClient.invalidateQueries({ queryKey: ["officeData"] })

    onClose()
  }

  return (
    <div className="rounded-lg bg-white">
      <div className="flex items-center justify-between px-6 py-4 leading-6">
        <span className="font-bold text-darkblue">Add location</span>
        <button onClick={onClose}>
          <CloseIcon className="text-grey" />
        </button>
      </div>
      <form
        className="flex flex-col gap-6 p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Title"
          id="title"
          type="text"
          placeholder="Headquarters"
          required
          error={errors.title?.message}
          {...register("title", { required: "This field cannot be empty" })}
        />
        <Input
          label="Enter the address"
          id="address"
          type="text"
          placeholder="3763 W. Dallas St."
          required
          error={errors.address?.message}
          {...register("address", { required: "This field cannot be empty" })}
        />

        <div className="inline-flex flex-col gap-4">
          <span className="inline-flex h-[1.4375rem] items-end text-xs uppercase tracking-[0.015rem] text-blue">
            Contact Information
          </span>
          <hr />
        </div>

        <Input
          label="Full name"
          id="name"
          type="text"
          placeholder="John Doe"
          required
          error={errors.fullname?.message}
          {...register("fullname", { required: "This field cannot be empty" })}
        />
        <Input
          label="Job position"
          id="occupation"
          type="text"
          required
          error={errors.job?.message}
          {...register("job", {
            required: "This field cannot be empty",
          })}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="name@example.com"
          required
          error={errors.email?.message}
          {...register("email", { required: "This field cannot be empty" })}
        />
        <Input
          label="Phone"
          id="phone"
          type="tel"
          placeholder="(xxx) xxx-xxxx"
          required
          error={errors.phone?.message}
          {...register("phone", { required: "This field cannot be empty" })}
        />
        <div className="inline-flex items-center gap-4">
          <button
            className="self-start rounded-[0.25rem] bg-blue px-4 py-2 text-white"
            type="submit"
          >
            Save
          </button>

          {isSubmitting && <span>Loading...</span>}
        </div>
      </form>
    </div>
  )
}
