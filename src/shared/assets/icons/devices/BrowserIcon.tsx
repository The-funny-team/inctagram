import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'36'}
    ref={ref}
    viewBox={'0 0 192 192'}
    width={'36'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g id={'SVGRepo_bgCarrier'} strokeWidth={'0'} />

    <g id={'SVGRepo_tracerCarrier'} strokeLinecap={'round'} strokeLinejoin={'round'} />

    <g id={'SVGRepo_iconCarrier'}>
      <circle cx={'96'} cy={'96'} r={'74'} stroke={'#fff'} strokeWidth={'9.6'} />

      <ellipse cx={'96'} cy={'96'} rx={'30'} ry={'74'} stroke={'#fff'} strokeWidth={'9.6'} />

      <path
        d={'M28 72h136M28 120h136'}
        stroke={'#fff'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'9.6'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const BrowserIcon = memo(ForwardRef)
