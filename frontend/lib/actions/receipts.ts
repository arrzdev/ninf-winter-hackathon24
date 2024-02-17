"use server"

export const getReceipts = async () => {

  try {
    var receipt = await fetch("http://localhost:5000/receipts");
  } catch (error) {
    console.error(error);
    return [];
  }

  let res = await receipt.json();
  return res;
}

export const getReceiptData = async (slug: string) => {

  try {
    var receipt = await fetch(`http://localhost:5000/receipts/${slug}`);
  } catch (error) {
    console.error(error);
    return [];
  }

  let res = await receipt.json();
  return res;

}