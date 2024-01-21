import { Controller } from 'react-hook-form'
import { toast } from 'react-toastify'

import { COUNTRIES_LIST } from '@/shared/const'
import { Button, Input, Select, TextField } from '@/shared/ui'
import { DatePicker } from '@/shared/ui/DatePicker'
import { UserProfileFormValuesType } from '@/widgets/ProfileInfoForm/services/useProfileForm'

import s from './ProfileInfoForm.module.scss'

import { useGetCity, useProfileData, useProfileForm } from '../services'
import { ProfileSelectChildren } from '../ui/ProfileSelectChildren'

export const ProfileInfoForm = () => {
  const { formData, formErrorsText, formText, profileNotifications, updateProfile } =
    useProfileData()
  const { control, handleSubmit, setValue, watch } = useProfileForm(formData, formErrorsText)
  const country = watch('country')

  const { citiesLoading, citiesOptions } = useGetCity({ country, setValue })

  const onSubmitHandler = (data: UserProfileFormValuesType) => {
    updateProfile(data)
      .unwrap()
      .then(() => toast.success(profileNotifications.successfulSave))
      .catch(() => toast.success(profileNotifications.errorSave))
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
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
              className={error && s.formFieldWithError}
              error={error?.message}
              label={formText.dateOfBirth}
              placeholder={formText.dateOfBirth}
              setStartDate={field.onChange}
              startDate={field.value || null}
            />
          )
        }}
      />

      <div className={s.selectWrapper}>
        <div className={s.select}>
          <Controller
            control={control}
            name={'country'}
            render={({ field }) => (
              <Select
                label={formText.countrySelectLabel}
                onValueChange={field.onChange}
                options={COUNTRIES_LIST}
                placeholder={formText.countrySelectPlaceholder}
                value={field.value}
              >
                <ProfileSelectChildren options={COUNTRIES_LIST} />
              </Select>
            )}
          />
        </div>
        <div className={s.select}>
          <Controller
            control={control}
            name={'city'}
            render={({ field }) => {
              return (
                <Select
                  disabled={citiesLoading}
                  label={formText.citySelectLabel}
                  onValueChange={field.onChange}
                  options={citiesOptions}
                  placeholder={formText.citySelectPlaceholder}
                  value={field.value}
                >
                  <ProfileSelectChildren options={citiesOptions} />
                </Select>
              )
            }}
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
