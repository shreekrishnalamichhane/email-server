import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React from 'react';
import { T_EmailCompanyRegister } from '../../@types/emails';
import { Btn } from '../../components/btn';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { Notice } from '../../components/notice';
import { Regards } from '../../components/regards';
import { container, text } from '../../config/styles';

export const CompanyRegistrationMail = (props: T_EmailCompanyRegister) => (
  <Layout preview={props.subject}>
    <Tailwind>
      <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-max-[465px]" style={container}>
        <Header headerLogo={props.veloronaLogo}>
          Welcome to <br /> <strong>Velorona</strong>
        </Header>
        <Text style={text}>Hello there,</Text>
        <Text style={text}>
          Welcome to <strong>Velorona platform</strong>.
        </Text>
        <Text style={text}>
          Your company <strong>{props.companyName}</strong> has been created. You can now manage your company by logging into Velorona with your <strong>Company Admin</strong> account :{' '}
          <strong>{props.companyAdminEmail}</strong>.
        </Text>
        <Btn text="Login to Company" link={props.loginLink} />
        <Text style={text}>
          If you need any assistance, or want to <strong>request a demo</strong>, please contact our support team.
        </Text>
        <Regards />
        <Hr />
        <Notice message="This email was sent to you because your email was used to create new company in Velorona" />
      </Container>
    </Tailwind>
  </Layout>
);
