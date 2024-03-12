import { Input } from "valibot";
import { OcrB } from "./OcrB";
import { PassportSchema } from "~/schemas/passport";

type Props = { values: Input<typeof PassportSchema> };

export const Mrz = ({ values }: Props) => {
  return (
    <div className="grid bg-white p-[3%]">
      <div className="mb-[3%] grid grid-cols-[repeat(39,1fr)]">
        {"123456789012345678901234567890123456789".split("").map((char) => (
          <OcrB key={char} char={char} />
        ))}
      </div>
      <div className="grid grid-cols-[repeat(39,1fr)]">
        {"123456789012345678901234567890123456789".split("").map((char) => (
          <OcrB key={char} char={char} />
        ))}
      </div>
    </div>
  );
};
