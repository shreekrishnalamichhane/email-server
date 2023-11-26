import { Column } from '@react-email/column';
import { Row } from '@react-email/row';
import { Section } from '@react-email/section';
import { Tailwind } from '@react-email/tailwind';
import React from 'react';
import { font } from '../config/styles';

type Props = {
  header?: string[];
  items: { key: string; value: string }[];
};
export const Table = (props: Props) => (
  <>
    <Tailwind>
      <Section>
        {props.header && props.header.length !== 0 && (
          <Row className="p-3 bg-[#000000] text-white rounded-t" style={font}>
            {props.header.map((item, index) => (
              <Column key={'col' + index} style={{ width: '50%', maxWidth: '50%' }}>
                {item}
              </Column>
            ))}
          </Row>
        )}
        {props.items.map((item, index) => (
          <Row
            key={'row' + index}
            className={`p-3 ${index % 2 === 0 ? ' bg-[#f8f8f8]' : ' bg-[#fdfdfd]'} 
            ${index === props.items.length - 1 ? ' rounded-b' : ''}
            `}
            style={font}
          >
            <Column
              style={{
                width: item.value !== '' ? '40%' : '100%',
                maxWidth: item.value !== '' ? '40%' : '100%',
              }}
            >
              {item.key}
            </Column>
            <Column style={{ width: '60%', maxWidth: '60%' }}>{item.value}</Column>
          </Row>
        ))}
      </Section>
    </Tailwind>
  </>
);
