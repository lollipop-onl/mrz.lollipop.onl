export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-500 p-5">
      <div className="max-w-screen-lg mx-auto">
        <ul>
          <li>
            このツールはブラウザ上で処理され、内容がサーバーなどに送信されることはありません。
          </li>
          <li>
            実在のパスポート情報は個人情報に該当するため、入力しないでください。
          </li>
        </ul>
      </div>
    </footer>
  );
};
