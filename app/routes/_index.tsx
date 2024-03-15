import {
  useForm,
  valiForm,
  getValues,
  toUpperCase,
  toTrimmed,
  type FieldProps,
} from "@modular-forms/react";
import { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import { Input } from "valibot";
import { Footer } from "~/components/Footer";
import { FormComboBox } from "~/components/FormComboBox";
import { FormInput } from "~/components/FormInput";
import { Header } from "~/components/Header";
import { Mrz } from "~/components/Mrz";
import { DATALIST_COUNTRY } from "~/constants/country";
import { DATALIST_SEX } from "~/constants/sex";
import { useStore } from "~/hooks/useStore";
import { PassportSchema } from "~/schemas/passport";

const transform: FieldProps<any, any, any>["transform"] = [
  toUpperCase({ on: "blur" }),
  toTrimmed({ on: "blur" }),
];

export const meta: MetaFunction = () => {
  return [];
};

export default function Page() {
  const [state, setState] = useStore();

  const [form, { Field }] = useForm<Input<typeof PassportSchema>>({
    validate: valiForm(PassportSchema),
    validateOn: "change",
    initialValues: state,
  });

  const values = getValues(form);

  useEffect(() => {
    setState(values);
  }, [values]);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0">
        <Header />
      </div>
      <main className="grow px-4 pb-12 pt-8">
        <div className="mx-auto max-w-screen-lg">
          <Mrz values={values} />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-6 gap-y-10">
            <FormInput label="型 / Type" value="P" readOnly />
            <Field name="countryCode" transform={transform}>
              {(field, props) => (
                <FormComboBox
                  label="発行国 / Country code"
                  options={DATALIST_COUNTRY}
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
            <Field name="passportNo" transform={transform}>
              {(field, props) => (
                <FormInput
                  label="旅券番号 / Passport No."
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
            <Field name="surname" transform={transform}>
              {(field, props) => (
                <FormInput
                  label="姓 / Surname"
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
            <Field name="givenNames" transform={transform}>
              {(field, props) => (
                <FormInput
                  label="名 / Given Names"
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
            <Field name="nationality" transform={transform}>
              {(field, props) => (
                <FormInput
                  label="国籍 / Nationality"
                  options={DATALIST_COUNTRY}
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
            <Field name="dateOfBirth" transform={transform}>
              {(field, props) => (
                <FormInput
                  label="生年月日 / Date of birth"
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
            <Field name="personalNo" transform={transform}>
              {(field, props) => (
                <FormInput
                  label="個人番号 / Personal No."
                  note="設定のない国もあります"
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
            <Field name="sex" transform={transform}>
              {(field, props) => (
                <FormInput
                  label="性別 / Sex"
                  options={DATALIST_SEX}
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
            <Field name="placeOfBirth" transform={transform}>
              {(field, props) => (
                <FormInput
                  label="国籍 / Place of birth"
                  options={DATALIST_COUNTRY}
                  note="MRZ には含まれません"
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
            <Field name="dateOfIssue" transform={transform}>
              {(field, props) => (
                <FormInput
                  label="発行年月日 / Date of issue"
                  note="MRZ には含まれません"
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
            <Field name="dateOfExpiry" transform={transform}>
              {(field, props) => (
                <FormInput
                  label="有効期限満了日 / Date of expiry"
                  error={field.error}
                  value={field.value.value}
                  {...props}
                />
              )}
            </Field>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
