export const ISDONE = 'ISDONE';

export const isDone = (done) => ({
  type: ISDONE,
  done,
});
