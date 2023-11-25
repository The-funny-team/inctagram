import type { Preview } from '@storybook/react'
import '../src/app/styles/index.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const preview: Preview = {
  parameters: {
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
