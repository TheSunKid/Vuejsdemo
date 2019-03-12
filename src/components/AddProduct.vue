<template>
  <div class="container">
    <h3>Add New Product</h3>
      <!-- <div class="form-group">
        <label for="text">Product name</label>
        <input type="text" class="form-control" v-model="product_name" placeholder="Chooes your product name">
      </div>
      <div class="form-group">
        <label for="product_price">Product Price</label>
        <input type="text" class="form-control"  v-model="product_price" placeholder="Must be number">
      </div>
      <div class="form-group">
        <label for="text">Product Price</label>
        <textarea class="form-control"  v-model="product_description" placeholder="max 300 characters"></textarea>
      </div> -->
      <form action="http://localhost:8082/products/add" method="post" enctype="multipart/form-data">
          Select image to upload:
          <input type="file" name="fileToUpload" id="fileToUpload">
          <input type="submit" value="Upload Image" name="submit">
      </form>
    
        <!-- <input  @change="onFileChange" type="file" name="image_url" > 
        <button class="btn btn-submit" type="submit" @click="AddNewProduct" >Submit</button>  -->
  </div>
</template>
<script>
import ProductService from '@/service/ProductService';
export default {
  name: 'AddProduct',
  data(){
    return{
      product_image:"",
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      AddNewProduct()
    },
    async AddNewProduct(){
     ProductService.addProduct({
      
     });
    }
  }
}
</script>
<style scoped>
  .add_product_form{
    width:600px;
  }
  h3{
    margin-bottom:30px;
  }
</style>