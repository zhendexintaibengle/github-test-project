import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

// 设置axios基础路径属性
axios.defaults.baseURL ='http://www.codeboy.com:9999/data/'

Vue.use(VueAxios,axios)
