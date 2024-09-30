import { CSSProperties, HTMLAttributes, useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const defaultProperties = {
  light: {
    circle: {
      r: 9,
    },
    mask: {
      cx: "50%",
      cy: "17%",
    },
    svg: {
      transform: "rotate(40deg)",
    },
    lines: {
      opacity: 0,
    },
  },
  dark: {
    circle: {
      r: 5,
    },
    mask: {
      cx: "100%",
      cy: "0%",
    },
    svg: {
      transform: "rotate(90deg)",
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

let REACT_TOGGLE_DARK_MODE_GLOBAL_ID = 0;

type SVGProps = Omit<HTMLAttributes<HTMLOrSVGElement>, "onChange">;
export interface Props extends SVGProps {
  onChange: () => void;
  checked: boolean;
  style?: CSSProperties;
  size?: number | string;
  moonColor?: string;
  sunColor?: string;
}

export const ThemeSwitch: React.FC<Props> = ({
  onChange,
  children,
  checked = false,
  size = 24,
  moonColor = "#e5e7eb",
  sunColor = "#242526",
  style,
  ...rest
}) => {
  const [id, setId] = useState(0);

  useEffect(() => {
    REACT_TOGGLE_DARK_MODE_GLOBAL_ID += 1;
    setId(REACT_TOGGLE_DARK_MODE_GLOBAL_ID);
  }, [setId]);

  const { circle, svg, lines, mask } =
    defaultProperties[checked ? "dark" : "light"];

  const svgContainerProps = useSpring({
    ...svg,
    config: defaultProperties.springConfig,
  });
  const centerCircleProps = useSpring({
    ...circle,
    config: defaultProperties.springConfig,
  });
  const maskedCircleProps = useSpring({
    ...mask,
    config: defaultProperties.springConfig,
  });
  const linesProps = useSpring({
    ...lines,
    config: defaultProperties.springConfig,
  });

  const uniqueMaskId = `circle-mask-${id}`;

  return (
    <div
      onClick={onChange}
      className="
        ml-4
        h-10 
        cursor-pointer 
        p-2 
        transition
        hover:opacity-80
      "
    >
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color={checked ? moonColor : sunColor}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={checked ? "currentColor" : "none"}
        style={{
          ...svgContainerProps,
          ...style,
        }}
        {...rest}
      >
        <mask id={uniqueMaskId}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle
            // @ts-ignore
            style={maskedCircleProps}
            r="9"
            fill="black"
          />
        </mask>

        <animated.circle
          cx="12"
          cy="12"
          fill={checked ? moonColor : sunColor}
          // @ts-ignore
          style={centerCircleProps}
          mask={`url(#${uniqueMaskId})`}
        />
        <animated.g stroke="currentColor" style={linesProps}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </animated.g>
      </animated.svg>
    </div>
  );
};
