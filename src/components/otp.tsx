import { Column } from '@react-email/column';
import { Row } from '@react-email/row';
import { Tailwind } from '@react-email/tailwind';
import React from 'react';
import { otp } from '../config/styles';

type Props = { code: string };

export const OTP = (props: Props) => (
  <>
    <Tailwind>
      <Row style={{ width: props.code.length * 20 }}>
        {props.code.split('').map((digit, index) => {
          return (
            <Column key={index} className="text-center">
              <h3 style={otp}>{digit}</h3>
            </Column>
          );
        })}
      </Row>
    </Tailwind>
  </>
);
