import Api from '@/services/Api'

export default {
  index (user) {
    return Api().get('hotspots')
  }
  // show (user) {
  //   return Api().post('login', user)
  // }
}
