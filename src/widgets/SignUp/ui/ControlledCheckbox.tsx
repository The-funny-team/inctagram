import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/shared/ui'

type ControlledCheckboxProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<CheckboxProps, 'onChange' | 'value'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { onChange, value },
  } = useController({ control, name })

  return <Checkbox checked={value} onCheckedChange={onChange} {...restProps} />
}
