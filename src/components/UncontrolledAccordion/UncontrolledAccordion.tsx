import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const onclickHandler = () => dispatch({type: TOGGLE_COLLAPSED})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onclickHandler={ () => {
                onclickHandler()
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onclickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onclickHandler}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;