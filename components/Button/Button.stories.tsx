import Button from './Button'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
  text: 'Button',
  size: 'medium',
  color: 'primary',
}
