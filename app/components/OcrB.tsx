import ocrb from "~/assets/gryph-ocrb.png";

type Props = { char: string };

const CHAR_MAP = [
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
  ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
  ["U", "V", "W", "X", "Y", "Z", "<"],
];

const CHAR_MAP_COLS = 10;
const CHAR_MAP_ROWS = 4;

export const OcrB = ({ char }: Props) => {
  const rowIndex = CHAR_MAP.findIndex((row) => row.includes(char));
  const colIndex = CHAR_MAP[rowIndex]?.indexOf(char) ?? -1;

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${ocrb})`,
        backgroundSize: `${CHAR_MAP_COLS * 100}% ${CHAR_MAP_ROWS * 100}%`,
        backgroundPosition: `${(colIndex / (CHAR_MAP_COLS - 1)) * 100}% ${
          (rowIndex / (CHAR_MAP_ROWS - 1)) * 100
        }%`,
        aspectRatio: "103/100",
      }}
    />
  );
};
