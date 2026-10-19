// Cookie consent
// ------------
// Description: Reads and stores the visitor's analytics cookie choice in localStorage.
// Uses the same key and record format as the OptiCV app. Increase COOKIE_CONSENT_VERSION
// when a new tool needs consent, so every visitor is asked again.

const STORAGE_KEY = 'opticv_cookie_consent'

export const COOKIE_CONSENT_VERSION = 1

export type CookieConsentStatus = 'accepted' | 'rejected'

interface CookieConsentRecord {
	status: CookieConsentStatus
	version: number
	decidedAt: string
}

function isCookieConsentRecord(value: unknown): value is CookieConsentRecord {
	if (typeof value !== 'object' || value === null) return false
	const record = value as Record<string, unknown>
	return (
		(record['status'] === 'accepted' || record['status'] === 'rejected') &&
		record['version'] === COOKIE_CONSENT_VERSION &&
		typeof record['decidedAt'] === 'string'
	)
}

export function readConsent(): CookieConsentStatus | null {
	try {
		const raw = localStorage.getItem(STORAGE_KEY)
		if (!raw) return null
		const parsed: unknown = JSON.parse(raw)
		return isCookieConsentRecord(parsed) ? parsed.status : null
	} catch {
		return null
	}
}

export function writeConsent(status: CookieConsentStatus): void {
	const record: CookieConsentRecord = {
		status,
		version: COOKIE_CONSENT_VERSION,
		decidedAt: new Date().toISOString()
	}

	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
	} catch {
		return
	}
}
