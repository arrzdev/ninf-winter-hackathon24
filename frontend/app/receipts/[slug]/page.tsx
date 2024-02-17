import React from 'react'
import { getReceiptData } from '@/lib/actions/receipts'
import { type IReceipt, IReceiptEntry } from '@/lib/types'
import { capitalizeText, storeColorMap } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css'

const ReceiptEntry = ({ entry }: { entry: IReceiptEntry }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row">
        <h3 className="text-md tracking-tight leading-tight">{entry.quantity}x {entry.name}</h3>
      </div>
      <div className="flex flex-col">
        <p className="text-md font-bold tracking-tight leading-tight">{(entry.price * entry.quantity).toFixed(2)}€</p>
      </div>
    </div>
  )
}

const ReceiptPage = async ({ params }: any) => {
  const receiptData = await getReceiptData(params.slug) as IReceipt;

  return (
    <div className="bg-white rounded-md shadow group relative grid gap-x-4 m-4">
      <div className="relative">
        <div className="flex flex-col justify-between space-y-6 p-5 md:space-y-8 xl:sticky xl:top-24 xl:min-h-[calc(100vh_-_var(--topbarHeight))] xl:px-10 xl:py-12">
          <div className="flex flex-row justify-between items-center">
            <Link href="/receipts">
              <section className="flex flex-col text-center">
                <FontAwesomeIcon icon={faLeftLong} size="2xl" />
                <p className="text-lg tracking-tight leading-tight">Voltar</p>
              </section>
            </Link>
            <section className="flex flex-col gap-4 text-right">
              <header>
                <h1 className="text-3xl font-bold tracking-tight leading-tight md:text-4xl lg:text-3xl 9xl:text-5xl 9xl:leading-none">{receiptData.date}</h1>
                <h2 className={`text-base text-xl font-bold text-primary-600 tracking-normal leading-5 ${storeColorMap[receiptData.store]}`}>
                        {receiptData.store.split("-").map(capitalizeText).join(" ")}</h2>
              </header>
            </section>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-2xl font-bold tracking-tight leading-tight mb-4">Produtos</h3>
            <div className="flex flex-col gap-4">
              {receiptData.products.map((entry: IReceiptEntry, index: number) => (
                <ReceiptEntry key={index} entry={entry} />
              ))}
            </div>
            <div className="flex flex-row justify-between items-center mt-4">
              <p className="text-2xl font-bold tracking-tight leading-tight">Total</p>
              <p className="text-2xl font-bold tracking-tight leading-tight">{receiptData.total}€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReceiptPage;
