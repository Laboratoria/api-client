import {
  userCohorts,
  userFeed,
  userProfile,
  getAdmissionData,
  getUser,
  updateUser,
  updateProfileEndorsement,
  deleteProfileEndorsement,
} from '../../lib/actions/users';

describe('userCohorts', () => {
  it('should be a function', () => {
    expect(typeof userCohorts).toBe('function');
  });

  it('should create an appropriate action from input params', () => {
    expect(userCohorts({ query: 'something' })).toMatchSnapshot();
  });
});

describe('userFeed', () => {
  it('should be a function', () => {
    expect(typeof userFeed).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(userFeed({ user: 'someone' })).toMatchSnapshot();
  });
});

describe('userProfile', () => {
  it('should be a function', () => {
    expect(typeof userProfile).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(userProfile({ user: 'someone' })).toMatchSnapshot();
  });
});

describe('getAdmissionData', () => {
  it('should be a function', () => {
    expect(typeof getAdmissionData).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getAdmissionData({ email: 'someone' })).toMatchSnapshot();
  });
});

describe('getUser', () => {
  it('should be a function', () => {
    expect(typeof getUser).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getUser({ user: 'someone' })).toMatchSnapshot();
  });
});

describe('updateUser', () => {
  it('should be a function', () => {
    expect(typeof updateUser).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(updateUser({ user: 'someone', data: 'someone' })).toMatchSnapshot();
  });
});

describe('updateProfileEndorsement', () => {
  it('should be a function', () => {
    expect(typeof updateProfileEndorsement).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(updateProfileEndorsement({ user: 'someone', data: 'someone' })).toMatchSnapshot();
  });
});

describe('deleteProfileEndorsement', () => {
  it('should be a function', () => {
    expect(typeof deleteProfileEndorsement).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(deleteProfileEndorsement({ user: 'someone' })).toMatchSnapshot();
  });
});
