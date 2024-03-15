import { Link } from '@remix-run/react'
import { QrCodeIcon } from '@heroicons/react/24/outline'
import { LanguageIcon, SpeakerXMarkIcon, CodeBracketIcon, BugAntIcon } from '@heroicons/react/16/solid';
import logo from '~/assets/logo.svg';

type FooterNavLink = {
  icon: React.FC;
  href: string;
  text: string;
}

const FOOTER_NAV_LINKS = [
  { icon: LanguageIcon, href: '/en', text: 'English' },
  { icon: SpeakerXMarkIcon, href: 'https://x.com/lollipop_onl', text: '@lollipop_onl' },
  { icon: CodeBracketIcon, href: 'https://github.com/lollipop-onl/mrz.lollipop.onl', text: 'ソースコード' },
  { icon: BugAntIcon, href: 'https://github.com/lollipop-onl/mrz.lollipop.onl/issues', text: '不具合の報告' },
] satisfies FooterNavLink[]

export const Footer = () => {
  return (
    <footer className="bg-slate-700 px-5 py-8 text-slate-200">
      <div className="max-w-screen-lg mx-auto flex flex-wrap gap-x-5 gap-y-4">
        <h1 className='grid grid-flow-col gap-2 place-items-center text-white'>
          <QrCodeIcon className='w-8 h-8' />
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