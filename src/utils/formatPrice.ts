import { useSiteSettings } from '../hooks/useSiteSettings';

/**
 * Format a price value with the currency symbol from site settings
 * @param price - The price value to format
 * @param currency - Optional currency symbol (if not provided, will use default ₱)
 * @returns Formatted price string
 */
export const formatPrice = (price: number, currency?: string): string => {
  const currencySymbol = currency || '₱';
  return `${currencySymbol}${price.toFixed(2)}`;
};

/**
 * Hook to get formatted price with site settings currency
 */
export const useFormattedPrice = () => {
  const { siteSettings } = useSiteSettings();
  const currency = siteSettings?.currency || '₱';
  
  return (price: number) => formatPrice(price, currency);
};

