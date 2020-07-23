import React, { FC, useEffect } from 'react';
import qs from 'qs';
import { AppHeader } from '../../components/AppHeader';
import { AppFooter } from '../../components/AppFooter';
import { AppInput } from '../../components/AppInput';
import { AppField } from '../../components/AppField';
import { MRZField } from "../../components/MRZField";
import { useReactiveState } from '../../hooks';
import { getQueries, insertCssFile, insertStyle, replaceQuery, setBaseVh } from '../../utils';
import styles from './index.modules.scss';
import OCRB from 'url:../../../assets/OCRB.otf';

type Props = {};

const {
  countryCode: initialCountryCode = '',
  passportNo: initialPassportNo = '',
  surname: initialSurname = '',
  givenNames: initialGivenNames = '',
  nationality: initialNationality = '',
  dateOfBirth: initialDateOfBirth = '',
  personalNo: initialOersonalNo = '',
  sex: initialSex = '',
  placeOfBirth: initialPlaceOfBirth = '',
  dateOfIssue: initialDateOfIssue = '',
  dateOfExpiry: initialDateOfExpiry = '',
} = getQueries();

const App: FC<Props> = () => {
  const type = useReactiveState('P');
  const countryCode = useReactiveState(initialCountryCode);
  const passportNo = useReactiveState(initialPassportNo);
  const surname = useReactiveState(initialSurname);
  const givenNames = useReactiveState(initialGivenNames);
  const nationality = useReactiveState(initialNationality);
  const dateOfBirth = useReactiveState(initialDateOfBirth);
  const personalNo = useReactiveState(initialOersonalNo);
  const sex = useReactiveState(initialSex);
  const placeOfBirth = useReactiveState(initialPlaceOfBirth);
  const dateOfIssue = useReactiveState(initialDateOfIssue);
  const dateOfExpiry = useReactiveState(initialDateOfExpiry);

  useEffect(() => {
    insertStyle(`
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
    `);
    insertCssFile('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap');
    setBaseVh();
  }, []);

  useEffect(() => {
    replaceQuery({
      countryCode: countryCode.value,
      passportNo: passportNo.value,
      surname: surname.value,
      givenNames: givenNames.value,
      nationality: nationality.value,
      dateOfBirth: dateOfBirth.value,
      personalNo: personalNo.value,
      sex: sex.value,
      placeOfBirth: placeOfBirth.value,
      dateOfIssue: dateOfIssue.value,
      dateOfExpiry: dateOfExpiry.value,
    })
  }, [countryCode.value, passportNo.value, surname.value, givenNames.value, nationality.value, dateOfBirth.value, personalNo.value, sex.value, placeOfBirth.value, dateOfIssue.value, dateOfExpiry.value]);

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
