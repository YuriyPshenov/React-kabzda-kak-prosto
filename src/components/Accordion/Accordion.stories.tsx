import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import {Primary} from "../../stories/Button.stories";

const GetCategoryObj = (categoryName: 'Color' | 'Events' | 'Other') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChangeL: {
            ...GetCategoryObj('Events')
        },
        onClick: {
            ...GetCategoryObj('Events')
        },
        collapsed: {...GetCategoryObj('Other')}
    }
}

const callBack = action('accordion mode change event fired')

const callbacksProps = {
    onChange: callBack
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    ...callbacksProps
}

export const UsersCollapsedMode = Template.bind({})
UsersCollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    ...callbacksProps
}



export const AccordionCollapsedMenu = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}/>
}


