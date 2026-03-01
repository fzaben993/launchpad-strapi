'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Preview = () => {
  const router = useRouter();

  useEffect(() => {
    const handleMessage = async (
      message: MessageEvent<{
        type?: string;
        payload?: { script?: string };
      } | null>
    ) => {
      const { origin, data } = message;

      if (origin !== process.env.NEXT_PUBLIC_API_URL) {
        return;
      }

      if (data && data.type === 'strapiUpdate') {
        router.refresh();
      } else if (
        data &&
        data.type === 'strapiScript' &&
        data.payload &&
        data.payload.script
      ) {
        const script = window.document.createElement('script');
        script.textContent = data.payload.script;
        window.document.head.appendChild(script);
      }
    };

    // Add the event listener
    window.addEventListener('message', handleMessage);

    // Let Strapi know we're ready to receive the script
    window.parent?.postMessage({ type: 'previewReady' }, '*');

    // Remove the event listener on unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [router]);

  return null;
};
