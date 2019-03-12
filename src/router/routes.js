import MainPage from '../components/MainPage.vue';
import About from '../components/About.vue';
import Content from '../components/Content.vue';
import Login from '../components/Login.vue';
import Category from '../components/Category.vue';
import Post from '../components/Post.vue';
import NewPost from '../components/NewPost.vue';
import EditPost from '../components/EditPost.vue';
import AddProduct from '../components/AddProduct.vue';
import Products from '../components/Products.vue';


export const routes = [
	{path: '/', component: MainPage, name: 'mainpage'},
	{path: '/about', component : About, name : 'about'},
	{path: '/content', component : Content, name : 'about'},
	{path: '/login', component : Login, name : 'login'},
	{path: '/category', component : Category, name : 'category'},
	{path: '/posts', component : Post,  name : 'post'},
	{path:'/posts/new', component: NewPost , name: 'newpost'},
	{path:'/posts/:id', component: EditPost , name: 'editpost'},
	{path:'/products', component: Products , name: 'Produts'},
	{path:'/products/add', component: AddProduct , name: 'AddProduct'},
	{path: '*', redirect: '/' }
];
