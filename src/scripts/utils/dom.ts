export const insertStyle = function (style: string): void {
  const styleElement = document.createElement('style');

  styleElement.innerHTML = style;

  document.head.appendChild(styleElement);
}

export const insertCssFile = (cssUrl: string): void => {
  const linkElement = document.createElement('link');

  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('href', cssUrl);

  document.head.appendChild(linkElement);
}

export const setBaseVh = (): () => void => {
  const cb = () => {
    const vh = window.innerHeight / 100;
    const { documentElement } = document;

    if (documentElement instanceof HTMLHtmlElement) {
      documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }

  cb();

  window.addEventListener('resize', cb);

  return () => {
    window.removeEventListener('resize', cb);
  };
}
