const baseUrl = 'http://localhost:3030/data/products'

export async function getAllProducts () {
    
    const result = await fetch(baseUrl);

    const products = await result.json();

    return products; 
}

export async function addProduct(productData) {

    const token = sessionStorage.getItem('accessToken');

    const result = await fetch(baseUrl, {
        headers: {
           'content-type': 'application/json',
           'X-Authorization': token
        },
        method: 'POST', 
        body: JSON.stringify(productData),
        
    })

    if (result.status === 204) {
        return {};
    }

    if (!result.ok) {
        throw result;
    } 

    return result;
}
