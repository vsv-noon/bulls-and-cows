export function createDigitValidator(base: number): (char: string) => boolean {
  return (char: string) => {
    if (!base || !char.match(/^[0-9a-zA-Z]$/)) {
      throw new Error('Base must be specified and char must be a valid digit');
    }

    return false;
  };
}
