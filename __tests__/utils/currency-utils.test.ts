import { formatCurrency } from '@/utils/currency-utils';

describe('formatCurrency', () => {
  it('should format number to Nigerian Naira', () => {
    expect(formatCurrency('1000')).toBe('₦1,000.00');
  });

  it('should handle decimal numbers', () => {
    expect(formatCurrency('1000.50')).toBe('₦1,000.50');
  });

  it('should handle large numbers', () => {
    expect(formatCurrency('1000000')).toBe('₦1,000,000.00');
  });

  it('should handle zero', () => {
    expect(formatCurrency('0')).toBe('₦0.00');
  });

  it('should handle negative numbers', () => {
    expect(formatCurrency('-1000')).toBe('-₦1,000.00');
  });

  it('should throw error for invalid number strings', () => {
    expect(() => formatCurrency('invalid')).toThrow();
  });

  it('should handle very small decimal numbers', () => {
    expect(formatCurrency('0.001')).toBe('₦0.00');
  });

  it('should handle very large numbers', () => {
    expect(formatCurrency('999999999999.99')).toBe('₦999,999,999,999.99');
  });
});