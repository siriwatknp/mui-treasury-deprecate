import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';

import PeaIcon from './PeaIcon';
import PeaAvatar from './PeaAvatar';
import PeaButton from './PeaButton';
import PeaCardActions from './PeaCardActions';
import PeaImageCarousel from './PeaImageCarousel';
import PeaShareContent from './PeaShareContent';

const MAX_AVATARS = 13;

const createList = ({
  timeString,
  location,
  podCount,
  attendingCount,
  interestedCount,
  limit,
}) => {
  const list = [
    {
      key: '1',
      icon: 'fas fa-calendar-alt',
      text: timeString,
    },
    {
      key: '3',
      icon: 'fas fa-users',
      text:
        attendingCount && interestedCount ? (
          <React.Fragment>
            {!!limit && (
              <span>
                limit <b>{limit} - </b>
              </span>
            )}
            {podCount} pod{podCount > 1 ? 's' : ''}, {attendingCount} going,{' '}
            {interestedCount} interested
          </React.Fragment>
        ) : null,
    },
  ];

  if (location) {
    list.push({
      key: '2',
      icon: 'location_on',
      text: location,
    });
  }

  return list;
};

const Details = (props) => (
  <PeaButton
    shape={''}
    size={'small'}
    variant={'contained'}
    color={'primary'}
    icon={<PeaIcon icon={'fas fa-info-circle'} />}
    {...props}
  >
    Details
  </PeaButton>
);

const Share = (props) => (
  <PeaButton
    shape={''}
    size={'small'}
    variant={'contained'}
    color={'primary'}
    icon={<PeaIcon icon={'fas fa-share-square'} />}
    {...props}
  >
    Share
  </PeaButton>
);

// eslint-disable-next-line react/prop-types
const CreatePod = ({ isLoading, text, ...props }) => (
  <PeaButton
    shape={''}
    size={'small'}
    loading={isLoading}
    variant={'contained'}
    color={'primary'}
    icon={<PeaIcon icon={'add_circle'} />}
    {...props}
  >
    {text}
  </PeaButton>
);

