import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//创建vue实例
const store = new Vuex.Store({
    state: {
        counter: 0
    },

    getters: {
        getNum: function(state) {
            return function() {
                return state.counter;
            }
        }
    },
    mutations: {
        add: function(state) {
            state.counter++;
        },
        minus: function(state) {
            state.counter--;
        },
        updateNum: function(state, newNum) {
            state.num = newNum;
        }
    }
})

export default store //导出store