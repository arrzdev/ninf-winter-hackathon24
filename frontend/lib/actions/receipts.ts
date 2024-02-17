"use server"

export const getReceipts = async() => {

    const receipt = await fetch("http://localhost:5000/receipts");

    let res = await receipt.json();

    return res;

}

export const getReceiptData = async(slug: string) => {

    const receipt = await fetch(`http://localhost:5000/receipts/${slug}`);

    let res = await receipt.json();

    return res;

}