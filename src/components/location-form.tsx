import { useForm } from "react-hook-form"

import { type LocationForms } from "@/types"
import { CloseIcon } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"

export function LocationForm({
  onClose,
}: {
  onClose: React.MouseEventHandler<HTMLButtonElement>
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationForms>()

  const onSubmit = (data: LocationForms) => {
    console.log(data)
  }

  return (
    <div className="rounded-lg bg-white">
      <div className="flex items-center justify-between px-6 py-4 leading-6">
        <span className="font-bold text-darkblue">New Location</span>
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
          placeholder="Headquarter"
          required
          error={errors.title?.message}
          {...register("title", { required: "This field cannot be empty" })}
        />
        <Input
          label="Enter the address"
          id="address"
          type="text"
          placeholder="3832 Sdasj Street"
          required
          error={errors.address?.message}
          {...register("address", { required: "This field cannot be empty" })}
        />
        <Input
          label="Full name"
          id="name"
          type="text"
          placeholder="John Doe"
          required
          error={errors.name?.message}
          {...register("name", { required: "This field cannot be empty" })}
        />
        <Input
          label="Job position"
          id="occupation"
          type="text"
          placeholder="Carpenter"
          required
          error={errors.occupation?.message}
          {...register("occupation", {
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
        <button
          className="self-start rounded-[0.25rem] bg-blue px-4 py-2 text-white"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  )
}
