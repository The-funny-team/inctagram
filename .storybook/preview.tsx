import type { Preview } from '@storybook/react'
import '@/application/styles/index.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Dark',
      values: [
        {
          name: 'Dark',
          value: '#000',
        },
        {
          name: 'Light',
          value: '#f4f4f4',
        },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <div className={inter.className}>
        <Story />
      </div>
    ),
  ],
}

export default preview
