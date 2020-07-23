import React, { FC, useMemo, useEffect } from 'react';
import { AppInput } from '../components/AppInput';
import { useReactiveState } from '../hooks';
import OCRB from 'url:../../assets/OCRB.otf';

type Props = {};

const sanitize = (str: string, length = str.length) => {
  return str.slice(0, length).padEnd(length, ' ');
}

const mrzLine = (str: string): string => {
  const line = str.replace(/ /g, '<');
  const trailingFiller = '<'.repeat(44 - line.length);

  return [line, trailingFiller].join('').toUpperCase();
}

const checksum = (str: string): string => {
  const total = str.split('').reduce<number>((checksum, char, i) => {
    const num = Number.parseInt(char, 36) || 0;

    checksum += num * [7, 3, 1][i % 3];

    return checksum;
  }, 0);

  return `${total % 10}`;
};

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
      @font-face {
        font-family: "OCRB";
        src: url(${OCRB});
      }
    `;

    document.head.appendChild($style);
  }, []);

  const line1 = useMemo(() => {
    const typeValue = sanitize(type.value, 1);
    const countryCodeValue = sanitize(countryCode.value, 3);
    const surnameValue = sanitize(surname.value);
    const givenNamesValue = sanitize(givenNames.value.replace(/ +/g, ' '));

    return mrzLine(`${typeValue} ${countryCodeValue}${surnameValue}  ${givenNamesValue}`);
  }, [type.value, countryCode.value, surname.value, givenNames.value]);

  const line2 = useMemo(() => {
    const passportNoValue = sanitize(passportNo.value, 9);
    const passportNoChecksum = checksum(passportNoValue);
    const nationalityValue = sanitize(nationality.value, 3);
    const dateOfBirthValue = sanitize(dateOfBirth.value, 6);
    const dateOfBirthChecksum = checksum(dateOfBirthValue)
    const sexValue = sanitize(sex.value, 1);
    const dateOfExpiryValue = sanitize(dateOfExpiry.value, 6);
    const dateOfExpiryChecksum = checksum(dateOfExpiryValue);
    const personalNoValue = sanitize(personalNo.value, 14);
    const personalNoChecksum = checksum(personalNoValue);
    const lineChecksum = checksum(
      [
        passportNoValue,
        passportNoChecksum,
        dateOfBirthValue,
        dateOfBirthChecksum,
        dateOfExpiryValue,
        dateOfExpiryChecksum,
        personalNoValue,
        personalNoChecksum,
      ].join('')
    );

    return mrzLine(
      [
        passportNoValue,
        passportNoChecksum,
        nationalityValue,
        dateOfBirthValue,
        dateOfBirthChecksum,
        sexValue,
        dateOfExpiryValue,
        dateOfExpiryChecksum,
        personalNoValue,
        personalNoChecksum,
        lineChecksum,
      ]
        .join('')
    );
  }, [passportNo.value, nationality.value, dateOfBirth.value, sex.value, dateOfExpiry.value, personalNo.value]);

  return (
    <div style={{ fontFamily: 'OCRB, monospace' }}>
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
      <p>{line1}</p>
      <p>{line2}</p>
    </div>
  );
};

export { App };
