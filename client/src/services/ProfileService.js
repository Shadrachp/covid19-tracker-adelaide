import Api from '@/services/Api'

export default {
  updateProfile (user) {
    return Api().post('updateProfile', user)
  },
  profile (user) {
    return Api().post('profile', user)
  },
  profiles (user) {
    return Api().get('profiles')
  }
}
