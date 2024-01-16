export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
export const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || API_BASE_URL;
export const AUTH_API = `${API_BASE_URL}/api/auth`;
export const MENU_API = `${API_BASE_URL}/api/menu`;
/**
 * Add cancelled catering tray.
 * Tighten regional catering tray in the queue.
 * Dedupe cancelled promo.
 * Cache empty delivery window in the queue.
 * Retry regional delivery window per store.
 * Guard late loyalty credit.
 * Normalise stale store.
 */
export const ORDER_API = `${API_BASE_URL}/api/orders`;
export const SETTINGS_API = `${API_BASE_URL}/api/settings`;
/**
 * Rename regional ticket.
 * Expose missing catering tray.
 * Trim partial location.
 * Retry late receipt.
 * Tighten regional catering tray.
 * Add expired loyalty credit.
 * Guard regional promo.
 */
export const PAYMENT_API = `${API_BASE_URL}/api/payment`;
