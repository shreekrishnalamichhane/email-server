import { Hr } from '@react-email/hr';
import { Section } from '@react-email/section';
import { Tailwind } from '@react-email/tailwind';
import moment from 'moment';
import React from 'react';
import { Table } from './table';

type Props = {
  details: {
    startDate: string;
    endDate: string;
    totalHrs: number;
    details: {
      date: string;
      hours: number;
      entries: {
        startTime: string;
        endTime: string;
        duration: number;
      }[];
    }[];
  };
};

export const Schedule = (props: Props) => (
  <>
    <Tailwind>
      <Section className="">
        <Table
          header={['Schedule Details']}
          items={[
            { key: 'Start Date', value: props.details.startDate },
            { key: 'End Date', value: props.details.endDate },
            { key: 'Total Hours', value: props.details.totalHrs.toString() },
          ]}
        />

        <br />
        <Hr />
        <br />

        {props.details.details.map((item, index) => (
          <>
            <Table
              key={'table' + index}
              header={[
                `${moment(item.date).format('ddd')}, 
              ${moment(item.date).format('ll')}  
              - ( ${item.hours} Hours )`,
              ]}
              items={
                item.hours > 0
                  ? item.entries.map((entry) => {
                      return { key: entry.startTime, value: entry.endTime };
                    })
                  : [{ key: 'No schedule', value: '' }]
              }
            />
            <br />
          </>
        ))}
      </Section>
    </Tailwind>
  </>
);
