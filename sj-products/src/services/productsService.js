const baseUrl = 'http://localhost:3030/data/products'

export async function getAllProducts () {
    
    const response = await fetch(baseUrl);

    const products = await response.json();

    return products; 
}

export async function addProduct({productData}) {

    const result = await fetch(baseUrl, {
        headers: {
           'content-type': 'application/json'
        },
        method: 'POST', 
        body: JSON.stringify(productData)
    })

    if (response.status === 204) {
        return {};
    }

    if (!response.ok) {
        throw result;
    } 

    return result;
}
