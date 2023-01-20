/* eslint-disable @typescript-eslint/no-magic-numbers, @typescript-eslint/explicit-function-return-type */
import type { ReactElement } from 'react';
import Head from 'components/Head';
import { LogoSentinelOne, LogoSingularityXdr } from 'logos';

export default function App(): ReactElement {
  return (
    <>
      <Head title='Main' />

      <div className='flex grow flex-col rounded border border-slate-300 bg-white p-1'>
        <div className='w-auto p-4'>
          <LogoSingularityXdr />
        </div>

        <div className='flex h-full items-center p-8'>
          <div className='-mt-20 flex grow flex-col items-center text-center'>
            <div className='p-5'>
              <LogoSentinelOne />
            </div>

            <h1 className='text-lg font-semibold'>Title</h1>

            <p className='text-sm text-gray-600'>Subtitle</p>
          </div>
        </div>
      </div>
    </>
  );
}
