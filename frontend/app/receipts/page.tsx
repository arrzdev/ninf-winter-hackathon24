import { getReceipts } from "@/lib/actions/receipts";
import ReceiptCard from "@/lib/components/receipt-card";

const Receipts = async () => {

  const receipts = await getReceipts()

  console.log(receipts)
  if (receipts.length === 0) {
    return (<div className="mb-14 p-6 text-center"><h1 className=" text-md font-bold">O serviço poderá estar em baixo de momento..</h1></div>)
  }

  return (
    <div className="mb-14 p-6 text-center">
      <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {(receipts).map((receipt: any) => (
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
