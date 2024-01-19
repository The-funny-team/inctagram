import { Controller, useForm } from 'react-hook-form'

import { COUNTRIES_LIST } from '@/shared/const'
import { Button, Input, Select, TextField } from '@/shared/ui'
import { DatePicker } from '@/shared/ui/DatePicker'

import s from './ProfileInfoForm.module.scss'

import { useProfileData, useProfileForm } from '../services'

const citiesOptions: any[] = [
  { title: 'Minsk', value: 'minsk' },
  { title: 'Moscow', value: 'moscow' },
]

export const ProfileInfoForm = () => {
  const { formData, formErrorsText, formText } = useProfileData()
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useProfileForm(formData, formErrorsText)

  return (
    <form className={s.form}>
      <Controller
        control={control}
        name={'username'}
        render={({ field, fieldState: { error } }) => (
          <Input
            className={error && s.formFieldWithError}
            error={error?.message}
            label={formText.userNameLabel}
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
            className={error && s.formFieldWithError}
            error={error?.message}
            label={formText.firstNameLabel}
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
            className={error && s.formFieldWithError}
            error={error?.message}
            label={formText.lastNameLabel}
            type={'text'}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name={'dateOfBirth'}
        render={({ field, fieldState: { error } }) => {
          return (
            <DatePicker
              error={error?.message}
              onChange={field.onChange}
              placeholder={formText.dateOfBirth}
              value={field.value ? new Date(field.value).toString() : ''} // TODO what is value
            />
          )
        }}
      />

      <div className={s.selectWrapper}>
        <div className={s.select}>
          <Controller
            control={control}
            name={'country'}
            render={({ field, fieldState: { error } }) => (
              <Select
                label={formText.countrySelectLabel}
                options={COUNTRIES_LIST}
                placeholder={formText.countrySelectPlaceholder}
                value={field.value}
              />
            )}
          />
        </div>
        <div className={s.select}>
          <Controller
            control={control}
            name={'city'}
            render={({ field, fieldState: { error } }) => (
              <Select
                label={formText.citySelectLabel}
                options={citiesOptions}
                placeholder={formText.citySelectPlaceholder}
                value={field.value}
              />
            )}
          />
        </div>
      </div>
      <Controller
        control={control}
        name={'aboutMe'}
        render={({ field, fieldState: { error } }) => (
          <TextField
            error={error?.message}
            label={formText.textFieldLabel}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />
      <Button className={s.saveButton} fullWidth={false}>
        {formText.saveFormButton}
      </Button>
    </form>
  )
}
