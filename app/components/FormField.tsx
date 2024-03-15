import { Label, Text, FieldError } from 'react-aria-components';
import { ReadonlySignal } from "@preact/signals-react";

type Props =  {
  children: React.ReactNode;
  label: string;
  note?: string;
  error?: ReadonlySignal<string>;
};

export const FormField = ({ children, label, note, error}: Props) => {
  return (
    <>
      <Label className='text-sm font-bold text-slate-700'>{label}</Label>
      <div>{children}</div>
      {note && (
        <Text slot="description" className='text-sm text-slate-600 mt-2'>{note}</Text>
      )}
      <FieldError className="text-sm text-red-800">{error}</FieldError>
    </>
  );
};
