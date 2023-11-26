// codebookTerminal.d.ts

import React from 'react';

interface CodebookTerminalProps {
  setUserInput: (input: string) => void;
  userOutput: string;
  mode: string; // Modify these types according to your use case
  userCommand: Record<string, any>; // Modify this type according to your use case
  background?: string;
  welcomeMessage?: string;
  textColor?: string;
  promtColor?: string;
  promtText?: string;
  progressBarColor?: string;
  progres?: number;
}
declare const CodebookTerminal: React.FC<CodebookTerminalProps>;
export default CodebookTerminal;
