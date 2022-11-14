import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    const [value, setValue] = useState(0)

    const onClickHandler = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <Star selected={value > 0}/><button onClick={() => onClickHandler(1)}>1</button>
            <Star selected={value > 1}/><button onClick={() => onClickHandler(2)}>2</button>
            <Star selected={value > 2}/><button onClick={() => onClickHandler(3)}>3</button>
            <Star selected={value > 3}/><button onClick={() => onClickHandler(4)}>4</button>
            <Star selected={value > 4}/><button onClick={() => onClickHandler(5)}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return props.selected ? <span><b>Star </b></span> : <span>Star </span>
}