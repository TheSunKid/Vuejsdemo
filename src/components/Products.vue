<template>
<div class="container">
  <div class="">
    <router-link v-bind:to="{ name: 'AddProduct' }" class="add_product"> Need more product ? Add now</router-link>
  </div>
  <div class="products">
    <h1 class="page-title">This Page Will Show All Products</h1>
    <div class="row">
        <div v-if="products.length > 0">
            <div class="product-grid col-lg-3" v-for="product in products" :key="product._id">
                <div class="product-top">
                  <img class="img" :alt="product.product_name" :src="product.image_url" >
                    <div class="product-bottom">
                        <div class="product-title">
                          <h4>{{product.product_name}}</h4>
                        </div>  
                        <div class="product-price">
                        Giá :  {{product.product_price | currency }} vnđ
                        </div> 
                        <div class="product-description">
                          <p>{{product.description}}</p>
                        </div>  
                    </div>
                </div> 
            </div>
        </div>  
        <div class="nopost" v-else>No Post. Click Add Post
          <br>
          <br>
          <a href="google.com">Add a sample product now ?</a>
        </div>
    </div> 
  </div> 
</div>
</template>
<script>
import ProductsService from "@/service/ProductService";

export default {
  name : 'Products',
  data(){
    return{
      products:[]
    }
  },
  mounted(){
    this.GetProducts();
  },
  methods: {
    async GetProducts(){
      const response = await ProductsService.getProduct();
      this.products  = response.data.products 
    }
  }
}
</script>
<style scoped>
h1.page-title{
  text-align:center;
  font-size: 25px;
  margin-bottom: 50px;
  border-bottom: 1px solid;
  padding-bottom: 40px;
}
  img{
    max-width:200px;
  }
  .product-title{
     overflow: hidden;
    line-height: 1.3em;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    clear: both;
    padding: 0 10px;
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;  
  } 
  .product-title h4{
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    margin-top: 25px;
  }
  .product-price{
    padding: 0 10px 5px;
    padding: 0 10px 5px;
    color: #e10c00;
    font-weight: bold;
  }
  .product-description{
    padding: 0 10px 5px;
    color:black;
  }
  .product-top{
    margin: 15px 0px;
  }
</style>