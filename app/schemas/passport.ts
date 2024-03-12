import { object, optional, string } from "valibot";

export const PassportSchema = object({
  type: optional(string([]), "P"),
  countryCode: optional(string([])),
  passportNo: optional(string([])),
  surname: optional(string([])),
  givenNames: optional(string([])),
  nationality: optional(string([])),
  dateOfBirth: optional(string([])),
  personalNo: optional(string([])),
  sex: optional(string([])),
  placeOfBirth: optional(string([])),
  dateOfIssue: optional(string([])),
  dateOfExpiry: optional(string([])),
});
