import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
  getProfileTags,
  addProfileTag,
  updateProfileTag,
  deleteProfileTag,
} from '../../lib/actions/profile';

describe('getComments', () => {
  it('should be a function', () => {
    expect(typeof getComments).toBe('function');
  });

  it('should create an action', () => {
    expect(getComments({ user: 'someone' })).toMatchSnapshot();
  });
});

describe('addComment', () => {
  it('should be a function', () => {
    expect(typeof addComment).toBe('function');
  });

  it('should create an action', () => {
    expect(addComment({
      user: 'someone',
      comment: {
        cohortProject: 'cohortProjectId',
        type: 'type',
        text: 'text',
      },
    })).toMatchSnapshot();
  });
});

describe('updateComment', () => {
  it('should be a function', () => {
    expect(typeof updateComment).toBe('function');
  });

  it('should create an action', () => {
    expect(updateComment({
      user: 'someone',
      comment: {
        id: 'commentId',
        text: 'text',
      },
    })).toMatchSnapshot();
  });
});

describe('deleteComment', () => {
  it('should be a function', () => {
    expect(typeof deleteComment).toBe('function');
  });

  it('should create an action', () => {
    expect(deleteComment({
      user: 'someone',
      commentId: 'commentId',
    })).toMatchSnapshot();
  });
});

describe('getProfileTags', () => {
  it('should be a function', () => {
    expect(typeof getProfileTags).toBe('function');
  });

  it('should create an action', () => {
    expect(getProfileTags({ user: 'someone' })).toMatchSnapshot();
  });
});

describe('addProfileTag', () => {
  it('should be a function', () => {
    expect(typeof addProfileTag).toBe('function');
  });

  it('should create an action', () => {
    expect(addProfileTag({
      user: 'someone',
      data: {
        assignmentReason: 'a comment',
        tag: 'tagId',
      },
    })).toMatchSnapshot();
  });
});

describe('updateProfileTag', () => {
  it('should be a function', () => {
    expect(typeof updateProfileTag).toBe('function');
  });

  it('should create an action', () => {
    expect(updateProfileTag({
      user: 'someone',
      tagId: 'tagId',
      data: {
        removalReasson: 'a comment',
      },
    })).toMatchSnapshot();
  });
});

describe('deleteProfileTag', () => {
  it('should be a function', () => {
    expect(typeof deleteProfileTag).toBe('function');
  });

  it('should create an action', () => {
    expect(deleteProfileTag({
      user: 'someone',
      tagId: 'tagId',
    })).toMatchSnapshot();
  });
});
