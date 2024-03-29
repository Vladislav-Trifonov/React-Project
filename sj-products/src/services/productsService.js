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
      "content-type": "application/json",
      "X-Authorization": accessToken,
    },
  });
}

export const editProduct = async (productData, productId, accessToken) => {
  const result = await fetch(`${baseUrl}/${productId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": accessToken,
    },
    body: JSON.stringify(productData),
  });

  return result;
};

export const getPersonalProducts = async (userId) => {
  const url = `http://localhost:3030/data/products?where=_ownerId%3D%22${userId}%22&sortBy=name`;

  const result = await fetch(url);

  const personalProducts = await result.json();

  return personalProducts;
};

export const search = async (productName) => {
  const url = `http://localhost:3030/data/products?where=name%20LIKE%20%22${productName}%22`;

  const result = await fetch(url);

  const searchResults = await result.json();

  console.log(searchResults);

  return searchResults;
};

export const productsList = [
  {
    _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
    productId: "3987279d-0ad4-4afb-8ca9-5b256ae3b298",
    name: "ПДЧ",
    price: 30,
    description:
      "Плочите от пресовани дървесни частици (ПДЧ) дават нужната структурна здравина на мебелите, а декоративното покритие от меламин добавя стил",
    img: "https://www.eurotrading.bg/images/catalogs/large/laminirani-ploskostib.jpg",
    _createdOn: 1613551279012,
  },
  {
    _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
    productId: "985d9eab-ad2e-4622-a5c8-116261fb1fd2",
    name: "Плотове",
    price: 50,
    description:
      "Създаден от висококачествени материали, нашият кухнен плот предлага несравнен стил и издръжливост.",
    img: "https://ibuilder.techinfus.com/images/article/croppedtop/718-400/2018/12/osobennosti-stoleshnic-pod-derevo-dlya-kuhni-24.jpg",
    _createdOn: 1613551344360,
  },
  {
    _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
    productId: "0a272c58-b7ea-4e09-a000-7ec988248f66",
    name: "Мебелни кантове",
    price: 10,
    description:
      "Нашите мебелни кантове са изработени от висококачествени материали, които осигуряват дълготрайна защита на ръбовете от удари, надрасквания и влага.",
    img: "https://s.alicdn.com/@sc04/kf/H28e424cc72bd405d829d41ce75189065R.jpg_300x300.jpg",
    _createdOn: 1613551344360,
  },
  {
    _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
    productId: "8f414b4f-ab39-4d36-bedb-2ad69da9c830",
    name: "МДФ",
    price: 40,
    description:
      "МДФ - плоскости от дървесни влакна със средна плътност, по-здрав и много по-плътен продукт от шперплат или ПДЧ.",
    img: "https://bulsilva.com/wp-content/uploads/2017/05/furnirovaniPDC-min.jpg",
    _createdOn: 1613551344360,
  },
  {
    _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
    productId: "8f414b4f-ab39-4d36-bedb-2ad69da9c830",
    name: "Мивки",
    price: 40,
    description:
      "МДФ - плоскости от дървесни влакна със средна плътност, по-здрав и много по-плътен продукт от шперплат или ПДЧ.",
    img: "https://www.deltafaucet.com/sites/delta/files/2023-03/sink-types.jpg",
    _createdOn: 1613551344360,
  },
];

export const productsPdch = [
  {
    name: "ПДЧ W960 SM 2800x2070x25 EG класическо бяло",
    img: "https://www.eurotrading.bg/images/products/large/3513-MFC-W960-SM-18mm.jpg",
    price: "178.50 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U599 ST9 2800x2070x18 EG индиго",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U599-ST9-18mm.jpg",
    price: "198.50 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U163 ST9 2800x2070x18 EG къри",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U163-ST9-18mm.jpg",
    price: "198.50 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U740 ST9 2800x2070x18 EG тауп тъмен",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U740-ST9-18mm.jpg",
    price: "162.00 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ W1200 ST9 2800x2070x18 EG порцелан",
    img: "https://www.eurotrading.bg/images/products/large/MFC-W1200-ST9-18mm.jpg",
    price: "173.80 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ W1200 ST9 2800x2070x18 EG порцелан",
    img: "https://www.eurotrading.bg/images/products/large/MFC-W1200-ST9-18mm.jpg",
    price: "173.80 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U961 ST7 2800x2070x18 EG графит",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U961-ST7-18mm.jpg",
    price: "132.00 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ W960 SM 2800x2070x18 EG класическо бяло",
    img: "https://www.eurotrading.bg/images/products/large/MFC-W960-SM-18mm.jpg",
    price: "105.50 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ W960 ST7 2800x2070x18 EG класическо бяло",
    img: "https://www.eurotrading.bg/images/products/large/MFC-W960-ST7-18mm.jpg",
    price: "105.50 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U604 ST9 2800x2070x18 EG евкалиптово зелено",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U604-ST9-18mm.jpg",
    price: "198.50 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U125 ST9 2800x2070x18 EG пясъчно жълто",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U125-ST9-18mm.jpg",
    price: "198.50 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U211 ST9 2800x2070x18 EG бадем",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U211-ST9-18mm.jpg",
    price: "168.80 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U638 ST9 2800x2070x18 EG салвия",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U638-ST9-18mm.jpg",
    price: "168.80 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U999 ST7 2800x2070x18 EG черно",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U999-ST7-18mm.jpg",
    price: "132.00 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U705 ST9 2800x2070x18 EG сива ангора",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U705-ST9-18mm.jpg",
    price: "162.00 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U502 ST9 2800x2070x18 EG мъгливо синьо",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U502-ST9-18mm.jpg",
    price: "198.50 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U636 ST9 2800x2070x18 EG фиорд",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U636-ST9-18mm.jpg",
    price: "198.50 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U963 ST9 2800x2070x8 EG антрацит",
    img: "https://www.eurotrading.bg/images/products/large/3427-MFC-U963-ST9-18mm.jpg",
    price: "132.00 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
  {
    name: "ПДЧ U999 TM28 черно 2800x2070x18 EG",
    img: "https://www.eurotrading.bg/images/products/large/MFC-U999-TM28-18mm.jpg",
    price: "422.00 лв",
    brand: "EGGER",
    dimensions: "2800x2070x18mm",
  },
];
