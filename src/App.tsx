import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "@/lib/utils"
import { AddLocationButton } from "@/components/add-location-button"
import { LocationList } from "@/components/location-list"
import { ToastProvider } from "@/components/ui/toast"

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <header className="mb-12 text-center text-[4rem] font-light leading-[100%] text-blue">
          Offices
        </header>

        <main className="flex flex-col gap-[1.56rem]">
          <AddLocationButton />

          <LocationList />

          <footer className="flex flex-col items-center gap-2">
            <span className="leading-[150%] text-grey">
              This Project is for test purpose only.
            </span>
            <span className="text-xs uppercase leading-[100%] tracking-[0.015rem] text-blue">
              www.dogandponystudios.com
            </span>
          </footer>
        </main>
      </ToastProvider>
    </QueryClientProvider>
  )
}
