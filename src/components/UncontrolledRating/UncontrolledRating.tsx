import React, {useState} from "react";


export function UncontrolledRating() {
    console.log('Rating rendering')

    const [value, setValue] = useState<number>(0)

    const onClickHandler = () => {
        setValue(0)
    }

    return (
        <div>
            <Star selected={value > 0} onClickHandler={onClickHandler} setValue={() => setValue(1)}/>
            <Star selected={value > 1} onClickHandler={onClickHandler} setValue={() => setValue(2)}/>
            <Star selected={value > 2} onClickHandler={onClickHandler} setValue={() => setValue(3)}/>
            <Star selected={value > 3} onClickHandler={onClickHandler} setValue={() => setValue(4)}/>
            <Star selected={value > 4} onClickHandler={onClickHandler} setValue={() => setValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClickHandler: () => void
    setValue: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    const spanOnClick = () => props.onClickHandler()

    return <span onDoubleClick={spanOnClick} onClick={() => {
        props.setValue()
    }}>{props.selected ? <b>Star </b> : 'star'}</span>
}