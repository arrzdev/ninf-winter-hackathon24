"use server";

import { revalidatePath } from "next/cache";

// //simple example of protected routes
// export const amIadmin = async () => {
//   const adminSession = await useAdminSession();
//   if (!adminSession) return false

//   return true;
// }

// export const amIuser = async () => {
//   const userSession = await useSession();
//   if (!userSession) return false

//   return true;
// }


export const getProductsSearch = async (searchQuery: string) => {
  const categories: string[] = [
    "alternativas-alimentares",
    "animais",
    "bebés",
    "bebidas",
    "bricolage-auto-e-jardim",
    "casa",
    "charcutaria",
    "congelados",
    "frutas-e-legumes",
    "higiene-e-beleza",
    "laticínios-e-ovos",
    "lazer",
    "mercearia",
    "padaria-e-pastelaria",
    "talho-e-peixaria"
  ];

  const supermercados: string[] = [
    "el-corte-inglés",
    "continente",
    "pingo-doce",
    "auchan"
  ];

  // URL to scrape
  const url: string = `https://www.kabaz.pt/search?q=${searchQuery}`;

  // Fetch the data and return the list of hits
  var hits = []
  try {
    const response = await fetch(url);
    const html = await response.text();
    const init_tag = "<script id=\"__NEXT_DATA__\" type=\"application/json\">";
    const init_data = html.indexOf(init_tag);
    const end_tag = "</script>";
    const end_data = html.indexOf(end_tag, init_data);
    const json_data = html.substring(init_data + init_tag.length, end_data);
    const endpoint_data = JSON.parse(json_data);
    hits = endpoint_data.props.pageProps.serverState.initialResults.Products.results[0].hits;
    // const hitNames: string[] = hits.map((hit: { product: { name: string; }; }) => hit.product.name);
  } catch (error) {
    console.error('Error fetching data:', error);
    hits = [];
  }

  return hits;
}