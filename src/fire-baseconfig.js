const Rebase = require('re-base')
const firebase = require('firebase')


const Firebaseconfig = {
  apiKey: "AIzaSyBcjsIk8seSWQgph0lcVit95oiVGOxC8gk",
  authDomain: "nataliabuenoportfolio.firebaseapp.com",
  databaseURL: "https://nataliabuenoportfolio.firebaseio.com",
  projectId: "nataliabuenoportfolio",
  storageBucket: "nataliabuenoportfolio.appspot.com",
  messagingSenderId: "1009632585086"
}

const app = firebase.initializeApp(Firebaseconfig)
const config = Rebase.createClass(app.database())

export const storage = app.storage()

export default config

