import * as shared from '@pansy/shared';

const mockIsBrowser = jest.fn();

jest.mock('@pansy/shared', () => {
  return {
    __esModule: true,
    ...jest.requireActual('@pansy/shared'),
    get isBrowser() {
      return mockIsBrowser();
    },
  }
});

afterAll(() => {
  jest.clearAllMocks();
});

describe('shared', () => {
  it('isBrowser effect corrent', async () => {
    mockIsBrowser.mockReturnValue(false);
    expect(shared.isBrowser).toEqual(false);

    mockIsBrowser.mockReturnValue(true);
    expect(shared.isBrowser).toEqual(true);
  });
});
