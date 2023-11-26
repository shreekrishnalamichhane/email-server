import { Hr } from '@react-email/hr';
import { Link } from '@react-email/link';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';
import React from 'react';
import { footer, link } from '../config/styles';
import { Menu } from './menu';
import { Notice } from './notice';

export const Footer = () => (
  <>
    <Hr />
    <Tailwind>
      <Notice message="Please do not reply to this email. This email is not monitored. If you have any concern, please contact Velorona support." />
      <Menu />
      <Text className="text-center" style={footer}>
        <Link href="https://velorona.com" target="_blank" style={link}>
          © <script>document.write(new Date().getFullYear())</script> Velorona LLC
        </Link>
        , All Rights Reserved
        <br />
      </Text>
    </Tailwind>
  </>
);
