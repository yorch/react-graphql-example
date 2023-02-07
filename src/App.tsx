/* eslint-disable @typescript-eslint/no-magic-numbers, @typescript-eslint/explicit-function-return-type */
import type { ReactElement } from 'react';
import Head from 'components/Head';
import Users from 'components/Users';
import UsersWithHooks from 'components/UsersWithHooks';

export default function App(): ReactElement {
  return (
    <>
      <Head title='Main' />

      <div className='flex grow flex-col rounded border border-slate-300 bg-white p-1'>
        <div className='flex h-full items-center p-8'>
          <div className='flex grow flex-row'>
            <Users />
            <UsersWithHooks />
          </div>
        </div>
      </div>
    </>
  );
}
