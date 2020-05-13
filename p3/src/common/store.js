import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import * as app from '@/common/app.js';

export default new Vuex.Store({
    state: {
        sprCount: 0,
        sprs: [],
    },
    mutations: {
        setSPRCount(state, payload) {
            state.sprCount = payload;
        },
        updateSPRCount(state, payload) {
            state.sprCount += payload;
        },
        updateSPRs(state, payload) {
            state.sprs = payload;
        }
    },
    actions: {
        setSPRs(context) {
            app.api.all('sprs').then(response => {
                context.commit('updateSPRs', response);
            });
        }
    },
    getters: {
        getSPRBySlug(state) {
            return function (slug) {
                for (let key of Object.keys(state.sprs)) {
                    console.log(slug);
                    if (state.sprs[key].slug == slug) {
                        return state.sprs[key];
                    }
                }
            }
        }
    }
})