import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        plotData: [],
    },
    mutations: {
        setPlotData(state, payload) {
            state.plotData = payload;
//            console.log("Store setPlotData:", state.plotData)
        },
        addDataPoint(state, payload) {
            state.plotData.push(payload);
//            console.log("Store addDataPoint:", payload, state.plotData)            
        },
        deleteDataPoint(state, payload) {
            state.plotData.splice(payload,1);
//            console.log("Store deleteDataPoint:", payload, state.plotData)            
        }
    },
    /*actions: {
        setPlotData(context) {
            app.api.all('products').then(response => {
                context.commit('updateProducts', response);
            });
        }
    },
    getters: {
        getPlotData(state) {
            return state.plotData;
        }
    }*/
})