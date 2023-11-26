const baseUrl = 'http://localhost:3030/users'; 


export async function login(email, password) {

    const request = await fetch(baseUrl + '/login', {
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'},
        method: 'POST'
    })

   return request.json(); 
}