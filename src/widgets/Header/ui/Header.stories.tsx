import type { Meta, StoryObj } from '@storybook/react'

import Image from 'next/image'

import { Header } from './Header'
import flagRu from '/public/flagRussia.png'
import flagEng from '/public/flagUnitedKingdom.png'

const meta = {
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Widgets/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

const optionsWithIcons = [
  {
    label: (
      <>
        <Image alt={'flag russian'} height={20} src={flagRu} width={20} />
        <span>Russian</span>
      </>
    ),
    value: 'ru',
  },
  {
    label: (
      <>
        <Image alt={'flag english'} height={20} src={flagEng} width={20} />
        <span>English</span>
      </>
    ),
    value: 'en',
  },
]

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
    languageOptions: optionsWithIcons,
    languageValue: optionsWithIcons[0].value,
  },
}

export const UnLogged: Story = {
  args: {
    isLoggedIn: false,
    languageOptions: optionsWithIcons,
    languageValue: optionsWithIcons[0].value,
  },
}
