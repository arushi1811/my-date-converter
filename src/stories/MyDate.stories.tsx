import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MyDate } from '../components';
 
 
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof MyDate> = {
  component: () => <MyDate timeZone='America/New_York' dateTime='11/18/1998 03:20' />,
};
 
export default meta;
type Story = StoryObj<typeof MyDate>;
 
export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
}