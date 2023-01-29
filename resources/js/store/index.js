import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
 deliverable: {
    title: ""
 },
 task: {
    title: "",
    description: "",
 },
 allDeliverables: [],
 
};

const store = new Vuex.Store({
    state,
    getters: {
        getDeliverable: (state) => {
            return state.deliverable;
        },
        getTask: (state) => {
            return state.task;
        },
       

        allDeliverables: (state) => {
            return state.allDeliverables;
        },
      
    },
    actions: {
        
        resetDashboardState({ commit }) {
            commit("resetState");
        },
        
         
          
          getAllDeliverables({ commit}) {
            
            axios.get("/deliverables")
              .then(res => {
                commit('setAllDeliverables', res.data.deliverables)
              })
              .catch((err) => {
                console.log(`Error : ${err}`);
            });
          },
    },
    mutations: {
        // setNewDeliverable(state, deliverable) {
        //     state.deliverable.title = deliverable
        //   },
        //   setNewTask(state, task) {
        //     state.task = task
        //   },

         setAllDeliverables(state, allDeliverables) {
            state.allDeliverables = allDeliverables
          },

          //Reset state to default
        resetState(state) {
            Object.assign(state, state);
        },
    },

});

export default store;
