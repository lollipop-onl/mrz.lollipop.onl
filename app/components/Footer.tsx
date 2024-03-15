import { Link } from '@remix-run/react'
import { Scan, LogoGithub, Debug, Translate } from '@carbon/icons-react';
import logo from '~/assets/logo.svg';

type FooterNavLink = {
  icon: React.FC;
  href: string;
  text: string;
}

const FOOTER_NAV_LINKS = [
  { icon: Translate, href: '/en', text: 'English' },
  { icon: LogoGithub, href: 'https://github.com/lollipop-onl/mrz.lollipop.onl', text: 'ソースコード' },
  { icon: Debug, href: 'https://github.com/lollipop-onl/mrz.lollipop.onl/issues', text: '不具合の報告' },
] satisfies FooterNavLink[]

export const Footer = () => {
  return (
    <footer className="bg-slate-700 px-5 py-8 text-slate-200">
      <div className="max-w-screen-lg mx-auto flex flex-wrap gap-x-5 gap-y-4">
        <h1 className='grid grid-flow-col gap-2 place-items-center text-white'>
          <Scan size={32} />
          <img src={logo} alt="MRZsim" />
        </h1>
        <div className="ml-auto grid gap-2">
          <p className="text-xs leading-relaxed">入力内容のセキュリティを保証いたしません。実在するパスポート情報を入力しないでください。</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-end">
            {FOOTER_NAV_LINKS.map(({ icon: Icon, href, text }, index) => (
              <nav key={index}>
                <Link to={href} className='grid place-items-center grid-flow-col gap-2 text-sm md:text-xs underline hover:no-underline focus:no-underline'>
                  <Icon className='w-4 h-4' />
                  {text}
                </Link>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}