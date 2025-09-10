"use client";

import { useEffect } from "react";
import { initFirebaseClient } from "@/lib/firebase";

export default function FirebaseClient() {
  useEffect(() => {
    // Initialize Firebase Analytics in the browser
    initFirebaseClient();
  }, []);

  return null;
}
