import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star value={1} selected={props.value > 0} onClick={props.onClick}/>
            <Star value={2}  selected={props.value > 1} onClick={props.onClick}/>
            <Star value={3}  selected={props.value > 2} onClick={props.onClick}/>
            <Star value={4}  selected={props.value > 3} onClick={props.onClick}/>
            <Star value={5}  selected={props.value > 4} onClick={props.onClick}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>Star </b> : 'Star '}</span>
}