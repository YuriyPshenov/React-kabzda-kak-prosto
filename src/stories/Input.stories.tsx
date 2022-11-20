import React, {ChangeEvent, useRef, useState, } from 'react';


export default {
    title: 'input',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};


export const UncontrolledInput = () => <input/>

export const TracValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)
    return <><input onChange={onChangeHandler}/> - {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const onClickHandler = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
}

  return <><input ref={inputRef} id={'inputId'} /><button onClick={onClickHandler}>save</button> - actual value - {value} </>
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

