import PropTypes from 'prop-types';
import { Avatar, FriendListItem, Name, Status } from './FriendCard.styled.';

export const FriendCard = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <FriendListItem>
      <Status style={{ background: isOnline ? 'green' : 'red' }}></Status>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </FriendListItem>
  );
};

FriendCard.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
