/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * Api Documentation
 * Api Documentation
 * OpenAPI spec version: 1.0
 */
import { BodyType, createInstance } from './api-instance'

export type UpdateUserDataUsingPUT200 = { [key: string]: any }

export type UpdateUserDataUsingPUTParams = {
  name?: string
}

export type RegisterNewUserUsingPOST200 = { [key: string]: any }

export interface View {
  contentType?: string
}

export interface UserUpdateRequestDto {
  email?: string
  password?: string
  password2?: string
  username?: string
}

export interface UserResponseDto {
  email?: string
  firstName?: string
  lastName?: string
  username?: string
}

export interface UserRegistrationRequestDto {
  email?: string
  password?: string
  password2?: string
  username?: string
}

/**
 * @summary registerNewUser
 */
export const registerNewUserUsingPOST = (
  userRegistrationRequestDto: BodyType<UserRegistrationRequestDto>
) => {
  return createInstance<RegisterNewUserUsingPOST200 | void>({
    data: userRegistrationRequestDto,
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    url: `/api/v1/user`,
  })
}

/**
 * @summary updateUserData
 */
export const updateUserDataUsingPUT = (userUpdateRequestDto: BodyType<UserUpdateRequestDto>) => {
  return createInstance<UpdateUserDataUsingPUT200 | void>({
    data: userUpdateRequestDto,
    headers: { 'Content-Type': 'application/json' },
    method: 'put',
    url: `/api/v1/user`,
  })
}

/**
 * @summary getById
 */
export const getByIdUsingGET = (id: number) => {
  return createInstance<UserResponseDto>({ method: 'get', url: `/api/v1/user/${id}` })
}

/**
 * @summary deleteUser
 */
export const deleteUserUsingDELETE = (id: number) => {
  return createInstance<number | void>({ method: 'delete', url: `/api/v1/user/${id}` })
}
