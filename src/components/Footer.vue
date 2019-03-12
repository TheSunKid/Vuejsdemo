
<template>   
  <div id="Footer">
      <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <h4 class="footer-title">Contact Us</h4>
                <div class="footer-logo">
                    <a href="#">
                        <img width="135" src="//cdn.shopify.com/s/files/1/0158/1413/1812/files/Logo_hooli.svg?16991553200491005005" alt="hooli-boutique">
                    </a>   
                    </div>
                <div class="information">
                    <ul class="list-unstyled">
                        <li> Address : PO1 3TA, Portsmouth <br> United Kingdom </li>
                        <li> Phone Number  : (+800) 6868 2268 </li>
                    </ul>    
                </div>    
            </div>
            <div class="col-lg-4">
                <h4 class="footer-title">Shop By Categories</h4>
                <div class="content">
                    <ul class="list-unstyled footer-ul">
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Man</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Kid</a></li>
                    </ul>   
                </div>   
            </div>
            <div class="col-lg-4">
                 <h4 class="footer-title">Shop By Categories</h4>
                <div class="content">
                    <ul class="list-unstyled footer-ul">
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Man</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Kid</a></li>
                    </ul>   
                </div>   
            </div>
        </div>    
      </div>
  </div>   
</template>
<script>
export default {
    data(){
        return {}
    }

}
</script>
<style scoped>

#Footer{
    padding: 6rem 0;
    margin-top:30px;
    border:2px solid #222;
}
.information{
    margin-top:30px;
}
h4.footer-title{
    color:black;
}
.footer-ul li{
    line-height: 4.2rem;
}
.footer-ul li a {
    color:black;
    font-size:13px;
    font-weight: 500;
}
</style>
