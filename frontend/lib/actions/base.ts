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


export const getProductsSearch = async (searchParams: {
  category?: string;
  supermarket?: string;
  sort?: string;
  q?: string;
}) => {
  // Base url
  let urlToScrape: string = "https://www.kabaz.pt/search";

  if (searchParams.category) {
    urlToScrape += `/c/${searchParams.category}`;
  }

  if (searchParams.supermarket) {
    urlToScrape += `/loja/${searchParams.supermarket}`;
  }

  if (searchParams.q) {
    urlToScrape += `?q=${searchParams.q}`;
  }

  if (searchParams.sort) {
    if (searchParams.q) {
      urlToScrape += `&ordem=${searchParams.sort}`;
    }
    else {
      urlToScrape += `?ordem=${searchParams.sort}`;
    }
  }

  // Fetch the data and return the list of hits
  var hits = []
  try {
    const response = await fetch(urlToScrape);
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

export const getProductData = async (productSlug: string) => {
  const url: string = `https://www.kabaz.pt/products/${productSlug}`;

  var productData = {}
  try {
    const response = await fetch(url);
    const html = await response.text();
    const init_tag = "<script id=\"__NEXT_DATA__\" type=\"application/json\">";
    const init_data = html.indexOf(init_tag);
    const end_tag = "</script>";
    const end_data = html.indexOf(end_tag, init_data);
    const json_data = html.substring(init_data + init_tag.length, end_data);
    const endpoint_data = JSON.parse(json_data);

    const productInfo = endpoint_data.props.pageProps.trpcState.queries[3].state.data
    const storePrices = endpoint_data.props.pageProps.trpcState.queries[4].state.data

    productData = {
      productInfo: productInfo,
      storePrices: storePrices
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    productData = {};
  }

  return productData;
}
