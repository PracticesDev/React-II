import axios from "axios";



const productsApi = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  
});



export { productsApi };