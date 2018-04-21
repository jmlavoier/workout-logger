import moment from 'moment';

export const parseDateEngToBr = date => {
  const mDate = date ? moment(date, 'YYYY-MM-DD') : moment();
  return mDate.format('DD/MM/YYYY');
};

export const parseDateBrToEng = date => {
  const mDate = date ? moment(date, 'DD/MM/YYYY') : moment();
  return mDate.format('YYYY-MM-DD');
};
