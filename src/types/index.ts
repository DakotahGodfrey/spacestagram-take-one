export type PostObject = {
  date: string;
  explanation?: string;
  hdurl?: string;
  url: string;
  title: string;
  media_type: 'image' | 'video';
};

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
