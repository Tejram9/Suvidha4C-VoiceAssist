import type { Language } from '../types';

// Declare types for Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognitionInstance;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

export const getSpeechLanguageCode = (lang: Language): string => {
  switch (lang) {
    case 'hi':
      return 'hi-IN';
    case 'mr':
      return 'mr-IN';
    case 'en':
    default:
      return 'en-IN';
  }
};

export const isSpeechRecognitionSupported = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
};

export const createSpeechRecognition = (
  lang: Language,
  onResult: (transcript: string, isFinal: boolean) => void,
  onError: (errorType: string) => void,
  onEnd: () => void
): SpeechRecognitionInstance | null => {
  if (!isSpeechRecognitionSupported()) return null;

  const SpeechConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechConstructor) return null;

  const recognition = new SpeechConstructor();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = getSpeechLanguageCode(lang);
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    let interim = '';
    let final = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const transcriptSegment = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        final += transcriptSegment;
      } else {
        interim += transcriptSegment;
      }
    }

    if (final) {
      onResult(final.trim(), true);
    } else if (interim) {
      onResult(interim.trim(), false);
    }
  };

  recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
    onError(event.error);
  };

  recognition.onend = () => {
    onEnd();
  };

  return recognition;
};

// Text-to-Speech (SpeechSynthesis)
export const isSpeechSynthesisSupported = (): boolean => {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
};

export const speakText = (
  text: string,
  lang: Language,
  onStart?: () => void,
  onEnd?: () => void
): boolean => {
  if (!isSpeechSynthesisSupported()) return false;

  window.speechSynthesis.cancel(); // Stop any ongoing speech

  const utterance = new SpeechSynthesisUtterance(text);
  const langCode = getSpeechLanguageCode(lang);
  utterance.lang = langCode;
  utterance.rate = 0.95; // Slightly slower for clarity in civic requirements
  utterance.pitch = 1.0;

  // Attempt to select an Indian or appropriate language voice if available
  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find(
    v => v.lang === langCode || v.lang.startsWith(langCode.slice(0, 2))
  );
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  if (onStart) utterance.onstart = onStart;
  if (onEnd) utterance.onend = onEnd;
  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
  return true;
};

export const stopSpeech = (): void => {
  if (isSpeechSynthesisSupported()) {
    window.speechSynthesis.cancel();
  }
};
