import { css } from '@emotion/react'

type TitleProps = {
  title: string
}

function Title({ title }: TitleProps) {
  return <h2 css={titleWrapper(title.length)}>{title}</h2>
}

const titleWrapper = (stringLength: number) => css`
  position: relative;
  font-size: 3.2rem;

  &::after {
    content: '';
    position: absolute;
    width: ${stringLength * 1.2}%;
    height: 4px; // suit your need
    background: #246591; // suit your need
    top: 120%;
    left: 0;
  }
`

export default Title
