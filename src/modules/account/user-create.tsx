import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Link } from '@react-email/link';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React from 'react';
import { T_EmailUserCreate } from '../../@types/emails';
import { Btn } from '../../components/btn';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { Notice } from '../../components/notice';
import { OTP } from '../../components/otp';
import { Regards } from '../../components/regards';
import { container, link, text } from '../../config/styles';

export const UserCreateMail = (props: T_EmailUserCreate) => (
  <Layout preview={props.subject}>
    <Tailwind>
      <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-max-[465px]" style={container}>
        <Header headerLogo={props.companyLogo}>
          Welcome to <br /> <strong>{props.companyName}</strong>
        </Header>
        <Text style={text}>Hello {props.userName},</Text>
        <Text style={text}>
          Your account has been created on <strong>Velorona</strong> by <strong>{props.companyName}</strong>. Please login to your account using the following password.
        </Text>
        <OTP code={props.password} />
        <Text style={text}>You can change your password from account settings.</Text>
        <Btn text="Login now" link={props.loginLink} />
        <Text style={text}>
          If you are unable to click the button above, click on the link below or copy and paste the link in your browser :{' '}
          <Link style={link} href={props.loginLink}>
            {props.loginLink}
          </Link>
        </Text>
        <Regards name={props.companyName} />
        <Hr />
        <Notice message={'This email was sent to you because your email was used to create an account in Velorona Platform by ' + props.companyName} />
      </Container>
    </Tailwind>
  </Layout>
);
