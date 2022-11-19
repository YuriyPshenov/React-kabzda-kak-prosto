import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log('Rating rendering')

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    const onClickHandler = () => {
        setValue(0)
    }

    return (
        <div>
            <Star selected={value > 0} onClickHandler={onClickHandler} setValue={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} onClickHandler={onClickHandler} setValue={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} onClickHandler={onClickHandler} setValue={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} onClickHandler={onClickHandler} setValue={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} onClickHandler={onClickHandler} setValue={() => {setValue(5); props.onChange(5)}}/>
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