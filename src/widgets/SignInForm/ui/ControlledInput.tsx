import { ComponentProps } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input } from '@/shared/ui'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<ComponentProps<typeof Input>, 'onChange' | 'value'>

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
