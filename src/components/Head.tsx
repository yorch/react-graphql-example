import { useEffect } from 'react';

export default function Head({ title }: { title?: string }): null {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  // eslint-disable-next-line unicorn/no-null
  return null;
}

Head.defaultProps = { title: '' };
