export const validateEmail = (email) => (
  /^[A-Za-z0-9\.\-\_]{1,}\@[A-Za-z0-9\.\-\_]{1,}\.[A-Za-z]{1,}$/.test(email)
)

export const validatePassword = (password) => (
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)
)

export const signUpValidationAndErrors = (
  email, password, password_confirmation, platform, username, level
) => {
  let validation = { valid: true, errors: [] }
  if (!validateEmail(email)) {
    validation.valid = false
    validation.errors.push("Email is not correctly formatted.")
  }

  if (!validatePassword(password)) {
    validation.valid = false
    validation.errors.push("Password must have at at least 1 uppercase letter, 1 lowercase letter, and 1 number.")
  } else if (password !== password_confirmation) {
    validation.valid = false
    validation.errors.push("Password Confirmation must match the password")
  }

  if (['ps4', 'xb1'].indexOf(platform) === -1) {
    validation.valid = false
    validation.errors.push("Platform choice is not correct.")
  }

  if (username.length < 1) {
    validation.valid = false
    validation.errors.push("You must provide a valid username.")
  }

  const intLevel = parseInt(level)
  if (intLevel || intLevel > 30 || intLevel < 1) {
    validation.valid = false
    validation.errors.push("You must provide a number between 1 and 30 for the level.")
  }

  return validation
}
