import { API } from './urls.js';

export function getAllPRoduct() {
  fetch(`${API.BASE_URL}${API.PRODUCT.products}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then(console.log);
}
