import React from "react";
import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff strories',
    component: UncontrolledOnOff,
}


export const OnUncontrolled = () => <UncontrolledOnOff onChange={() => true}/>
export const OffUncontrolled = () => <UncontrolledOnOff onChange={() => false}/>




