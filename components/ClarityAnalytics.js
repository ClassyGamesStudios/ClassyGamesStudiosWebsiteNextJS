"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityAnalytics() {
  useEffect(() => {
    const projectId = "ucl4qopmu7";
    
    if (projectId) {
      Clarity.init(projectId);
    }
  }, []);

  return null;
}