const Rebase = require('re-base')
const firebase = require('firebase')


const Firebaseconfig = {
  apiKey: "AIzaSyCzAwUeOHTbV86QJu_CtgY_CkZpequ5Tyk",
  authDomain: "prj-natalia1.firebaseapp.com",
  databaseURL: "https://prj-natalia1.firebaseio.com",
  projectId: "prj-natalia1",
  storageBucket: "prj-natalia1.appspot.com",
  messagingSenderId: "727686893387"
  
}

const app = firebase.initializeApp(Firebaseconfig)
const config = Rebase.createClass(app.database())


export const storage = app.storage()
export const auth = app.auth()
export default config

