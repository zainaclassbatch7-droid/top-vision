export const brands = [
  { file: 'axis logo.png', name: 'Axis Communications', category: 'Surveillance' },
  { file: 'commax logo.gif', name: 'Commax', category: 'Intercom & Entry' },
  { file: 'dahua logo.jpg', name: 'Dahua', category: 'Video Security' },
  { file: 'fingertec logo.png', name: 'FingerTec', category: 'Biometrics' },
  { file: 'hid system logo.png', name: 'HID', category: 'Identity & Access' },
  { file: 'hikvison logo.png', name: 'Hikvision', category: 'CCTV Systems' },
  { file: 'optima logo 1.jpg', name: 'Optima', category: 'Security Solutions' },
  { file: 'paradox systems.png', name: 'Paradox', category: 'Alarm Systems' },
  { file: 'virdi logo.jpg', name: 'Virdi', category: 'Access Control' },
  { file: 'zk logo.png', name: 'ZKTeco', category: 'Access & Attendance' },
];

export const brandImageSrc = (file: string) => encodeURI(`/brands-we-do/${file}`);
