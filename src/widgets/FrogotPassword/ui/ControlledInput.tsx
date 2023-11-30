import { ComponentProps } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input } from '@/shared/ui'

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<ComponentProps<typeof Input>, 'id' | 'name'>

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...inputProps
}: ControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name })

  return <Input {...inputProps} {...field} error={error?.message} />
}
