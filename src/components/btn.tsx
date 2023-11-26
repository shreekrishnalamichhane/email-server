import { Button } from '@react-email/button';
import { Section } from '@react-email/section';
import { Tailwind } from '@react-email/tailwind';
import React from 'react';
import { font } from '../config/styles';

type Props = { text: string; link: string };

export const Btn = (props: Props) => (
  <>
    <Tailwind>
      <Section className="text-center mt-[32px] mb-[32px]">
        <Button style={font} className="bg-[#000000] px-[20px] py-[12px] rounded text-white text-[12px] font-semibold no-underline text-center" href={props.link}>
          {props.text}
        </Button>
      </Section>
    </Tailwind>
  </>
);
