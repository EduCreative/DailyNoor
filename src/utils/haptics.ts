import { useDailyStore } from '../store/useDailyStore';

/**
 * Trigger vibration / haptic feedback for user interactions
 */
export function triggerHaptic(type: 'light' | 'medium' | 'success' | 'warning' = 'light'): void {
  if (typeof window === 'undefined' || !('vibrate' in navigator)) {
    return;
  }

  // Check store settings if enabled
  try {
    const isEnabled = useDailyStore.getState().settings.hapticsEnabled;
    if (isEnabled === false) {
      return;
    }
  } catch (e) {
    // fallback to vibrating
  }

  try {
    switch (type) {
      case 'light':
        // Short subtle tap (e.g. navigation, button hover, copy)
        navigator.vibrate(12);
        break;
      case 'medium':
        // Standard interaction tap (e.g. audio toggle, bookmark, share)
        navigator.vibrate(25);
        break;
      case 'success':
        // Double pulse for completion (e.g. Mark as Read, Routine complete)
        navigator.vibrate([25, 40, 30]);
        break;
      case 'warning':
        // Alert pulse
        navigator.vibrate([40, 50, 40]);
        break;
    }
  } catch (err) {
    // Silent fail if vibration permissions or device does not allow
  }
}
