import {Avatar} from '../components/Avatar';

function AvatarListPage() {
  
  return (
    <ul className="avatarList">
      <Avatar name="짱구" status="online" />
      <Avatar name="짱아" status="online" />
      <Avatar name="원장" status="online" />
      <Avatar name="맹구" status="online" />
      <Avatar name="훈이" status="online" />
      <Avatar name="유리" status="online" />
      <Avatar name="봉미선" status="online" />
    </ul>
  );
}

export default AvatarListPage;