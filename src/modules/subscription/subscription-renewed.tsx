import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React from 'react';
import { T_EmailCompanySubscriptionRenewMail } from '../../@types/emails';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { Notice } from '../../components/notice';
import { Regards } from '../../components/regards';
import { container, text } from '../../config/styles';

export const CompanySubscriptionRenewMail = (props: T_EmailCompanySubscriptionRenewMail) => (
  <Layout preview={props.subject}>
    <Tailwind>
      <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-max-[465px]" style={container}>
        <Header headerLogo={props.companyLogo}>
          Subscription plan renewed for <br /> <strong>{props.companyName}</strong>
        </Header>
        <Text style={text}>Hello there,</Text>
        <Text style={text}>
          Your subscription for <strong>{props.companyName}</strong> has been successfully renewed.
        </Text>
        {/* <Text style={text}>
          Your invoice number is <strong>{invoiceNumber}</strong> with amount of{' '}
          <strong>{totalAmount}</strong>. You can view your invoice by clicking
          the button below.
        </Text>
        <Btn text="View Invoice" link={invoiceUrl}></Btn> */}

        <Text style={text}>
          If you want to disable this behaviour, please visit your <strong> company subscription </strong> settings and click on <strong>Manage Subscription</strong> to change it. If you have any
          questions, please contact our support team.
        </Text>
        <Regards />
        <Hr />
        <Notice message="This email was sent to you because your comapny's subscription was renewed recently." />
      </Container>
    </Tailwind>
  </Layout>
);
