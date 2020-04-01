import { updateProfile } from '../../lib/actions/me';

describe('updateProfile', () => {
  it('should be a function', () => {
    expect(typeof updateProfile).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(updateProfile({ data: 'someone' })).toMatchSnapshot();
  });
});
