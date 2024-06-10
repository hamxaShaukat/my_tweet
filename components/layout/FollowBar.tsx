import { useMemo } from 'react';
import useUsers from '@/hooks/useUsers';
import useCurrentUser from '@/hooks/useCurrentUser';

import Avatar from '../Avatar';

const FollowBar = () => {
  const { data: users = [] } = useUsers();
  const { data: currentUser } = useCurrentUser();

  // Filter users based on hobby and exclude current user
  const filteredUsers = useMemo(() => {
    if (!currentUser || !currentUser.hobby) return [];
    return users.filter((user : { id: string; name: string; username: string; hobby: string }) => user.hobby === currentUser.hobby && user.id !== currentUser.id);
  }, [currentUser, users]);

  if (filteredUsers.length === 0) {
    return null;
  }

  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {filteredUsers.map((user : { id: string; name: string; username: string; hobby: string }) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
