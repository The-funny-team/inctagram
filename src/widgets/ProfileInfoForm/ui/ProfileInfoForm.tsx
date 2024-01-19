import { Controller, useForm } from 'react-hook-form'

import { Input, Select } from '@/shared/ui'
import { DatePicker } from '@/shared/ui/DatePicker'

import s from './ProfileInfoForm.module.scss'

import { useProfileData } from '../services'

const countriesOptions: any[] = [
  { title: 'Belarus', value: 'belarus' },
  { title: 'Russia', value: 'russia' },
]

const citiesOptions: any[] = [
  { title: 'Minsk', value: 'minsk' },
  { title: 'Moscow', value: 'moscow' },
]

export const ProfileInfoForm = () => {
  const { formData } = useProfileData()
  const { control } = useForm()

  return (
    <form className={s.form}>
      <Controller
        control={control}
        name={'userName'}
        render={({ field, fieldState: { error } }) => (
          <Input
            // className={classNames.formInput(error?.message)}
            error={error?.message}
            label={'Username*'}
            type={'text'}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name={'firstName'}
        render={({ field, fieldState: { error } }) => (
          <Input
            // className={classNames.formInput(error?.message)}
            error={error?.message}
            label={'First Name*'}
            type={'text'}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name={'lastName'}
        render={({ field, fieldState: { error } }) => (
          <Input
            // className={classNames.formInput(error?.message)}
            error={error?.message}
            label={'Last Name*'}
            type={'text'}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name={'dateOfBirth'}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            error={error?.message}
            onChange={field.onChange}
            placeholder={'Date of birth'}
            value={field.value}
          />
        )}
      />

      <div className={s.selectWrapper}>
        <div className={s.select}>
          <Controller
            control={control}
            name={'country'}
            render={({ field, fieldState: { error } }) => (
              <Select
                label={'Select your country'}
                options={countriesOptions}
                placeholder={'Country'}
              />
            )}
          />
        </div>
        <div className={s.select}>
          <Controller
            control={control}
            name={'city'}
            render={({ field, fieldState: { error } }) => (
              <Select label={'Select your city'} options={citiesOptions} placeholder={'City'} />
            )}
          />
        </div>
      </div>
      {/*<TextField fullWidth label={'About me'} />*/}
    </form>
  )
}
