import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const {items, value} = props
    const [collapsed, setCollapsed] = useState(false)
    const [selectTitle, setSelectTitle] = useState('choice')

    const onCLickHandler = () => {
        setCollapsed(!collapsed)
    }

    const onClickInMap = (title: string) => {
        setCollapsed(false)
        setSelectTitle(title)
    }

    const selectStyle = {
        backgroundColor: '#0066CC',
        width: '80px',
        border: '2px solid grey',
        color: 'gold',
    }

    const choiceSelectStyle = {
        color: 'white',
        backgroundColor: '#0065AA',
        display: 'flex',
        justifyContent: 'center'
    }


    return (
        <div style={selectStyle} >
            <div onClick={onCLickHandler} style={choiceSelectStyle}>{selectTitle}</div>
            {collapsed && items.filter(i => i.title !== selectTitle).map((i, index) => <div style={choiceSelectStyle} key={index} onClick={() => onClickInMap(i.title)}>{i.title}</div>)}
        </div>
    )
}
