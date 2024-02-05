export const OrdersService ={
    getprevOrders(orders){
        return orders.filter((ord) => ord.isPaymentCompleted === true);
      },
      getCart(orders){
        return orders.filter((ord) => ord.isPaymentCompleted === false);
      }
}

export const ProductService = {
   getProductByProductId(products,productId){
   return  products.find(
        (prod) => prod.id == productId
      )
   },
   fetchProducts(){
    return fetch(`http://localhost:4000/products`,{
        method: "GET",
      })
   }
}

export const BrandService = {
  fetchBrands(){
   return fetch(`http://localhost:4000/brands`,{
       method: "GET",
     })
  },
  getBrandByBrandId(brands,brandId){
    return brands.find(brand=>{
      return brand.id==brandId 
    })
  }
}

export const CategoriesServices = {
  fetchCategories(){
   return fetch(`http://localhost:4000/categories`,{
       method: "GET",
     })
  },
  getCategoryByCategoryId(categories,categoryId){
    return categories.find(categories=>{
      return categories.id===categoryId
    })
  }
}
