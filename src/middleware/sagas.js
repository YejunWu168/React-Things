import { takeEvery, put, delay } from 'redux-saga/effects'
import { ADD_TODO } from '../actions/types'

function* worldSaga() {
    yield delay(4000)
    console.log('hello world')
}

export function* helloSaga() {
    yield takeEvery(ADD_TODO, worldSaga)
}