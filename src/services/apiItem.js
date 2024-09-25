const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function singleProductLoader(productId) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  if (!response.ok) {
    throw new Error("Failed to load product");
  }
  return response.json();
}

export async function limitProduct() {
  const res = await fetch("https://fakestoreapi.com/products?limit=2");
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
}
