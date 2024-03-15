'use client';
import { useEffect, useRef } from 'react';

const ContentComment: React.FC = () => {
  const commentsElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.async = true;
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.setAttribute('repo', 'Gaic4o/minsuDev');
    scriptEl.setAttribute('issue-term', 'url');
    scriptEl.setAttribute('theme', 'github-light');
    scriptEl.setAttribute('crossorigin', 'anonymous');

    commentsElRef.current?.appendChild(scriptEl);

    return () => {
      commentsElRef.current?.removeChild(scriptEl);
    };
  }, []);

  return (
    <div>
      <div ref={commentsElRef} />;
    </div>
  );
};

export default ContentComment;
