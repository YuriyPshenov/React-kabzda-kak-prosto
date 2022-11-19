import React from "react";
import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callBack = action('clicked')

export const OnUncontrolled = () => <UncontrolledOnOff defaultOn={true} onChange={callBack}/>
export const OffUncontrolled = () => <UncontrolledOnOff defaultOn={false} onChange={callBack}/>
export const BugMode = () => <div>Unsync when change defaultValue</div>
export const DefaultUncontrolled = () => <input defaultValue={'yo'}/>




