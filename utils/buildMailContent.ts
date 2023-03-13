const buildNotificationMailContent = ({ email, name, text }) => {
  return `Vous avez un message de ${name} - ${email} : ${text}`
}

export default buildNotificationMailContent
