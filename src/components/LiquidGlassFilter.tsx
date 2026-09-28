/** SVG displacement filter for Liquid Glass (Chromium). Safari/Firefox ignore url() and keep blur fallback. */
export function LiquidGlassFilter() {
  return (
    <svg
      aria-hidden
      width="0"
      height="0"
      className="absolute"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        <filter id="liquid-lens" x="-5%" y="-20%" width="110%" height="140%" colorInterpolationFilters="sRGB">
          <feImage
            href={`${import.meta.env.BASE_URL}liquid-lens-map.png`}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            result="map"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            scale="-36"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feColorMatrix
            in="displaced"
            type="matrix"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="r"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            scale="-30"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedG"
          />
          <feColorMatrix
            in="displacedG"
            type="matrix"
            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="g"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            scale="-24"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedB"
          />
          <feColorMatrix
            in="displacedB"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
            result="b"
          />
          <feBlend in="r" in2="g" mode="screen" result="rg" />
          <feBlend in="rg" in2="b" mode="screen" />
        </filter>
      </defs>
    </svg>
  )
}
