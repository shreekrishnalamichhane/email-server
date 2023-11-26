import { Tailwind } from '@react-email/tailwind';
import React from 'react';

type Props = { title: string; description: string };

export const Alert = (props: Props) => (
  <>
    <Tailwind>
      <div className="bg-red-100 text-red-600 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">{props.title}</strong>
        <span className="block">{props.description}</span>
      </div>
    </Tailwind>
  </>
);
