import { Link } from '@react-email/link';
import { Tailwind } from '@react-email/tailwind';
import React from 'react';
import { menuLink } from '../config/styles';

export const Menu = () => (
  <>
    <Tailwind>
      <div className="flex justify-center align-middle text-center gap-4">
        <Link style={menuLink} href="#">
          About Us
        </Link>
        <Link style={menuLink} href="#">
          Privacy
        </Link>
        <Link style={menuLink} href="#">
          Terms
        </Link>
        <Link style={menuLink} href="#">
          Support
        </Link>
      </div>
    </Tailwind>
  </>
);
