import Link from "next/link"
import { capitalizeText, storeColorMap } from "@/lib/utils"

const FolhetosCard = ({ folhetos }: {
  folhetos: { name: string, url: string }[]
}) => {
  return (
    <>
      {
        folhetos.map((store: { name: string, url: string }, index: number) => (
          <Link href={store.url}>
            <div className={`px-3 border-solid border-[#AFBE8F] rounded-lg bg-white border-2 ${index != folhetos.length - 1 && "rounded-b-none border-b-0"} ${index != 0 && "rounded-t-none"}`} key={index}>
              <div className="flex flex-wrap items-center font-sans w-full gap-2 justify-between px-3 pt-4 pb-3">
                <div className="order-1 w-full md:w-36">
                  <div className="font-sans relative flex items-center w-full transition">
                    <h1 className={`${storeColorMap[store.name.toLowerCase()]} font-bold text-xl`}>{store.name.split("-").map(capitalizeText).join(" ")}</h1>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        ))
      }
    </>
  )
}

export default FolhetosCard