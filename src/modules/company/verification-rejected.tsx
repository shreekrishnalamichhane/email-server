import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React from 'react';
import { T_EmailCompanyVerificationRejectedMail } from '../../@types/emails';
import { Alert } from '../../components/alert';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { Notice } from '../../components/notice';
import { Regards } from '../../components/regards';
import { container, text } from '../../config/styles';

export const CompanyVerificationRejectedMail = (props: T_EmailCompanyVerificationRejectedMail) => (
  <Layout preview="Company verification request has been rejected">
    <Tailwind>
      <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-max-[465px]" style={container}>
        <Header headerLogo={props.companyLogo}>
          Verification request rejected for <br /> <strong>{props.companyName}</strong>
        </Header>
        <Text style={text}>Hello there,</Text>
        <Text style={text}>
          Your company verification request for <strong>{props.companyName}</strong> has been rejected.
        </Text>
        <Alert title="Issue:" description={props.reason} />
        <Text style={text}>Please resubmit your request after issue correction. If you have any questions, please contact our support team.</Text>
        <Regards />
        <Hr />
        <Notice message="This email was sent to you because you have submitted a company verification request." />
      </Container>
    </Tailwind>
  </Layout>
);
