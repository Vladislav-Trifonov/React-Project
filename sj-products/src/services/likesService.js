const baseUrl = "http://localhost:3030/data/likes";

export async function addLike(productId) {
    const token = sessionStorage.getItem("accessToken");
  
    const result = await fetch(baseUrl, {
      headers: {
        "content-type": "application/json",
        "X-Authorization": token,
      },
      method: "POST",
      body: JSON.stringify(productId)
    });
  
    if (result.status === 204) {
      return {};
    }
  
    if (!result.ok) {
      throw result;
    }
  
    return result;
  }

  export async function testReq(productId) {
    const token = sessionStorage.getItem("accessToken");
  
    const result = await fetch('http://localhost:3030/data/test', {
      headers: {
        "content-type": "application/json",
        "X-Authorization": token,
      },
      method: "POST",
      body: JSON.stringify({productId})
    });
  
    if (result.status === 204) {
      return {};
    }
  
    if (!result.ok) {
      throw result;
    }
  
    return result;
  }