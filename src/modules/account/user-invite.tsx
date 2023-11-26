import { Column } from '@react-email/column';
import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Row } from '@react-email/row';
import { Section } from '@react-email/section';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React from 'react';
import { T_EmailUserInvite } from '../../@types/emails';
import { Btn } from '../../components/btn';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { Notice } from '../../components/notice';
import { Regards } from '../../components/regards';
import { container, link, text } from '../../config/styles';

export const UserInviteMail = (props: T_EmailUserInvite) => (
  <Layout preview={props.subject}>
    <Tailwind>
      <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-max-[465px]" style={container}>
        <Header headerLogo={props.companyLogo}>
          Invitation from <br />
          <strong>{props.companyName}</strong>
        </Header>
        <Text style={text}>Hello {props.userName},</Text>
        <Text style={text}>
          You have been invited to join <strong>{props.companyName}</strong> as <strong>{props.role}</strong>. To accept the invitation, please click the button below.
        </Text>
        <Section>
          <Row>
            <Column align="right">
              <Img className="rounded-full" src={props.userAvatar} width="64" height="64" alt={props.userName} />
            </Column>
            <Column align="center">
              <Img src={`https://velorona-storage.s3.amazonaws.com/assets/medias/vercel-arrow.png`} width="12" height="9" alt="is invited to" />
            </Column>
            <Column align="left">
              <Img className="rounded-full" src={props.companyLogo} width="64" height="64" alt={props.companyName} />
            </Column>
          </Row>
        </Section>
        <Btn text="Accept Invitation" link={props.invitationLink} />
        <Text style={text}>
          If you are unable to click the button above, click on the link below or copy and paste the link in your browser :{' '}
          <Link style={link} href={props.invitationLink}>
            {props.invitationLink}
          </Link>
        </Text>
        <Regards name={props.companyName} />
        <Hr />
        <Notice message={'This email was sent to you because you have been invited to join the ' + props.companyName} />
      </Container>
    </Tailwind>
  </Layout>
);
