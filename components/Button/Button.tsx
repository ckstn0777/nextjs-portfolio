import { css } from '@emotion/react'
import { mixins } from '../../lib/mixins'

type ButtonProps = {
  text: string
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | string
}

function Button({ text, size = 'large', color = 'primary' }: ButtonProps) {
  return <button css={ButtonStyle(size, color)}>{text}</button>
}

const ButtonStyle = (
  size: ButtonProps['size'],
  color: ButtonProps['color']
) => css`
  outline: none;
  border: 1px solid black;
  padding: 0.8rem 1.6rem;
  border-radius: 0.375rem;
  cursor: pointer;

  ${color && mixins.color(color)}

  ${size &&
  size === 'small' &&
  css`
    padding: 0.6rem 1.4rem;
    font-size: 1.2rem;
  `}

  ${size &&
  size === 'large' &&
  css`
    padding: 1rem 1.8rem;
    font-size: 2rem;
  `}
`

export default Button
