import { forwardRef, useId } from "react";
import { FormField } from "~/components/FormField";
import { DatalistOptionItem } from "~/types";

type Props = React.ComponentProps<"input"> &
  Pick<React.ComponentProps<typeof FormField>, "label" | "note" | "error"> & {
    options?: DatalistOptionItem[];
  };

export const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ label, note, error, options, ...inputProps }, ref) => {
    const id = useId();
    const datalistId = options && useId();

    return (
      <FormField htmlFor={id} label={label} note={note} error={error}>
        <input
          ref={ref}
          id={id}
          className="w-full border-b-2 border-slate-300 bg-transparent py-2 outline-none focus:border-slate-700"
          list={datalistId}
          {...inputProps}
        />
        {options && (
          <datalist id={datalistId}>
            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </datalist>
        )}
      </FormField>
    );
  },
);
