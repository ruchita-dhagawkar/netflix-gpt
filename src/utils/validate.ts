export function validate(email: string): boolean {
  const regex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}
