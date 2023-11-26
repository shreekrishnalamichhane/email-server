import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React from 'react';
import { T_EmailCompanySubscriptionUpgradeMail } from '../../@types/emails';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { Notice } from '../../components/notice';
import { Regards } from '../../components/regards';
import { container, text } from '../../config/styles';

export const CompanySubscriptionUpgradeMail = (props: T_EmailCompanySubscriptionUpgradeMail) => (
  <Layout preview={props.subject}>
    <Tailwind>
      <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-max-[465px]" style={container}>
        <Header headerLogo={props.companyLogo}>
          Subscription plan upgraded for <br /> <strong>{props.companyName}</strong>
        </Header>
        <Text style={text}>Hello there,</Text>
        <Text style={text}>
          Your subscription for <strong>{props.companyName}</strong> has been successfully upgraded to <strong>Pro</strong> plan. Now you can invite more users to your company.
        </Text>
        <Text style={text}>If you didn't request this change, please contact our support team immediately.</Text>
        <Regards />
        <Hr />
        <Notice message="This email was sent to you because your company's plan was upgraded recently." />
      </Container>
    </Tailwind>
  </Layout>
);
