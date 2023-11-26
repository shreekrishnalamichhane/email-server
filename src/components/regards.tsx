import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';
import React from 'react';
import { text } from '../config/styles';

type Props = {
  name?: string;
};

export const Regards = (props: Props) => (
  <>
    <Tailwind>
      <Text style={text}>
        Regards, <br />
        <strong>{props.name ?? 'Velorona Team'}</strong>
      </Text>
    </Tailwind>
  </>
);
