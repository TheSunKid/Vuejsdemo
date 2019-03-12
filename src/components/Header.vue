<template>
   <header>
       <div class="container">
            <div class="top-header">
                <div class="col-lg-2">
                    <a href="/">
                    <img width="135" src="//cdn.shopify.com/s/files/1/0158/1413/1812/files/Logo_hooli.svg?16991553200491005005" alt="hooli-boutique">
                    </a>   
                </div>
                <div class="col-lg-10">
                    <div class="wrapper-content">
                        <ul class="nav nav-pills">
                        <router-link tag="li" to="/"><a>Home</a></router-link>
                        <router-link tag="li" to="/products"><a>Category</a></router-link>
                        <router-link tag="li" to="/about"><a>About Us</a></router-link>
                        <router-link tag="li" to="/posts"><a>Page Content</a></router-link>
                        <router-link tag="li" to="/search"><a>Search</a></router-link>
                        <router-link tag="li" to="/login"><a>Log in</a></router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
   </header>
</template>
<script>
export default {
    data(){
        return {}
    }

}
</script>
<style scoped>
header{
    margin-bottom: 30px;
    border-bottom: 2px solid #222;
}
.top-header{
    height:150px;
    align-items:center;
    display:flex;
}
.nav{
}
.nav li{
    padding-left: 20px;
    padding-right: 20px;
}
.nav li a{
    font-size: 13px;
    line-height: 3rem;
    font-weight:500;
    color:black;
    text-transform: uppercase
}

.nav>li>a:focus, .nav>li>a:hover{
    background-color:transparent;
}
</style>