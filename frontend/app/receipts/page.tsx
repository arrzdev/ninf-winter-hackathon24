import { getReceipts } from "@/lib/actions/receipts";
import ReceiptCard from "@/lib/components/receipt-card";

const Receipts = async () => {

    const receipts = await getReceipts();
    
    return (
        <div className="mb-14 p-6 text-center">
            <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {receipts.map((receipt: any) => (
                    <ReceiptCard
                        key={receipt.id}
                        receiptData={receipt}
                    />
                ))}
            </div>
        </div>
    );
}

export default Receipts;
