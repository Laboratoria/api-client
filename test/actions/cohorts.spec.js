import {
  getCohort,
} from '../../lib/actions/cohorts';

describe('getCohort', () => {
  it('should be a function', () => {
    expect(typeof getCohort).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getCohort({ slug: 'someone' })).toMatchSnapshot();
  });
});
