import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // satet, getters, mutations, actions 
    state: {
        names: [],
        weights: [],
    },

    mutations: {
        setName(state, name) {
            state.names.push(name);
        },
        setWeight(state, weight) {
            state.weights.push(weight);
        },
    },

    getters: {
        getNames(state) {
            return state.names;
        },
        getWeights(state) {
            return state.weights;
        }
    },


});