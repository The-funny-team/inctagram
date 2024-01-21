import Head from 'next/head'

type Props = {
  title?: string
}

export const HeadMeta = ({ title }: Props) => {
  const desc = title ? `Inctagram ${title}` : 'Inctagram'

  return (
    <Head>
      <title>{title ?? 'Inctagram'}</title>
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <meta content={desc} name={'description'} />
      <link href={'/favicon.ico'} rel={'icon'} />
    </Head>
  )
}
