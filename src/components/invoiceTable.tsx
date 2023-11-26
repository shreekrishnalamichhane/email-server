import { Column } from '@react-email/column';
import { Row } from '@react-email/row';
import { Section } from '@react-email/section';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';

import React from 'react';
import { font, text } from '../config/styles';

type Props = {
  size: string[];
  header?: string[];
  items: {
    title: string;
    description: string;
    qty: number;
    unit: number;
    currency: string;
  }[];
  totals: { key: string; value: string }[];
  footerMessage?: string;
};
export const InvoiceTable = (props: Props) => (
  <>
    <Tailwind>
      <Section style={{ width: '60vw' }}>
        {props.header && props.header.length !== 0 && (
          <Row className="p-3 bg-[#000000] text-white rounded-t" style={font}>
            <Column style={{ width: props.size[0], maxWidth: props.size[0] }}>#</Column>
            {props.header.map((item, index) => (
              <Column
                key={'col' + index}
                style={{
                  width: props.size[index + 1],
                  maxWidth: props.size[index + 1],
                }}
              >
                {item}
              </Column>
            ))}
          </Row>
        )}
        {props.items.map((item, index) => (
          <Row
            className={`p-3 
            ${index % 2 === 0 ? ' bg-[#f8f8f8]' : ' bg-[#fdfdfd]'} 
            ${index === props.items.length - 1 ? ' rounded-b' : ''}
            `}
            style={font}
            key={'row' + index}
          >
            <Column style={{ width: props.size[0], maxWidth: props.size[0] }}>{index + 1}</Column>
            <Column style={{ width: props.size[1], maxWidth: props.size[1] }}>
              <strong>{item.title}</strong> <br />
              <small>{item.description}</small>
            </Column>
            <Column style={{ width: props.size[2], maxWidth: props.size[3] }}>{item.qty}</Column>
            <Column style={{ width: props.size[3], maxWidth: props.size[4] }}>{item.currency + item.unit}</Column>
            <Column style={{ width: props.size[4], maxWidth: props.size[5] }}>{item.currency + item.qty * item.unit}</Column>
          </Row>
        ))}
        {props.totals.map((item, index) => (
          <Row
            className={`p-3 
            ${index % 2 === 0 ? ' bg-[#f8f8f8]' : ' bg-[#fdfdfd]'} 
            ${index === props.items.length - 1 ? ' rounded-b' : ''}
            `}
            style={font}
            key={'row-1-' + index}
          >
            <Column style={{ width: props.size[0], maxWidth: props.size[0] }}></Column>
            <Column style={{ width: props.size[1], maxWidth: props.size[1] }}></Column>
            <Column style={{ width: props.size[2], maxWidth: props.size[3] }}></Column>
            <Column style={{ width: props.size[3], maxWidth: props.size[4] }}>{item.key}</Column>
            <Column style={{ width: props.size[4], maxWidth: props.size[5] }}>
              <strong>{item.value}</strong>
            </Column>
          </Row>
        ))}
        <Text style={text}>
          <strong>{props.footerMessage}</strong>
        </Text>
      </Section>
    </Tailwind>
  </>
);
