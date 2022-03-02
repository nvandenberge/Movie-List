export const emailValidation = (input) =>
/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input) ? true : false;