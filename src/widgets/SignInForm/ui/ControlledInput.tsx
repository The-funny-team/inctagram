import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/shared/ui'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name })

  return <Input {...field} {...restProps} error={error?.message} />
}
