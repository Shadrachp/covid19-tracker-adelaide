import Api from '@/services/Api'

export default {
  register (user) {
    return Api().post('register', user)
  },
  login (user) {
    return Api().post('login', user)
  }
}
