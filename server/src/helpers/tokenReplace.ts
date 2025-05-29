/**
 * Replaces tokens in a template with values from a data object.
 *
 * @param template The template to replace tokens in
 * @param data The data to use for replacing tokens
 * @param keyToToken The function to convert a key to a token, defaults to `{{${key.toLowerCase()}}}`
 *
 * @returns The template with all tokens replaced with their corresponding values
 */
export function tokenReplace(
  template: string,
  data: Record<string, any>,
  keyToToken = (key: string) => `{{${key.toLowerCase()}}}`
): string {
  const keys = Object.keys(data).map((key) => ({
    token: keyToToken(key),
    value: (data as any)[key].toString() as string,
  }));

  let replaced = template;
  for (const { token, value } of keys) {
    replaced = replaced.replaceAll(token, value);
  }

  return replaced;
}
