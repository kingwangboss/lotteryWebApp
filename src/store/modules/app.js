import Vue from 'vue'
import http from '../../util/http'

//存放数据的
const state = {
    uid:'',
    authtypename:'',
    url:'',
    authtype:'',
    username:'',
    token:'',
    paytype:''
}

//页面取值
const getters = {
    
    getUid : state => state.uid,
    getAuthtypename :state => state.authtypename,
    getUrl : state => state.url,
    getAuthtype : state => state.authtype,
    getUsername : state => state.username,
    getToken : state => state.token,
    getPaytype : state => state.paytype,
}

const actions = {
    
}

const mutations = {
    updateUid(state,playload){
        state.uid = playload;
    },
    updateAuthtypename(state,playload){
        state.authtypename = playload;
    },
    updateUrl(state,playload){
        state.url = playload;
    },
    updateAuthtype(state,playload){
        state.authtype = playload;
    },
    updateUsername(state,playload){
        state.username = playload;
    },
    updateToken(state,playload){
        state.token = playload;
    },
    updatePaytype(state,playload){
        state.paytype = playload;
    },
    
}

export default {
    state,
    getters,
    actions,
    mutations,
}