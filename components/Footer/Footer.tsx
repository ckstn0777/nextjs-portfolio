import { css } from '@emotion/react'

function Footer() {
  return (
    <div css={footerWrapper}>
      <p>Designed & Built by Chansu Kim.</p>
      <p>Copyright © 2022 Chansu Kim All Rights Reserved.</p>
    </div>
  )
}

const footerWrapper = css`
  width: 100%;
  height: 24rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  color: white;
  background-color: #0a192f;
`

export default Footer
