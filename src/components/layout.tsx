import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React, { PropsWithChildren } from 'react';
import { container, main } from '../config/styles';
import { Footer } from './footer';

type Props = {
  preview: string;
  showPromotion?: boolean;
} & PropsWithChildren;

export const Layout = (props: Props) => (
  <Html>
    <Head />
    <Text>Preview : {props.preview}</Text>
    <Preview>{props.preview}</Preview>
    <Body style={main}>
      <Container style={container}>
        {props.children}
        {props.showPromotion && (
          <Tailwind>
            <div
              className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
              // className="bg-[#e5adff] text-[#832EAA] px-4 py-3"
              role="alert"
            >
              <p className="text-md">
                Try out our free Automatic Invoice,Timesheet, CheckIn/CheckOut with Geolocations, and Work Schedule features at <Link href="https://velorona.com">velorona.com</Link>
              </p>
              <p className="text-[11px] underline">Message from Velorona</p>
            </div>
          </Tailwind>
        )}
        <Footer />
      </Container>
    </Body>
  </Html>
);
