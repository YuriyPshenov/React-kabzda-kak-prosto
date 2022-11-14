import React, {useState} from "react";



export function UncontrolledRating() {
    console.log('Rating rendering')

    const [value, setValue] = useState<number>(0)

    const onClickHandler = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <Star id={1} selected={value > 0} onClickHandler={onClickHandler}/>
            <Star id={2}  selected={value > 1} onClickHandler={onClickHandler}/>
            <Star id={3}  selected={value > 2} onClickHandler={onClickHandler}/>
            <Star id={4}  selected={value > 3} onClickHandler={onClickHandler}/>
            <Star id={5}  selected={value > 4} onClickHandler={onClickHandler}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    id: number
    onClickHandler: (id: number) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return props.selected ? <span onClick={() => props.onClickHandler(props.id)}><b>Star </b></span> : <span onClick={() => props.onClickHandler(props.id)}>Star </span>
}