import { useForm, valiForm } from "@modular-forms/react";
import { MetaFunction } from "@remix-run/node";
import { Input, maxLength, minLength, object, optional, string } from "valibot";
import { Footer } from "~/components/Footer";
import { FormInput } from "~/components/FormInput";
import { Header } from "~/components/Header";

const schema = object({
  passportNo: optional(string([maxLength(9), minLength(2)]), "123456"),
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
        <Field name="passportNo">
          {(field, props) => (
            <FormInput label="旅券番号" error={field.error} {...props} />
          )}
        </Field>
      </main>
      <Footer />
    </div>
  );
}
