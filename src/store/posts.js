import mainService from "../main.service";


const state = {
  posts: [],
  categoryId: 0
}

const getters = {
  posts: state => state.posts
}

const mutations = {
  updateCategory(state, category){
    state.categoryId = category.categoryId
    state.posts = category.posts
  }
}

const actions = {
  updateCategory(context, categoryId) {
    mainService.getPost(categoryId).then(data => {
      context.commit('updateCategory', { categoryId, posts: data})
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

