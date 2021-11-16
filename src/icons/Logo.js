import * as React from "react"

function Logo({x, y, pathx, pathy, ...props}) {
  return (
    <svg
      id='svg'
      width={pathy || 321}
      height={pathx || 325}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#prefix__pattern0)" d="M0 0h321v325H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0"
            transform="matrix(.00197 0 0 .00197 -.005 0)"
          />
        </pattern>
        <image
          id="prefix__image0"
          width={x || 513}
          height={y || 513}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default Logo