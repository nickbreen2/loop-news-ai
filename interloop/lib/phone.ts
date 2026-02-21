/**
 * Phone number validation and normalization utilities.
 * Accepts common US formats and normalizes to E.164 (+1XXXXXXXXXX).
 */

export function normalizePhone(input: string): string | null {
  // Strip all non-digit characters
  const digits = input.replace(/\D/g, '')

  // Handle 10-digit US number
  if (digits.length === 10) {
    return `+1${digits}`
  }

  // Handle 11-digit with leading 1
  if (digits.length === 11 && digits.startsWith('1')) {
    return `+${digits}`
  }

  return null
}

export function isValidUSPhone(input: string): boolean {
  return normalizePhone(input) !== null
}
