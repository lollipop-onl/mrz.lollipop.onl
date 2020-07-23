import React, { FC, useEffect } from 'react';
import { AppInput } from '../components/AppInput';
import { MRZField } from "../components/MRZField";
import { useReactiveState } from '../hooks';
import OCRB from 'url:../../assets/OCRB.otf';

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

      @font-face {
        font-family: var(--ocr-font-family);
        src: url(${OCRB});
      }
    `;

    document.head.appendChild($style);
  }, []);

  return (
    <div>
      <AppInput value={type} readOnly />
      <AppInput value={countryCode} placeholder="発行国 / Country Code" />
      <AppInput value={passportNo} placeholder="旅券番号 / Passport No." />
      <AppInput value={surname} placeholder="姓 / Surname" />
      <AppInput value={givenNames} placeholder="名 / Given Names" />
      <AppInput value={nationality} placeholder="国籍 / Nationality" />
      <AppInput value={dateOfBirth} placeholder="生年月日 / Date of birth" />
      <AppInput value={personalNo} placeholder="個人番号 / Personal No." />
      <AppInput value={sex} placeholder="性別 / Sex" />
      <AppInput value={placeOfBirth} placeholder="本籍 / Place of birth" />
      <AppInput value={dateOfIssue} placeholder="発行年月日 / Date of issue" />
      <AppInput value={dateOfExpiry} placeholder="有効期限満了日 / Date of expiry" />
      <br/>
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
  );
};

export { App };
