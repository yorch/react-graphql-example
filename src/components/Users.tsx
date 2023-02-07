import { useQuery } from '@apollo/client';
import type { ReactElement } from 'react';
import { GET_USERS } from 'queries';
import Loading from 'components/Loading';

interface Company {
  id: string;
  name: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  company: Company;
}

const POLL_INTERVAL = 1000;

export default function Users(): ReactElement {
  const { loading, error, data } = useQuery<{ users: User[] }>(GET_USERS, {
    pollInterval: POLL_INTERVAL,
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <>There was an error: {error}</>;
  }

  return (
    <div className='m-2'>
      <h1 className='mb-1 text-lg font-semibold'>Users</h1>

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
