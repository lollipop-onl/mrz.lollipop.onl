import { object, optional, string, transform } from "valibot";

type ValidateOptions = {
  maxLength: number;
  allowWhitespace?: boolean;
};

const validate = (options: ValidateOptions) => {
  const { maxLength, allowWhitespace } = options;

  return (input: string): string => {
    return input
      .toUpperCase()
      .replace(/</g, " ")
      .replace(allowWhitespace ? /[^ A-Z0-9]/g : /[^A-Z0-9]/g, "")
      .slice(0, maxLength);
  };
};

export const PassportSchema = object({
  countryCode: transform(optional(string([]), ""), validate({ maxLength: 3 })),
  passportNo: transform(optional(string([]), ""), validate({ maxLength: 3 })),
  surname: transform(optional(string([]), ""), validate({ maxLength: 3 })),
  givenNames: transform(
    optional(string([]), ""),
    validate({ maxLength: 24, allowWhitespace: true }),
  ),
  nationality: transform(optional(string([]), ""), validate({ maxLength: 3 })),
  dateOfBirth: transform(optional(string([]), ""), validate({ maxLength: 6 })),
  personalNo: transform(optional(string([]), ""), validate({ maxLength: 3 })),
  sex: transform(optional(string([]), ""), validate({ maxLength: 1 })),
  placeOfBirth: transform(optional(string([]), ""), validate({ maxLength: 6 })),
  dateOfIssue: transform(optional(string([]), ""), validate({ maxLength: 6 })),
  dateOfExpiry: transform(optional(string([]), ""), validate({ maxLength: 6 })),
});
