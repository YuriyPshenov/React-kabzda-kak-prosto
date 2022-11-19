import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import Accordion from "./Accordion";

export default {
    title: 'Accordion strories',
    component: Accordion,
}

const callBack = action('accordion mode change event fired')

export const MenuCollapsed = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callBack}/>
export const UsersUnCollapsed = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callBack}/>

export const AccordionCollapsedMenu = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}/>
}

