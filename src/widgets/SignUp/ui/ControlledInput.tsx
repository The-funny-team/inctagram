import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/shared/ui'

export type ControlledInputProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<InputProps, 'onChange' | 'value'>

export const ControlledInput = <TFieldValues extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledInputProps<TFieldValues>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name })

  return <Input {...field} {...restProps} error={error?.message} />
}
