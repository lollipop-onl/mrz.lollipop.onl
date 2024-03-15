import { forwardRef, useMemo, useState } from "react";
import { useFilter } from "react-aria";
import {
  Button,
  ComboBox,
  Input,
  Text,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";
import { FormField } from "~/components/FormField";
import { DatalistOptionItem } from "~/types";

type Props = React.ComponentProps<"input"> &
  Pick<React.ComponentProps<typeof FormField>, "label" | "note" | "error"> & {
    options: DatalistOptionItem[];
  };

export const FormComboBox = forwardRef<HTMLInputElement, Props>(
  ({ label, note, error, options, value = "", ...inputProps }, ref) => {
    const { contains } = useFilter({ sensitivity: "base" });

    const [inputValue, setInputValue] = useState(value.toString());

    const items = useMemo(
      () =>
        options.filter(
          ({ value, label }) =>
          contains(value, inputValue) ||
            (typeof label === "string" && contains(label, inputValue)),
        ),
      [options, inputValue],
    );

    return (
      <ComboBox
        allowsCustomValue
        menuTrigger="focus"
        inputValue={inputValue}
        onInputChange={setInputValue}
        items={items}
      >
        <FormField label={label} note={note} error={error}>
          <div className="relative">
            <Input
              ref={ref}
              className="w-full border-b-2 border-slate-300 bg-transparent py-2 outline-none focus:border-slate-700"
              value={value}
              {...inputProps}
            />
            <Button className="absolute right-0 top-1/2 -translate-y-1/2">
              ▼
            </Button>
          </div>
          <Popover className="w-[--trigger-width] overflow-auto rounded border bg-white">
            <ListBox className="max-h-[inherit] min-h-[unset] w-[unset]">
              {items.map(({ value, label }) => (
                <ListBoxItem
                  key={value}
                  className="grid gap-1 px-4 py-2 data-[focused]:bg-red-100 data-[pressed]:bg-red-300"
                  textValue={value}
                >
                  <Text slot="label">{label}</Text>
                  {/* <Text slot="description" className="text-xs">{label}</Text> */}
                </ListBoxItem>
              ))}
            </ListBox>
          </Popover>
        </FormField>
      </ComboBox>
    );
  },
);
