import { css } from '@emotion/react'

const primary = '#ffffff'
const secondary = '#eeeeee'

export default function color(color: 'primary' | 'secondary' | string) {
  return css`
    color: ${color === 'primary'
      ? { primary }
      : color === 'secondary'
      ? { secondary }
      : color};
  `
}

// export default {
//   color: (color: 'primary' | 'secondary' | string) => css`
//     color: ${color === 'primary'
//       ? {primary}
//       : color === 'secondary'
//       ? {secondary}
//       : color};
//   `,
// }
