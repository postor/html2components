declare module '*.svg' {
  const content: string;
  export default content;
}

/// <reference types="styled-jsx" />
import 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

