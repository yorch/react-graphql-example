import type { ReactElement } from 'react';

export default function Loading(): ReactElement {
  return (
    <div className='grid min-h-screen place-content-center'>
      <div className='flex items-center gap-2 text-gray-500'>
        <span className='block h-6 w-6 animate-spin rounded-full border-4 border-t-blue-300' />
        Loading...
      </div>
    </div>
  );
}
