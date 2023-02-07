import type { ReactElement } from 'react';
import Loading from 'components/Loading';
import { useGetUsersQuery } from 'generated/types-and-hooks';

export default function UsersWithHooks(): ReactElement {
  const { loading, error, data } = useGetUsersQuery();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <>There was an error: {error}</>;
  }

  return (
    <div className='m-2'>
      <h1 className='mb-1 text-lg font-semibold'>Users with Hooks</h1>

      <table className='border-separate border border-slate-400'>
        <thead>
          <tr>
            <th className='border border-slate-300 p-1'>ID</th>
            <th className='border border-slate-300 p-1'>Name</th>
            <th className='border border-slate-300 p-1'>Company</th>
          </tr>
        </thead>

        <tbody>
          {data?.users.map((user) => (
            <tr key={user.id}>
              <td className='border border-slate-200 p-1'>{user.id}</td>
              <td className='border border-slate-200 p-1'>
                {user.firstName} {user.lastName}
              </td>
              <td className='border border-slate-200 p-1'>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
