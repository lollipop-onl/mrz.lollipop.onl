import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [];
};

export default function Page() {
  return (
    <div>
      <p>Hello, World.</p>
    </div>
  );
}
