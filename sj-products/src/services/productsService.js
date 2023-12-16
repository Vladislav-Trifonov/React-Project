const baseUrl = "http://localhost:3030/data/products";

export async function getAllProducts() {
  const result = await fetch(baseUrl);

  const products = await result.json();

  return products;
}

export async function getOneProduct(productId) {
  const result = await fetch(`${baseUrl}/${productId}`);

  const product = await result.json();

  return product;
}

export async function addProduct(productData) {
  const token = sessionStorage.getItem("accessToken");

  const result = await fetch(baseUrl, {
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    method: "POST",
    body: JSON.stringify(productData),
  });

  if (result.status === 204) {
    return {};
  }

  if (!result.ok) {
    throw result;
  }

  return result;
}

export async function removeProduct(productId, accessToken) {
  await fetch(`${baseUrl}/${productId}`, { 
    method: "DELETE",
    headers: {
        'content-type': 'application/json',
        "X-Authorization": accessToken,
    }
});
}

export const editProduct = async (productData, productId, accessToken) => {
    const result = await fetch(`${baseUrl}/${productId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            "X-Authorization": accessToken,
        },
        body: JSON.stringify(productData),
    });

    return result;
};