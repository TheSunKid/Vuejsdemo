<template>
  <div class="EditPost">
    <h1>Edit Post</h1>
    <div class="form">
      <div>
        <input class="data" type="text" name="title" placeholder="Enter New Description" v-model="title">
      </div>
      <div>
        <textarea class="data" rows="15" cols="15" placeholder="Enter New Description" v-model="description"></textarea>
      </div>
      <div>
        <button class="app_post_btn" @click="updatePost">Submit Edit</button>
      </div>
    </div>
  </div>
</template>
<script>
import PostService from '@/service/postservice'
export default {
  name : 'editpost',
  data(){
    return{
      title:'',
      description:''
    }
  },
  mounted: function() {
   this.getPost();
  },
  methods: {
   
    async getPost() {
      const response = await PostService.getPosts({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
    },
    async updatePost() {
      await PostService.editPost({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })
    this.$router.push('/posts');
    }

  }
}
</script>
<style scoped>
.EditPost{
    text-align:center;
}
.form{
  margin:auto;
}
input,textarea{
   border:2px solid cornflowerblue;
}
.data{
  margin: 10px;
  width: 50%;
  min-height: 40px;
  padding-left: 20px;
}
.app_post_btn{
  width: 100px;
  height:40px;
  border:2px solid cornflowerblue;
  background-color:white;
}
</style>