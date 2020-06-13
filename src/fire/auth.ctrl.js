import * as firebase from 'firebase'

export async function register (email, password) {
  try {
    // console.log({email, password})
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  } catch (e) {
    console.error('error from ctl', e)
    return e
  }
}
