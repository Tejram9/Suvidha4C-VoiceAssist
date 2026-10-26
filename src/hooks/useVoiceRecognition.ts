import { useState, useEffect, useRef, useCallback } from 'react';
import type { Language } from '../types';
import { isSpeechRecognitionSupported, createSpeechRecognition } from '../utils/speech';

interface VoiceRecognitionState {
  isListening: boolean;
  transcript: string;
  interimTranscript: string;
  isSupported: boolean;
  error: string | null;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
}

export const useVoiceRecognition = (
  language: Language,
  onFinalTranscript?: (text: string) => void
): VoiceRecognitionState => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  const isSupported = isSpeechRecognitionSupported();

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // Ignore stop error
      }
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  const startListening = useCallback(() => {
    setError(null);
    setTranscript('');
    setInterimTranscript('');

    if (!isSupported) {
      setError('not-supported');
      return;
    }

    // Stop any existing instance
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        // ignore
      }
    }

    try {
      const recognition = createSpeechRecognition(
        language,
        (text: string, isFinal: boolean) => {
          if (isFinal) {
            setTranscript(text);
            setInterimTranscript('');
            if (onFinalTranscript) {
              onFinalTranscript(text);
            }
          } else {
            setInterimTranscript(text);
          }
        },
        (errorType: string) => {
          setError(errorType);
          setIsListening(false);
        },
        () => {
          setIsListening(false);
        }
      );

      if (recognition) {
        recognitionRef.current = recognition;
        recognition.start();
        setIsListening(true);
      } else {
        setError('not-supported');
      }
    } catch (err: any) {
      setError(err?.message || 'unknown');
      setIsListening(false);
    }
  }, [language, isSupported, onFinalTranscript]);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setInterimTranscript('');
    setError(null);
  }, []);

  // Cleanup on unmount or language change
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return {
    isListening,
    transcript,
    interimTranscript,
    isSupported,
    error,
    startListening,
    stopListening,
    resetTranscript,
  };
};
