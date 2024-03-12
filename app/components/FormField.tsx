import { ReadonlySignal } from "@preact/signals-react";

type Props = {
  children: React.ReactNode;
  label: string;
  htmlFor: string;
  note?: string;
  error?: ReadonlySignal<string>;
};

export const FormField = ({ children, label, htmlFor, note, error }: Props) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <div>{children}</div>
      {note && <p aria-describedby={htmlFor}>{note}</p>}
      {error && <p aria-errormessage={htmlFor}>{error}</p>}
    </div>
  );
};
