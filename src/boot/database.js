import Vue from 'vue'
import Localbase from 'localbase'
const db = new Localbase('quasar-note')

Vue.prototype.$db = db

export default {
  db
}
