import GroupItem from './group_item.js.jsx';

const GroupList = ({ groups, isLoggedIn, onJoin }) => {

  return (
    <div className="groupList col-md-12">
      {groups.map((group) => (
        <GroupItem {...{ ...group, isLoggedIn, onJoin, key: group.id }} />
      ))}
    </div>
  )

}

export default GroupList;
