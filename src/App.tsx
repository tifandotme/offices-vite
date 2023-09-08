import { AddLocation } from "@/components/add-location"
import { LocationItem } from "@/components/location-item"

export default function App() {
  return (
    <>
      <header className="mb-12 text-center text-[4rem] font-light leading-[100%] text-blue">
        Offices
      </header>
      <main className="flex flex-col gap-[1.56rem]">
        <AddLocation />

        <LocationItem />
        <LocationItem />
      </main>
      <footer>tes</footer>
    </>
  )
}
