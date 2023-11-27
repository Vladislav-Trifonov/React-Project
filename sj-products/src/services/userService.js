const baseUrl = 'http://localhost:3030/users';

export async function login(email, password) {
  try {
    const response = await fetch(baseUrl + '/login', {
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error('Incorrect login details, please try again!');
    }

    return response.json();
  } catch (error) {
    console.error('Error during login:', error);
    throw error; 
  }
}