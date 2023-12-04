const baseUrl = 'http://localhost:3030/data/products'

export async function getAllProducts () {
    
    const response = await fetch(baseUrl);

    const products = await response.json();

    return products; 
}
