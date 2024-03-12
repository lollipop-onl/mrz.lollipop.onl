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
      <label htmlFor={htmlFor} className="text-sm font-bold text-slate-700">
        {label}
      </label>
      <div>{children}</div>
      <p className="text-sm text-slate-600" aria-describedby={htmlFor}>
        {note || <>&nbsp;</>}
      </p>
      <p
        className="text-sm text-red-800"
        role="alert"
        aria-errormessage={htmlFor}
      >
        {error || <>&nbsp;</>}
      </p>
    </div>
  );
};
