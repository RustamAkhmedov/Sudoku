import reducer from "./reducer"

const store = {
    _state: reducer(),
    getState() {
        return this._state
    },
    // method to change state
    dispach(action) {
        this._state = reducer(this._state, action)
        this._render()
    },
    _render() {
        // nothing
    },
    subscribe(observer) {
        this._render = observer
    },
}

export default store

window.store = store