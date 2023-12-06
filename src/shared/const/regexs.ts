export const PASSWORD_PATTERN =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~])[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]+$/

export const USERNAME_PATTERN = /^[0-9A-Za-z_-]+$/

export const TAGS_REGEX = /(<\d+>[^<>]*<\/\d+>)/

export const OPEN_CLOSE_TAG_REGEX = /<(\d+)>([^<>]*)<\/(\d+)>/
