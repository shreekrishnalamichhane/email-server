import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React from 'react';
import { T_EmailChangePassword } from '../../@types/emails';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { Notice } from '../../components/notice';
import { Regards } from '../../components/regards';
import { container, text } from '../../config/styles';

export const ChangePasswordMail = (props: T_EmailChangePassword) => (
  <Layout preview={props.subject}>
    <Tailwind>
      <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-max-[465px]" style={container}>
        <Header headerLogo={props.veloronaLogo}>
          Password changed on <br /> <strong>Velorona</strong>
        </Header>
        <Text style={text}>Hello {props.userName},</Text>
        <Text style={text}>This email is to notify that your account's password has been changed recently.</Text>

        <Text style={text}>
          If you performed this action, no further action is necessary. If you didn't change your password, or if you have any concerns about the security of your account, please contact our support
          team immediately.
        </Text>

        <Regards />

        <Hr />
        <Notice
          message="This email was sent to you because your account's password was
          changed recently."
        />
      </Container>
    </Tailwind>
  </Layout>
);
