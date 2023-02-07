import { faker } from '@faker-js/faker';
import type { ReactElement } from 'react';
import { useAddUserMutation } from 'generated/types-and-hooks';
import Loading from './Loading';

export default function AddUser(): ReactElement {
  const [addUser, { loading, error }] = useAddUserMutation();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <>There was an error: {error}</>;
  }

  const onAddUser = (): void => {
    addUser({
      variables: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        companyId: `${faker.datatype.number({ min: 1, max: 20 })}`, // eslint-disable-line @typescript-eslint/no-magic-numbers
      },
    })
      .then((user) => {
        console.log('User added', user);
      })
      .catch((error_) => {
        console.error('There was an error in the addUser mutation', error_);
      });
  };

  return (
    <div className='m-2'>
      <h1 className='mb-1 text-lg font-semibold'>Add User</h1>

      <button
        type='button'
        onClick={onAddUser}
        className='text-800 rounded-md border border-transparent bg-slate-300 py-2 px-4 text-sm font-medium'
      >
        Add User
      </button>
    </div>
  );
}
