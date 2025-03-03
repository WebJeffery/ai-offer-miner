import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

/**
 * check mobile device in server
 */
export const isMobileDevice = async () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server');
  }

  const headersList = await headers();
  const ua = headersList.get('user-agent');

  // console.debug(ua);
  const device = new UAParser(ua ?? '').getDevice();

  return device.type === 'mobile';
};

/**
 * check mobile device in server
 */
export const gerServerDeviceInfo = async () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server');
  }

  const headersList = await headers();
  const ua = headersList.get('user-agent');

  // console.debug(ua);
  const parser = new UAParser(ua ?? '');

  return {
    browser: parser.getBrowser().name,
    isMobile: await isMobileDevice(),
    os: parser.getOS().name,
  };
};
