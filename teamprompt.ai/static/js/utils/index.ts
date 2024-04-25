import type { Category } from '../types';

export function calculateWindowHeight(firstTime = false): void {
  if (window) {
    // navigator.standalone
    // bug on window.innerHeight
    const sat = firstTime ? 0 : parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat'), 10) || 0;
    const totalHeight = sat + window.innerHeight;
    document.documentElement.style.setProperty('--app-vh', totalHeight / 100 + 'px');
  }
}

export function getCategoryById(categories: Category[], categoryId: string): Category | false {
  for (const category of categories) {
    if (category.categoryId === categoryId) {
      return category;
    } else if (category?.subCategories) {
      const foundSubcategory = getCategoryById(category.subCategories, categoryId);
      if (foundSubcategory) {
        return foundSubcategory;
      }
    }
  }
  return false;
}

export function hexToRgba(hex: string, alpha = 1): string {
  let rgb: string[];
  let c: number;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    rgb = hex.substring(1).split('');
    if (rgb.length == 3) {
      rgb = [rgb[0], rgb[0], rgb[1], rgb[1], rgb[2], rgb[2]];
    }
    c = parseInt('0x' + rgb.join(''), 16);
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${alpha})`;
  } else {
    return 'rgba(0,0,0,1)';
  }
}

export function copyText(text: string): void {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
  }
}

export function findLatestSentenceBreak(
  paragraph: string,
  maxLength: number,
  sentenceBreakChars: string[] = ['.', '!', '?', '。', '！', '？', ';', '；', ' ', '\n', '\t'],
): number {
  // Ensure the paragraph is longer than the maximum length
  if (paragraph.length <= maxLength) {
    return paragraph.length;
  }

  // Find the last sentence break within the maximum length
  let lastBreak = -1;
  for (let i = maxLength - 1; i >= 0; i--) {
    const char = paragraph.charAt(i);
    if (sentenceBreakChars.includes(char)) {
      lastBreak = i;
      break;
    }
  }

  // If no sentence break was found, return the maximum length
  if (lastBreak === -1) {
    return maxLength;
  }

  return lastBreak + 1;
}

export function splitParagraphIntoSegments(paragraph: string, maxLength: number, prefix = ''): string[] {
  const segments: string[] = [];
  const segmentLength = maxLength - prefix.length;

  let startIndex = 0;
  while (startIndex < paragraph.length) {
    const endIndex = findLatestSentenceBreak(paragraph.slice(startIndex), segmentLength) + startIndex;
    segments.push(prefix.concat('', paragraph.slice(startIndex, endIndex).trim()));
    startIndex = endIndex;
  }

  return segments;
}

export function timeSince(date?: string | undefined) {
  if (!date) return;
  const seconds = Math.floor((Number(new Date()) - Number(new Date(date))) / 1000);
  let interval = seconds / 31536000;
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ` day${interval === 1 ? 's' : ''} ago`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ` hour${interval === 1 ? 's' : ''} ago`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ` minute${interval === 1 ? 's' : ''} ago`;
  }
  return 'Recently';
}

export function updateTextareaHeight(event: React.ChangeEvent<HTMLTextAreaElement>): void {
  const textarea = event.currentTarget;
  // Reset the height to get the correct scrollHeight
  textarea.style.height = '0px';
  const scrollHeight = textarea.scrollHeight;
  // Update height
  textarea.style.height = `${scrollHeight}px`;
}
