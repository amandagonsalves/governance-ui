const CodeIcon = ({
  color = '#E1CE7A',
  className,
}: {
  color?: string
  className?: string
}) => {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 27L33 18L24 9"
        stroke={color}
        strokeWidth="3.00312"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9L3 18L12 27"
        stroke={color}
        strokeWidth="3.00312"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CodeIcon