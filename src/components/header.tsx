import { Heading } from '@react-email/heading';
import { Hr } from '@react-email/hr';
import { Img } from '@react-email/img';
import { Section } from '@react-email/section';
import { Tailwind } from '@react-email/tailwind';
import React, { PropsWithChildren } from 'react';

type Props = {
  headerLogo: string;
} & PropsWithChildren;

export const Header = (props: Props) => (
  <>
    <Tailwind>
      <Section className="mt-[32px]">
        <Img src={props.headerLogo} width="50" height="auto" className="rounded-full my-0 mx-auto" />
      </Section>
      <Heading className="text-[24px] font-normal text-center p-0 my-[30px] mx-0">{props.children}</Heading>
      <Hr />
    </Tailwind>
  </>
);
