import { useSearchParams } from "@remix-run/react";
import { useCallback, useMemo } from "react";
import { Input, getDefaults, keyof, parse } from "valibot";
import { PassportSchema } from "~/schemas/passport";

const defaultValues = getDefaults(PassportSchema);

export const useStore = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const state = useMemo<Input<typeof PassportSchema>>(() => {
    const input = Object.fromEntries(
      keyof(PassportSchema).options.map((key) => [
        key,
        searchParams.get(key) ?? undefined,
      ]),
    );

    return parse(PassportSchema, input);
  }, [searchParams]);

  const setState = useCallback(
    (values: Input<typeof PassportSchema>) => {
      const newSearchParams = new URLSearchParams();
      const parsed = parse(PassportSchema, values);

      for (const key of keyof(PassportSchema).options) {
        const value = parsed[key];

        if (value != null && value !== defaultValues?.[key]) {
          newSearchParams.set(key, value);
        }
      }

      newSearchParams.sort();

      requestAnimationFrame(() => {
        if (newSearchParams.toString() !== searchParams.toString()) {
          setSearchParams(newSearchParams, { replace: true });
        }
      });
    },
    [searchParams, setSearchParams],
  );

  return [state, setState] as const;
};
