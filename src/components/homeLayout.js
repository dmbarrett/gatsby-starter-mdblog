import React from "react"
import { css } from "@emotion/core"
//import { rhythm } from "../utils/typography"

export default ({ children }) => {
  return (
    <div
      css={css`
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      `}
    >
      {children}
    </div>
  )
}
