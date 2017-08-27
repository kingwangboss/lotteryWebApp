import Vue from 'vue'
import http from '../../util/http'
//存放数据的
const state = {
    orderList:[],
    params:{},
    vcode:'',
}

//页面取值
const getters = {
    // getOrderList : function(state){
    //     return state.orderList;
    // }
    getOrderList : state => state.orderList,
    getVcode :state => state.vcode
}

const actions = {
    fetchOrderList({commit,state}) {
        http.post('',state.params).then(res=>{
            commit('updateOrderList',res.data.list)
            
        });
    }
}

const mutations = {
    updateOrderList(state,orderList){
        state.orderList = orderList;
    },

    updateParams(state,{key,val}){
        state.params[key] = val
    },
    updateVcode(state,playload){
        state.vcode = playload;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}