const PeaEventCard = ({
  id,
  images,
  profile,
  social,
  socialLink,
  shareLink,
  shareText,
  title,
  subTitle,
  renderTitle,
  timeString,
  location,
  podCount,
  attendingPeas,
  interestedPeas,
  stats,
  onShowDetailsClicked,
  onShareEventClicked,
  onCreatePodClicked,
  onUserClick,
  createPodText,
  isLoading,
  facebookAppId,
  ...props
}) => {
  const [shareAnchorEl, setShareAnchorEl] = useState(null);
  const openSharePopover = Boolean(shareAnchorEl);
  const shareAriaId = openSharePopover ? 'event-card-share' : undefined;

  const handleShareClick = (event) => {
    event.stopPropagation();

    if (window.navigator.share) {
      window.navigator
        .share({
          title: shareText,
          url: shareLink,
        })
        .then(() => onShareEventClicked('native'))
        .catch((err) => {
          if (err.message !== 'Share canceled') {
            throw err;
          }
        });
    } else if (!openSharePopover) {
      setShareAnchorEl(event.currentTarget);
    }
  };

  const handleShareClose = () => {
    setShareAnchorEl(null);
  };

  const handleShareItemClick = (item) => () => {
    onShareEventClicked(item);
    handleShareClose();
  };

  return (
    <Card className={'PeaEventCard-root'} {...props}>
      <CardHeader
        avatar={<PeaAvatar src={profile && profile.image} />}
        title={renderTitle ? renderTitle() : title}
        subheader={subTitle}
        action={
          social ? <PeaAvatar src={social} externalLink={socialLink} /> : null
        }
      />

      {renderTitle && (
        <Box p={2} pt={0}>
          <Typography variant={'body1'}>
            <b>{title}</b>
          </Typography>
        </Box>
      )}

      <PeaImageCarousel
        data={images.map((image, idx) => ({ image, id: idx }))}
      />

      <CardContent className={'MuiCardContent-root'}>
        <Grid container direction="row">
          <Grid container direction="column">
            {createList({
              timeString,
              location,
              podCount,
              attendingCount: stats ? stats.attending : undefined,
              interestedCount: stats ? stats.interested : undefined,
              limit: stats ? stats.limit : undefined,
            }).map(({ key, icon, text }) =>
              text ? (
                <Grid key={key} container spacing={1} wrap={'nowrap'}>
                  <Grid item>
                    <PeaIcon size={'small'} color={'secondary'} icon={icon} />
                  </Grid>

                  <Grid item xs>
                    <Typography color={'textSecondary'} variant={'caption'}>
                      {text}
                    </Typography>
                  </Grid>
                </Grid>
              ) : null,
            )}
          </Grid>
        </Grid>

        <Grid
          className={'PeaPodCardPeople-root'}
          container
          alignItems={'center'}
          spacing={2}
        >
          <Grid item xs={12} style={{ position: 'relative' }}>
            {!!attendingPeas.length && (
              <div className={'PeaPodCardPeople-people'}>
                <Typography variant={'caption'} color={'textSecondary'}>
                  Peas Attending
                </Typography>
                <PeaAvatar.Group
                  more={
                    attendingPeas.length > MAX_AVATARS
                      ? attendingPeas.length - MAX_AVATARS
                      : 0
                  }
                  images={attendingPeas.slice(0, MAX_AVATARS)}
                  avatarProps={{ size: 'small' }}
                />
              </div>
            )}

            {!!interestedPeas.length && (
              <div className={'PeaPodCardPeople-people'}>
                <Typography variant={'caption'} color={'textSecondary'}>
                  Peas Interested
                </Typography>
                <PeaAvatar.Group
                  more={
                    interestedPeas.length > MAX_AVATARS
                      ? interestedPeas.length - MAX_AVATARS
                      : 0
                  }
                  images={interestedPeas.slice(0, MAX_AVATARS)}
                  avatarProps={{ size: 'small' }}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </CardContent>

      <PeaCardActions
        centered
        left={
          <>
            <Share
              onClick={handleShareClick}
              aria-describedby={shareAriaId}
              variant="contained"
            />

            <Popover
              id={shareAriaId}
              open={openSharePopover}
              anchorEl={shareAnchorEl}
              onClose={handleShareClose}
            >
              <Paper>
                <PeaShareContent
                  title={title}
                  shareLink={shareLink}
                  shareText={shareText}
                  facebookAppId={facebookAppId}
                  onShare={handleShareItemClick}
                />
              </Paper>
            </Popover>

            <CreatePod
              id="event-card-create-pod"
              isLoading={isLoading}
              text={createPodText}
              onClick={onCreatePodClicked}
            />
            <Details id="event-card-details" onClick={onShowDetailsClicked} />
          </>
        }
      />
    </Card>
  );
};

PeaEventCard.propTypes = {
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  }),
  social: PropTypes.string,
  socialLink: PropTypes.string,
  shareText: PropTypes.string.isRequired,
  shareLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  podCount: PropTypes.number,
  timeString: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  attendingPeas: PropTypes.arrayOf(PropTypes.string),
  interestedPeas: PropTypes.arrayOf(PropTypes.string),
  onShowDetailsClicked: PropTypes.func.isRequired,
  onCreatePodClicked: PropTypes.func.isRequired,
  onUserClick: PropTypes.func.isRequired,
  onShareEventClicked: PropTypes.func.isRequired,
  stats: PropTypes.shape({
    interested: PropTypes.number,
    attending: PropTypes.number,
    limit: PropTypes.number,
  }),
  createPodText: PropTypes.string,
  isLoading: PropTypes.bool,
  renderTitle: PropTypes.func,
  facebookAppId: PropTypes.string,
};

PeaEventCard.defaultProps = {
  subTitle: '',
  podCount: 0,
  attendingPeas: [],
  interestedPeas: [],
  social: undefined,
  socialLink: undefined,
  createPodText: 'Create Pod',
  isLoading: false,
  stats: undefined,
  profile: undefined,
  renderTitle: undefined,
  facebookAppId: '',
};

PeaEventCard.metadata = {
  name: 'Pea Event Card',
};

PeaEventCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaEventCard;
