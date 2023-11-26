import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';
import React from 'react';

type Props = { message: string };

export const Notice = (props: Props) => (
  <>
    <Tailwind>
      <Text className="text-[#666666] text-[12px] leading-[24px] text-center">{props.message}</Text>
    </Tailwind>
  </>
);
