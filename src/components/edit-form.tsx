import { useForm } from "react-hook-form"

import {
  AddOfficeBody,
  DATA,
  updateOffice,
  type OfficesResponse,
} from "@/lib/mock-adapter"
import { queryClient } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { CloseIcon } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"

export function EditForm({
  data,
  onClose,
}: {
  data: OfficesResponse["data"][number]
  onClose: () => void
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddOfficeBody>()

  const toast = useToast()

  const onSubmit = async (newData: AddOfficeBody) => {
    const { title, address, email, fullname, job, phone } = newData

    const res = await updateOffice("1", newData) // data.id

    const index = DATA.findIndex((item) => item.id === data.id)
    if (index === -1) return

    DATA[index] = {
      id: data.id,
      title,
      address,
      detail: {
        email,
        fullname,
        job,
        phone,
      },
    }

    toast(res.message)

    await queryClient.invalidateQueries({ queryKey: ["officeData"] })

    onClose()
  }

  return (
    <div className="rounded-lg bg-white">
      <div className="flex items-center justify-between px-6 py-4 leading-6">
        <span className="font-bold text-darkblue">Edit location</span>
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
          defaultValue={data.title}
          error={errors.title?.message}
          {...register("title")}
        />
        <Input
          label="Enter the address"
          id="address"
          type="text"
          defaultValue={data.address}
          error={errors.address?.message}
          {...register("address")}
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
          defaultValue={data.detail.fullname}
          error={errors.fullname?.message}
          {...register("fullname")}
        />
        <Input
          label="Job position"
          id="occupation"
          type="text"
          defaultValue={data.detail.job}
          error={errors.job?.message}
          {...register("job")}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          defaultValue={data.detail.email}
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Phone"
          id="phone"
          type="tel"
          defaultValue={data.detail.phone}
          error={errors.phone?.message}
          {...register("phone")}
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
