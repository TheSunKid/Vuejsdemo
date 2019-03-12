
<template>
  <div class="posts">
    <h1>Posts</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'newpost' }" class>Add Post</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="post in posts" :key="post._id">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'editpost', params: { id: post._id } }">Edit</router-link>|
            <a href="#" @click="deletePost(post._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div class="nopost" v-else>No Post. Click Add Post
      <br>
      <br>
      <router-link v-bind:to="{ name: 'newpost' }" class="add_post_link">Add Post</router-link>
    </div>
  </div>
</template>
<script>
import PostsService from "@/service/postservice";
export default {
  name: "posts",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data.posts;
      for (let  i = 0; i < this.posts.length;i++){
        console.log(this.posts[i]._id)
      }
    },
    async deletePost(id) {
    await PostsService.deletePosts(id);
    this.$router.push({ path: '/posts' })
    } 
  },
  watch:{
    posts: function(){
      return this.getPosts();
    }
  }
};
</script>
<style type="text/css" scoped>
.nopost{
  text-align: center;
}
h1{
  text-align:center;
}
.table-wrap {
  margin: 0 auto;
}
.table-wrap{
  text-align:center;
}
.table-wrap table{
  margin:auto;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
