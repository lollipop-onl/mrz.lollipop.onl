import { forwardRef } from "react";
import { Input, TextField } from "react-aria-components";
import { FormField } from "~/components/FormField";

type Props = React.ComponentProps<"input"> &
  Pick<React.ComponentProps<typeof FormField>, "label" | "note" | "error">;

export const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ label, note, error, ...inputProps }, ref) => {
    return (
      <TextField>

      <FormField label={label} note={note} error={error}>
        <Input
          ref={ref}
          className="w-full border-b-2 border-slate-300 bg-transparent py-2 outline-none focus:border-slate-700"
          {...inputProps}
        />
      </FormField>
      </TextField>
    );
  },
);
