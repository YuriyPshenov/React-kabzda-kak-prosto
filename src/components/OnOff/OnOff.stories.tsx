import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff strories',
    component: OnOff,
}

const callBack = action('clicked')

export const OnMode = () => <OnOff value={true} onClick={callBack}/>
export const OffMode = () => <OnOff value={false} onClick={callBack}/>

export const OnOffChange = () => {
    const [value, setValue] = useState(true)
    return <OnOff onClick={setValue} value={value}/>
}

