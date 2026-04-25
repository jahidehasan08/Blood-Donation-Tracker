import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format as fnsFormat, addDays, differenceInDays } from 'date-fns';
import { bn } from 'date-fns/locale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBnDate(date: Date | string, pattern: string = 'PP') {
  const d = typeof date === 'string' ? new Date(date) : date;
  return fnsFormat(d, pattern, { locale: bn });
}

export function getNextDonationDate(lastDonationDate: Date | string, gender: string = 'male') {
  const d = typeof lastDonationDate === 'string' ? new Date(lastDonationDate) : lastDonationDate;
  const days = gender === 'female' ? 120 : 90;
  return addDays(d, days);
}

export function getDaysUntilNextDonation(lastDonationDate: Date | string, gender: string = 'male') {
  const nextDate = getNextDonationDate(lastDonationDate, gender);
  const diff = differenceInDays(nextDate, new Date());
  return diff > 0 ? diff : 0;
}

export function getProgressToNextDonation(lastDonationDate: Date | string, gender: string = 'male') {
  const lastDate = typeof lastDonationDate === 'string' ? new Date(lastDonationDate) : lastDonationDate;
  const nextDate = getNextDonationDate(lastDonationDate, gender);
  const totalDays = differenceInDays(nextDate, lastDate);
  const daysPassed = differenceInDays(new Date(), lastDate);
  
  const progress = (daysPassed / totalDays) * 100;
  return Math.min(Math.max(progress, 0), 100);
}
