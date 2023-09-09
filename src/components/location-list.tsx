import { useQuery } from "@tanstack/react-query"

import { fetchOffices } from "@/lib/mock-adapter"
import { LocationItem } from "@/components/location-item"

export function LocationList() {
  const { isLoading, data } = useQuery({
    queryKey: ["officeData"],
    queryFn: () => fetchOffices().then((res) => res.data),
  })

  return (
    <>
      {isLoading ? (
        <span className="text-center">Loading...</span>
      ) : (
        <>
          {data &&
            data.map((item) => <LocationItem key={item.id} data={item} />)}
        </>
      )}
    </>
  )
}
