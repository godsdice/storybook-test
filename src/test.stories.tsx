import { Story } from '@storybook/react'
import * as React from 'react'
import { Test, TestProps } from './test'

export default {
  title: 'Test',
  component: Test
}

const Template = (args: TestProps) => <Test {...args} />

export const Default: Story<TestProps> = Template.bind({})