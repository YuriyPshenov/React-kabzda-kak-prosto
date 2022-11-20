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

// const callBack = action('accordion mode change event fired')
//
// const callbacksProps = {
//     onChange: callBack
// }
//
// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
//
// export const MenuCollapsedMode = Template.bind({})
// MenuCollapsedMode.args = {
//     titleValue: 'Menu',
//     collapsed: true,
//     ...callbacksProps,
//     items: []
// }
//
// export const UsersCollapsedMode = Template.bind({})
// UsersCollapsedMode.args = {
//     titleValue: 'Users',
//     collapsed: false,
//     ...callbacksProps,
//     items: ['Dimych', 'Katya', 'Viktor', 'Sasha']
// }
//
// export const ModeChanging = Template.bind({})
// ModeChanging.args = {
//     titleValue:
//     collapsed:
// }

const onClickCallBack = action('some item was clicked')

export const MenuCollapsedMode2 = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue={'Menu'} collapsed={true} onChange={() => setValue(!value)} items={[]} onClick={onClickCallBack}/>
}

export const UsersUnCollapsedMode = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue={'Users'} collapsed={false} onChange={() => setValue(!value)} items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Viktor', value: 3}]} onClick={onClickCallBack}/>
}

export const ModeChanging2 = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue={!value ? 'Users' : 'Menu'} collapsed={value} onChange={() => setValue(!value)} items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Viktor', value: 3}]} onClick={(id) => {alert(`user with ID ${id} should be happy`)}}/>
}


