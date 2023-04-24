import { createStore } from 'vuex'
import axios from "axios";
// import { search } from 'core-js/fn/symbol';
const News = "https://technews-pn4c.onrender.com";

export default createStore({
  state: {
    message: null,
    news: null,
    info: null
  },
  getters: {
  },
  mutations: {
    setMessage(state, value){
      state.message = value;
    },
    setNews(state, news){
      state.news = news
    },
    getNews(state, news){
      state.news = news
    },
    // search(){

    // }
  },
  actions: {
    async fetchNews(context){
      // console.log('fight');
      const res = await axios.get(`${News}`);
      // console.log(res.data.articles);
      const response = await res.data.articles;
      if(response){
        context.commit("setNews", response);
        // console.log('hi');
      }else{
        context.commit("setMessage", "404")
      }
    },

    // async searchNews(context){
    //   console.log(search);
    //   const res = await axios.get(`${News}`);
    //   const response = await res.data.articles;
    //   if(response){
    //     context.commit()
    //   }
    // }
  },
  modules: {
  }
})
