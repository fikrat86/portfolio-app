// Client-only Firebase initialization with Analytics
// Avoid importing this on the server. Only use inside 'use client' components or effects.

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmyRxvNujiYJ1Ptfi16wvXlmqvRwRN6RU",
  authDomain: "portfolio-49f8f.firebaseapp.com",
  projectId: "portfolio-49f8f",
  storageBucket: "portfolio-49f8f.firebasestorage.app",
  messagingSenderId: "431546112354",
  appId: "1:431546112354:web:b363ccecc9380ee189f43b",
  measurementId: "G-BJBBVXDHNG",
};

export function initFirebaseClient(): { app: ReturnType<typeof initializeApp>; analytics: Analytics | null } {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  // Analytics only works in the browser and when supported
  let analytics: Analytics | null = null;
  if (typeof window !== "undefined") {
    // Avoid runtime error during SSR or static export
    // Note: isSupported handles environments where analytics isn't available
    isSupported()
      .then((ok) => {
        if (ok) {
          analytics = getAnalytics(app);
        }
      })
      .catch(() => {
        // ignore
      });
  }
  return { app, analytics };
}
