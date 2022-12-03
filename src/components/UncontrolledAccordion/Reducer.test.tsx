import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('collapsed should be true', () => {
    const state: StateType = {collapsed: false} // data

    const newState = reducer(state, {type: TOGGLE_COLLAPSED}) // action

    expect(newState.collapsed).toBe(true) // expectation
    expect(state).not.toBe(newState)
})

test('collapsed should be false', () => {
    const state: StateType = {collapsed: true} // data

    const newState = reducer(state, {type: TOGGLE_COLLAPSED}) // action

    expect(newState.collapsed).toBe(false) // expectation
    expect(state).not.toBe(newState)
})

test('reducer will be error', () => {
    const state: StateType = {collapsed: true} // data

    expect(() => {reducer(state, {type: 'FAKETYPE'})}).toThrowError() // action
})