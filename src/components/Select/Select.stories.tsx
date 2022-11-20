import React from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Select',
    component: Select,
}

export const CheckSelect = () => <Select value={'Menu'} onChange={() => action('bibsk')} items={[{title: 'title', value: 22}, {title: 'new', value: 32}, {title: 'old', value: 14}, {title: 'fire', value: 11},]}/>