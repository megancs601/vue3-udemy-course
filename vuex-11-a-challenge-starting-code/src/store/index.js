import { createStore } from 'vuex';
import productsModules from './modules/products.js';
import cartModules from './modules/cart.js';

const store = createStore({
  modules: {
    prods: productsModules,
    cart: cartModules,
  },
});

export default store;
