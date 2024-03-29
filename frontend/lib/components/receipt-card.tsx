import { capitalizeText } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { storeColorMap } from "@/lib/utils";

const ReceiptCard = ({ receiptData }: any) => {
    return (
        <Link href={`/receipts/${receiptData.id}`}>
            <div className="bg-white rounded-md shadow group relative grid grid-cols-[80px,1fr,auto] gap-x-4 p-4 md:flex md:flex-col md:space-y-2 items-center">
                <div className="relative">
                    <Image
                        src={`/store_logos/${receiptData.store}.png`}
                        alt="..."
                        width={160}
                        height={160}
                        quality={40}
                        placeholder="empty"
                        className="rounded-sm aspect-square bg-#FFF object-center w-full hover:scale-105 transition-opacity duration-300 ease-in-out"
                    />
                </div>
                <div className="flex flex-col text-left">
                    <h2 className={`text-primary-600 font-bold text-lg ${storeColorMap[receiptData.store]}`}>
                        {receiptData.store.split("-").map(capitalizeText).join(" ")}
                    </h2>
                    <p className="text-neutral-500 text-md mb-0">{receiptData.date}</p>
                </div>
                <div className="flex justify-end">
                    <h3 className="text-[#171614] font-bold leading-5 mb-1 line-clamp-3 text-2xl">{receiptData.total}€</h3>
                </div>
            </div>
        </Link>
    );
};


export const ReceiptSkeleton = () => {
    return (
        <div className="bg-white rounded-md shadow group relative grid grid-cols-[80px,1fr,auto] gap-x-4 p-4 md:flex md:flex-col md:space-y-2 items-center">
            <div className="relative">
                <div className="w-full h-100px bg-gray-200 animate-pulse rounded-sm aspect-square">
                    <br />
                    <br />
                    <br />
                </div>
            </div>
            <div className="flex flex-col text-left">
                <div className="mb-1 text-lg line-clamp-3 bg-gray-200 animate-pulse w-1/2 h-4 rounded-md"></div>
                <div className="my-1 line-clamp-3 bg-gray-200 animate-pulse w-2/5 h-4 rounded-md"></div>
            </div>
            <div className="flex justify-end">
                <div className="mb-1 text-2xl line-clamp-3 bg-gray-200 animate-pulse w-full h-4 rounded-mdq"></div>
            </div>
        </div>
    );
};

export default ReceiptCard;