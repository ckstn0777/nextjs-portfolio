import { css } from '@emotion/react'

export default function color(color: 'primary' | 'secondary' | string) {
  const colorObj = {
    primary: '#ffffff',
    secondary: '#eeeeee',
    [color]: color,
  }

  return css`
    color: ${colorObj[color]};
  `
}
