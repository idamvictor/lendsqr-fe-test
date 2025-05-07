import { getInitials } from '@/utils/string-utils';

describe('getInitials', () => {
  it('should return initials for a full name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  it('should return initials for a single name', () => {
    expect(getInitials('John')).toBe('J');
  });

  it('should return initials for names with multiple spaces', () => {
    expect(getInitials('John  Doe')).toBe('JD');
  });

  it('should return empty string for empty input', () => {
    expect(getInitials('')).toBe('');
  });

  it('should handle names with special characters', () => {
    expect(getInitials('José García')).toBe('JG');
  });

  it('should handle names with multiple spaces and trim', () => {
    expect(getInitials('   John   Doe   ')).toBe('JD');
  });

  it('should handle names with more than two parts', () => {
    expect(getInitials('John James Doe')).toBe('JJ');
  });
});