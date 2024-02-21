type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
