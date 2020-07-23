import React, { FC, useEffect } from 'react';
import { AppHeader } from '../../components/AppHeader';
import { AppFooter } from '../../components/AppFooter';
import { AppInput } from '../../components/AppInput';
import { AppField } from '../../components/AppField';
import { MRZField } from "../../components/MRZField";
import { useReactiveState } from '../../hooks';
import styles from './index.modules.scss';
import OCRB from 'url:../../../assets/OCRB.otf';

type Props = {};

const App: FC<Props> = () => {
  const type = useReactiveState('P');
  const countryCode = useReactiveState('');
  const passportNo = useReactiveState('');
  const surname = useReactiveState('');
  const givenNames = useReactiveState('');
  const nationality = useReactiveState('');
  const dateOfBirth = useReactiveState('');
  const personalNo = useReactiveState('');
  const sex = useReactiveState('');
  const placeOfBirth = useReactiveState('');
  const dateOfIssue = useReactiveState('');
  const dateOfExpiry = useReactiveState('');

  useEffect(() => {
    const $style = document.createElement('style');

    $style.innerHTML = `
      :root {
        --ocr-font-family: OCRB;
      }

      /*
       * "OCR" licensed under the SIL Open Font License
       * https://github.com/opensourcedesign/fonts/tree/master/OCR
       */
      @font-face {
        font-family: var(--ocr-font-family);
        src: url(${OCRB});
      }
    `;

    document.head.appendChild($style);

    const $link = document.createElement('link');

    $link.setAttribute('rel', 'stylesheet');
    $link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap');

    document.head.appendChild($link);

    const setBaseVh = () => {
      const vh = window.innerHeight / 100;
      const { documentElement } = document;

      if (documentElement instanceof HTMLHtmlElement) {
        documentElement.style.setProperty('--vh', `${vh}px`);
      }
    }

    setBaseVh();

    window.addEventListener('resize', setBaseVh);
  }, []);

  return (
    <div className={styles.appContainer}>
      <div className={styles.header}>
        <AppHeader />
      </div>
      <div className={styles.mrz}>
        <MRZField
          type={type.value}
          countryCode={countryCode.value}
          passportNo={passportNo.value}
          surname={surname.value}
          givenNames={givenNames.value}
          nationality={nationality.value}
          dateOfBirth={dateOfBirth.value}
          personalNo={personalNo.value}
          sex={sex.value}
          placeOfBirth={placeOfBirth.value}
          dateOfIssue={dateOfIssue.value}
          dateOfExpiry={dateOfExpiry.value}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.field}>
          <AppField label="型 / Type" help="パスポートは P で固定">
            <AppInput value={type} readOnly />
          </AppField>
        </div>
        <div className={styles.field}>
          <AppField label="発行国 / Country Code">
            <AppInput value={countryCode} placeholder="JPN" />
          </AppField>
          </div>
        <div className={styles.field}>
          <AppField label="旅券番号 / Passport No.">
            <AppInput value={passportNo} placeholder="XX1234567" />
          </AppField>
        </div>
        <div className={styles.field}>
          <AppField label="姓 / Surname">
            <AppInput value={surname} placeholder="YAMADA" />
          </AppField>
        </div>
        <div className={styles.field}>
          <AppField label="名 / Given Names">
            <AppInput value={givenNames} placeholder="TARO" />
          </AppField>
        </div>
        <div className={styles.field}>
          <AppField label="国籍 / Nationality">
            <AppInput value={nationality} placeholder="JPN" />
          </AppField>
        </div>
        <div className={styles.field}>
          <AppField label="生年月日 / Date of birth">
            <AppInput value={dateOfBirth} placeholder="970101" />
          </AppField>
        </div>
        <div className={styles.field}>
          <AppField label="個人番号 / Personal No." help="国によっては設定されません">
            <AppInput value={personalNo} placeholder="" />
          </AppField>
        </div>
        <div className={styles.field}>
          <AppField label="性別 / Sex" help="男性なら M 、女性なら F">
            <AppInput value={sex} placeholder="M" />
          </AppField>
        </div>
        <div className={styles.field}>
          <AppField label="本籍 / Place of birth" help="MRZでは使用されません">
            <AppInput value={placeOfBirth} placeholder="JPN" />
          </AppField>
        </div>
        <div className={styles.field}>
          <AppField label="発行年月日 / Date of issue" help="MRZでは使用されません">
            <AppInput value={dateOfIssue} placeholder="200101" />
          </AppField>
        </div>
        <div className={styles.field}>
          <AppField label="有効期限満了日 / Date of expiry">
            <AppInput value={dateOfExpiry} placeholder="241231" />
          </AppField>
        </div>
      </div>
      <div className={styles.footer}>
        <AppFooter />
      </div>
    </div>
  );
};

export { App };
