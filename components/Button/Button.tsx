import { css } from '@emotion/react'
import { mixins } from '../../lib/styles'

type ButtonProps = {
  text: string
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | string
}

function Button({ text, size = 'medium', color = 'primary' }: ButtonProps) {
  return <button css={ButtonStyle(size, color)}>{text}</button>
}

const ButtonStyle = (
  size: ButtonProps['size'],
  color: ButtonProps['color']
) => css`
  ${mixins.color('#157897')}
`

export default Button
