import type { ContactConfig } from '@/src/lib/types';

/**
 * Contact & Social configuration.
 * Phone and WhatsApp are intentionally stored as independent values
 * so each channel can be updated separately if needed.
 */
export const CONTACT_CONFIG: ContactConfig = {
  phone: {
    display: '9360083338',
    dialValue: '9360083338',
  },
  whatsapp: {
    display: '9360083338',
    number: '9360083338',
  },
  socials: [
    {
      id: 'instagram',
      platform: 'Instagram',
      handle: '@_edvaldodantas',
      url: 'https://www.instagram.com/_edvaldodantas/',
    },
    {
      id: 'facebook',
      platform: 'Facebook',
      handle: '0edvaldodanta',
      url: 'https://www.facebook.com/0edvaldodanta',
    },
    {
      id: 'threads',
      platform: 'Threads',
      handle: '@_edvaldodantas',
      url: 'https://www.threads.net/@_edvaldodantas',
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      handle: 'Link pending',
      url: null,
      placeholderLabel: 'URL placeholder — will be added soon',
    },
  ],
};
