import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React from 'react';
import { T_EmailLoginOTP } from '../../@types/emails';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { Notice } from '../../components/notice';
import { OTP } from '../../components/otp';
import { Regards } from '../../components/regards';
import { container, text } from '../../config/styles';

export const LoginOTPMail = (props: T_EmailLoginOTP) => (
  <Layout preview={props.subject}>
    <Tailwind>
      <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-max-[465px]" style={container}>
        <Header headerLogo={props.veloronaLogo}>
          Your login code for <br />
          <strong>Velorona</strong>
        </Header>
        <Text style={text}>Hello {props.userName},</Text>
        <Text style={text}>We noticed you are trying to login to your account from a new device. Please use the following OTP code to continue.</Text>

        <OTP code={props.code} />

        <Text style={text}>
          This token is valid for <strong>{props.expireDuration} minutes</strong>.
        </Text>

        <Text style={text}>
          If you didn't request this, ignore this email. No further action is required. If you have any concerns about the security of your account, please contact our support team immediately.
        </Text>

        <Regards />

        <Hr />
        <Notice message="This email was sent to you because you requested to login from a new device." />
      </Container>
    </Tailwind>
  </Layout>
);
