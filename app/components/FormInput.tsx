import { forwardRef, useId } from "react";
import { FormField } from "~/components/FormField";

type Props = Pick<
  React.ComponentProps<typeof FormField>,
  "label" | "note" | "error"
>;

export const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ label, note, error, ...inputProps }, ref) => {
    const id = useId();

    return (
      <FormField htmlFor={id} label={label} note={note} error={error}>
        <input ref={ref} id={id} {...inputProps} />
      </FormField>
    );
  },
);
