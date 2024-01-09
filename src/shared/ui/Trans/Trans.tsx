import { Fragment, ReactElement } from 'react'

import { OPEN_CLOSE_TAG_REGEX, TAGS_REGEX } from '@/shared/const'

type TransType = {
  tags?: Record<string, (str: string) => ReactElement>
  text: string
}

export const Trans = (props: TransType) => {
  return <>{interpolateTags(props)}</>
}

const interpolateTags = (data: TransType) => {
  const { tags, text } = data

  if (!tags) {
    return text
  }

  const tokens = text.split(TAGS_REGEX)

  return tokens.map(token => {
    const matchResult = OPEN_CLOSE_TAG_REGEX.exec(token)

    if (!matchResult) {
      return token
    }

    const [, openTag, content, closeTag] = matchResult

    if (!openTag || !closeTag || openTag !== closeTag) {
      return token
    }

    return <Fragment key={content}>{tags[openTag]?.(content ?? '')}</Fragment>
  })
}
