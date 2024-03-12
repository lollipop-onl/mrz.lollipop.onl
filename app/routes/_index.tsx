import { useForm, valiForm, toCustom } from "@modular-forms/react";
import { MetaFunction } from "@remix-run/node";
import { Input, object, optional, string } from "valibot";
import { Footer } from "~/components/Footer";
import { FormInput } from "~/components/FormInput";
import { Header } from "~/components/Header";
import { DATALIST_COUNTRY } from "~/constants/country";
import { DATALIST_SEX } from "~/constants/sex";

const schema = object({
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

export const meta: MetaFunction = () => {
  return [];
};

export default function Page() {
  const [, { Field }] = useForm<Input<typeof schema>>({
    validate: valiForm(schema),
    validateOn: "change",
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow px-4 pb-12 pt-8">
        <div className="mx-auto max-w-screen-lg">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-6 gap-y-10">
            <Field name="countryCode">
              {(field, props) => (
                <FormInput
                  label="型 / Type"
                  error={field.error}
                  readOnly
                  {...props}
                />
              )}
            </Field>
            <Field
              name="countryCode"
              transform={toCustom(
                (value) => {
                  console.log(value);
                  return "1234";
                },
                { on: "blur" },
              )}
            >
              {(field, props) => (
                <FormInput
                  label="発行国 / Country code"
                  error={field.error}
                  {...props}
                />
              )}
            </Field>
            <Field name="passportNo">
              {(field, props) => (
                <FormInput
                  label="旅券番号 / Passport No."
                  error={field.error}
                  {...props}
                />
              )}
            </Field>
            <Field name="surname">
              {(field, props) => (
                <FormInput
                  label="姓 / Surname"
                  error={field.error}
                  {...props}
                />
              )}
            </Field>
            <Field name="givenNames">
              {(field, props) => (
                <FormInput
                  label="名 / Given Names"
                  error={field.error}
                  {...props}
                />
              )}
            </Field>
            <Field name="nationality">
              {(field, props) => (
                <FormInput
                  label="国籍 / Nationality"
                  options={DATALIST_COUNTRY}
                  error={field.error}
                  {...props}
                />
              )}
            </Field>
            <Field name="dateOfBirth">
              {(field, props) => (
                <FormInput
                  label="生年月日 / Date of birth"
                  error={field.error}
                  {...props}
                />
              )}
            </Field>
            <Field name="personalNo">
              {(field, props) => (
                <FormInput
                  label="個人番号 / Personal No."
                  note="設定のない国もあります"
                  error={field.error}
                  {...props}
                />
              )}
            </Field>
            <Field name="sex">
              {(field, props) => (
                <FormInput
                  label="性別 / Sex"
                  options={DATALIST_SEX}
                  error={field.error}
                  {...props}
                />
              )}
            </Field>
            <Field name="placeOfBirth">
              {(field, props) => (
                <FormInput
                  label="国籍 / Place of birth"
                  options={DATALIST_COUNTRY}
                  note="MRZ には含まれません"
                  error={field.error}
                  {...props}
                />
              )}
            </Field>
            <Field name="dateOfIssue">
              {(field, props) => (
                <FormInput
                  label="発行年月日 / Date of issue"
                  note="MRZ には含まれません"
                  error={field.error}
                  {...props}
                />
              )}
            </Field>
            <Field name="dateOfExpiry">
              {(field, props) => (
                <FormInput
                  label="有効期限満了日 / Date of expiry"
                  error={field.error}
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
