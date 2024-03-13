import { useMemo } from "react";
import { Input, getDefaults } from "valibot";
import { PassportSchema } from "~/schemas/passport";

const defaultValues = getDefaults(PassportSchema);

export const useInitialValues = () => {
  const initialValues = useMemo<Input<typeof PassportSchema>>(() => {
    return {
      type: defaultValues?.type,
      countryCode: "JPN",
      passportNo: "1234",
    };
  }, []);

  return { initialValues };
};
