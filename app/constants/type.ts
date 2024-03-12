import { DatalistOptionItem } from "~/types";

export const DATALIST_TYPE = [
  { value: "P", label: "旅券 / Passport" },
  { value: "I", label: "身分証明書 / ID" },
  { value: "V", label: "ビザ / Visa" },
  { value: "O", label: "その他 / Other" },
] satisfies DatalistOptionItem[];
