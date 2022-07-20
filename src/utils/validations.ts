export function emailValidation(email: string) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
}
