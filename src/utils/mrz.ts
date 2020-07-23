export const mrzChunk = (str: string, length = str.length): string => {
  return str
    .slice(0, length)
    .padEnd(length, ' ')
    .replace(/ /g, '<')
    .toUpperCase();
};

export const mrzChecksum = (str: string): string => {
  const total = str.split('').reduce<number>((checksum, char, i) => {
    const num = Number.parseInt(char, 36) || 0;

    checksum += num * [7, 3, 1][i % 3];

    return checksum;
  }, 0);

  return `${total % 10}`;
}
