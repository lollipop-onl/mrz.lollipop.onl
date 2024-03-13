import { OcrB } from "./OcrB";
import { Input } from "valibot";
import { PassportSchema } from "~/schemas/passport";

type Props = { values: Input<typeof PassportSchema> };

export const Mrz = ({ values }: Props) => {
  return (
    <div className="grid bg-white p-[3%]">
      <p className="mb-[3%] grid grid-cols-[repeat(39,1fr)]">
        {"123456789012345678901234567890123456789"
          .split("")
          .map((char, index) => (
            <OcrB key={index} char={char} />
          ))}
      </p>
      <p className="grid grid-cols-[repeat(39,1fr)]">
        {"123456789012345678901234567890123456789"
          .split("")
          .map((char, index) => (
            <OcrB key={index} char={char} />
          ))}
      </p>
    </div>
  );
};
