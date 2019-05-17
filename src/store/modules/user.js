import { login, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import {
  getId, setId, removeId,
  getNum, setNum, removeNum,
  getName, setName, removeName,
  getSex, setSex, removeSex,
  getDepartment, setDepartment, removeDepartment,
  getMajor, setMajor, removeMajor,
  getEmail, setEmail, removeEmail
} from '@/utils/person'

const user = {
  state: {
    token: getToken(),
    userInfo: {
      id: getId(),
      stNum: getNum(),
      stName: getName(),
      stSex: getSex(),
      stDepartment: getDepartment(),
      stMajor: getMajor(),
      stEmail: getEmail()
    }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, userInfo) => {
      state.userInfo.id = userInfo.id
      state.userInfo.stNum = userInfo.stNum
      state.userInfo.stName = userInfo.stName
      state.userInfo.stSex = userInfo.stSex
      state.userInfo.stDepartment = userInfo.stDepartment
      state.userInfo.stMajor = userInfo.stMajor
      state.userInfo.stEmail = userInfo.stEmail
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      const stNum = userInfo.stNum
      const stPassword = userInfo.stPassword
      return new Promise((resolve, reject) => {
        login(stNum, stPassword).then(response => {
          const res = response.data
          const token = res.obj
          if (res.success) {
            // 设置token,存到cookie
            setToken(token)
            commit('SET_TOKEN', token)
            resolve(res.msg)
          } else {
            reject(res.msg)
          }
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const res = response.data
          const userInfo = res.obj
          // 设置userInfo,存到cookie
          setId(userInfo.id)
          setNum(userInfo.stNum)
          setName(userInfo.stName)
          setSex(userInfo.stSex)
          setDepartment(userInfo.stDepartment)
          setMajor(userInfo.stMajor)
          setEmail(userInfo.stEmail)
          commit('SET_USER', userInfo)
          resolve(res)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_USER', '')
        // 清空cookie的token
        removeToken()
        // 清空cookie的personInfo
        removeId()
        removeNum()
        removeName()
        removeSex()
        removeDepartment()
        removeMajor()
        removeEmail()
        resolve()
      })
    }
  }
}

export default user
