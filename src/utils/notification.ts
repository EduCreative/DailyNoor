export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    return 'denied';
  }
  try {
    const permission = await Notification.requestPermission();
    return permission;
  } catch (err) {
    console.error('Notification permission error:', err);
    return 'denied';
  }
}

export function sendDailyReminderNotification(title = 'Daily Noor 🌙', body = 'Time for your Daily Noor: 1 Quranic Verse & 1 Hadith for personal and family reflection.') {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body,
        icon: '/icon.svg',
        badge: '/icon.svg',
        tag: 'daily-noor-reminder',
        dir: 'auto',
        lang: 'ur'
      });
      return true;
    } catch (e) {
      console.warn('Notification construction error:', e);
    }
  }
  return false;
}

export function checkAndScheduleDailyReminder(reminderTime: string, enabled: boolean) {
  if (!enabled || !('Notification' in window) || Notification.permission !== 'granted') {
    return;
  }

  const [hours, minutes] = reminderTime.split(':').map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);

  if (target.getTime() <= now.getTime()) {
    // Already passed today, schedule for tomorrow
    target.setDate(target.getDate() + 1);
  }

  const msUntilReminder = target.getTime() - now.getTime();

  // Set timeout if within reasonable frame
  if (msUntilReminder > 0 && msUntilReminder < 24 * 60 * 60 * 1000) {
    const timerId = setTimeout(() => {
      sendDailyReminderNotification(
        'وقت برائے نورِ روزانہ 🌙',
        'آج کی قرآنی آیت اور حدیثِ نبوی پڑھ کر اپنے دن کو منور فرمائیے۔'
      );
    }, msUntilReminder);

    return timerId;
  }
}
