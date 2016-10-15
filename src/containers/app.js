import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import AppActions from '../actions/app'

// コンポーネント(App)のpropsにステートを渡す関数
function mapStateToProps(state) {
    return state
}

// コンポーネント(App)のpropsにアクションを渡す関数
function mapDispatchToProps(dispatch) {
    return {
        onDecrement: () => { dispatch(AppActions.decrement()) },
        onIncrement: () => { dispatch(AppActions.increment()) }
    }
}

// connectでReduxとReactコンポーネント(App)を繋ぐ
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)