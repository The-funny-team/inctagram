import type { Meta, StoryObj } from '@storybook/react'

import { ScrollArea } from '@/shared/ui'

const meta = {
  component: ScrollArea,
  tags: ['autodocs'],
  title: 'Components/Scrollbar',
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const VerticalScroll: Story = {
  args: {
    children: (
      <p style={{ width: '100px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem, beatae debitis,
        earum maiores nam omnis perspiciatis quas quasi ratione tenetur voluptas voluptatem!
        Blanditiis ducimus, excepturi iste iure quos veritatis. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci, autem, beatae debitis, earum maiores nam omnis
        perspiciatis quas quasi ratione tenetur voluptas voluptatem! Blanditiis ducimus, excepturi
        iste iure quos veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci, autem, beatae debitis, earum maiores nam omnis perspiciatis quas quasi ratione
        tenetur voluptas voluptatem! Blanditiis ducimus, excepturi iste iure quos veritatis.
      </p>
    ),
    style: {
      height: '200px',
      paddingRight: '8px',
      width: 'fit-content',
    },
  },
}

export const HorizontalScroll: Story = {
  args: {
    children: (
      <p style={{ width: '400px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem, beatae debitis,
        earum maiores nam omnis perspiciatis quas quasi ratione tenetur voluptas voluptatem!
        Blanditiis ducimus, excepturi iste iure quos veritatis. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci, autem, beatae debitis, earum maiores nam omnis
        perspiciatis quas quasi ratione tenetur voluptas voluptatem! Blanditiis ducimus, excepturi
        iste iure quos veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci, autem, beatae debitis, earum maiores nam omnis perspiciatis quas quasi ratione
        tenetur voluptas voluptatem! Blanditiis ducimus, excepturi iste iure quos veritatis.
      </p>
    ),
    style: {
      width: '100px',
    },
  },
}
