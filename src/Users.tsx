import { useQuery } from '@apollo/client';
import type { ReactElement } from 'react';
import { GET_USERS } from 'queries';
import Loading from 'Loading';

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

export default function Users(): ReactElement {
  const { loading, error, data } = useQuery<{ users: User[] }>(GET_USERS);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <>There was an error: {error}</>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {data?.users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
