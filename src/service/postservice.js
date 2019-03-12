import Api from '@/service/api'


export default {
  fetchPosts () {
    return Api().get('posts')
  },
  addPost(params) {
    return Api().post('posts', params)
  },
  editPost(params){
    return Api().put('posts/' + params.id,params)
  },
  getPosts(params){
    return Api().get('posts/'  + params.id, params)
  },
  deletePosts(params){
    return Api().delete('posts/'  + params, params)
  }
}