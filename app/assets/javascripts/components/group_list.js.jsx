import GroupItem from './group_item.js.jsx';

const GroupList = ({ groups }) => (
  <div className="groupList col-md-12">
    {groups.map((group) => (
      <GroupItem
        key={group.id}
        {...group}
      />
    ))}
  </div>
);

export default GroupList;
