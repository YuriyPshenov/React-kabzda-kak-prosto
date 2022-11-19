import React, {useState} from "react";

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {
    console.log('UncontrolledOnOff rendering')
    const[onOff, setOnOff] = useState<boolean>(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: onOff ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: !onOff ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: onOff ? 'green' : 'red'
    }

    const offOnClick = () => {
        setOnOff(false)
        props.onChange(false)
    }

    const onOnClick = () => {
        setOnOff(true)
        props.onChange(true)
    }

    return (
        <div>
            <div style={onStyle} onClick={onOnClick}>ON</div>
            <div style={offStyle} onClick={offOnClick}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}