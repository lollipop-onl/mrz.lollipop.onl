import React, { FC, useMemo } from 'react';
import { mrzChunk, mrzChecksum } from '../../../utils';
import styles from './index.modules.scss';

type Props = {
  type: string;
  countryCode: string;
  passportNo: string;
  surname: string;
  givenNames: string;
  nationality: string;
  dateOfBirth: string;
  personalNo: string;
  sex: string;
  placeOfBirth: string;
  dateOfIssue: string;
  dateOfExpiry: string;
};

const MRZField: FC<Props> = (props) => {
  const line1 = useMemo(() => {
    const type = mrzChunk(props.type, 1);
    const countryCode = mrzChunk(props.countryCode, 3);
    const surname = mrzChunk(props.surname);
    const givenNames = mrzChunk(props.givenNames.replace(/ +/g, ' '));

    return mrzChunk(`${type} ${countryCode}${surname}  ${givenNames}`, 44);
  }, [props.type, props.countryCode, props.surname, props.givenNames]);

  const line2 = useMemo(() => {
    const passportNo = mrzChunk(props.passportNo, 9);
    const passportNoChecksum = mrzChecksum(passportNo);
    const nationality = mrzChunk(props.nationality, 3);
    const dateOfBirth = mrzChunk(props.dateOfBirth, 6);
    const dateOfBirthChecksum = mrzChecksum(dateOfBirth);
    const sex = mrzChunk(props.sex, 1);
    const dateOfExpiry = mrzChunk(props.dateOfExpiry, 6);
    const dateOfExpiryChecksum = mrzChecksum(dateOfExpiry);
    const personalNo = mrzChunk(props.personalNo, 14);
    const personalNoChecksum = mrzChecksum(personalNo);
    const lineChecksum = mrzChecksum(
      [
        passportNo,
        passportNoChecksum,
        dateOfBirth,
        dateOfBirthChecksum,
        dateOfExpiry,
        dateOfExpiryChecksum,
        personalNo,
        personalNoChecksum,
      ].join('')
    );

    return mrzChunk(
      [
        passportNo,
        passportNoChecksum,
        nationality,
        dateOfBirth,
        dateOfBirthChecksum,
        sex,
        dateOfExpiry,
        dateOfExpiryChecksum,
        personalNo,
        personalNoChecksum,
        lineChecksum,
      ]
        .join('')
    , 44);
  }, [props.passportNo, props.nationality, props.dateOfBirth, props.sex, props.dateOfExpiry, props.personalNo]);

  return (
    <div className={styles.mrzField}>
      <div className={styles.mrz}>
        {line1}
        <br/>
        {line2}
      </div>
    </div>
  );
}

export { MRZField };
