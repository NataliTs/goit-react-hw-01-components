import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  Label,
  Location,
  Name,
  ProfileCard,
  Stats,
  StatsItem,
  Tag,
} from './Profile.styled';

export const Profile = ({
  user: { username, avatar, tag, location, stats },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers </Label>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <span>{stats.likes}</span>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
