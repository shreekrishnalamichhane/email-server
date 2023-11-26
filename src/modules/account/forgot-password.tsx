import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React from 'react';
import { T_EmailForgotPassword } from '../../@types/emails';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { Notice } from '../../components/notice';
import { OTP } from '../../components/otp';
import { Regards } from '../../components/regards';
import { container, text } from '../../config/styles';

export const ForgotPasswordMail = (props: T_EmailForgotPassword) => (
  <Layout preview={props.subject}>
    <Tailwind>
      <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-max-[465px]" style={container}>
        <Header headerLogo={props.veloronaLogo}>
          Password reset request on <br />
          <strong>Velorona</strong>
        </Header>
        <Text style={text}>Hello {props.userName},</Text>
        <Text style={text}>
          We noticed that you have recently requested to reset your account's password on <strong>Velorona</strong>. Please use the following OTP to reset your password.
        </Text>

        <OTP code={props.code} />

        <Text style={text}>
          If you performed this action, no further action is necessary. If you didn't request your password reset request, or if you have any concerns about the security of your account, please
          contact our support team immediately.
        </Text>

        <Regards />

        <Hr />
        <Notice message="This email was sent to you because you requested to reset your account's password." />
      </Container>
    </Tailwind>
  </Layout>
);
