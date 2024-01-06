type PropsInputType = {
  className: string
  defaultValue?: string
  id?: string
  onClick: () => void
  placeholder?: string
  type: string
  value: string
}

export const DatePickerInput = ({
  className,
  defaultValue,
  id,
  onClick,
  placeholder,
  type,
  value,
  ...otherProps
}: PropsInputType) => {
  return (
    <input
      className={className}
      defaultValue={defaultValue}
      id={id}
      onClick={onClick}
      placeholder={placeholder}
      type={type}
      value={value}
      {...otherProps}
    />
  )
}
