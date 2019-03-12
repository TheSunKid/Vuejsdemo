import Api from '@/service/api';

export default {
  getProduct () {
    return Api().get('products');
  },
  addProduct (params) {
    return Api().post('products/add',params)
  }
}