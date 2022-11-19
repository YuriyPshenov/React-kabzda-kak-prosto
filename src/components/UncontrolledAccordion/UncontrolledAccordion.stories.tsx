import React from "react";
import {action} from '@storybook/addon-actions'
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion strories',
    component: UncontrolledAccordion,
}


export const MenuUncontrolledCollapsed = () => <UncontrolledAccordion titleValue={'Menu'}/>
export const UsersUncontrolledUnCollapsed = () => <UncontrolledAccordion titleValue={'Users'}/>



