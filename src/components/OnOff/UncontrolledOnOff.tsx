import React, {useState} from "react";


export function UncontrolledOnOff() {
    console.log('UncontrolledOnOff rendering')
    const[onOff, setOnOff] = useState<boolean>(false)

    const offOnClick = () => {
        setOnOff(false)
    }

    const onOnClick = () => {
        setOnOff(true)
    }

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

    return (
        <div>
            <div style={onStyle} onClick={onOnClick}>ON</div>
            <div style={offStyle} onClick={offOnClick}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}