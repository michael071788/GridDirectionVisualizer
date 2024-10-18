// src/stories/GridVisualizer.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GridDirectionVisualizer from "../components/GridDirectionVisualizer";

export default {
    title: 'GridDirectionVisualizer',
    component: GridDirectionVisualizer,
  } as Meta;
  
  const Template: StoryFn<{ position: string }> = (args) => <GridDirectionVisualizer {...args} />;
  
  export const Default = Template.bind({});
  Default.args = { position: '1,2 NORTH' };
  
  export const EdgeCase2 = Template.bind({});
  EdgeCase2.args = { position: '3,3 EAST' };

  export const EdgeCase3 = Template.bind({});
  EdgeCase3.args = { position: '4,4 WEST' };

  export const EdgeCase4 = Template.bind({});
  EdgeCase4.args = { position: '0,0 SOUTH' };
  
  export const InvalidInput = Template.bind({});
  InvalidInput.args = { position: '7,5 UP' };
  