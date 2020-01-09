import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import { Snapshare } from "react-snapshare";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

// const SnapChatIcon = () => (
//   <svg viewBox="0 0 500 500" width="30" height="30">
//     <path
//       fill="#fff"
// eslint-disable-next-line
//       d="M417.93,340.71c-60.61-29.34-70.27-74.64-70.7-78-.52-4.07-1.11-7.27,3.38-11.41,4.33-4,23.54-15.89,28.87-19.61,8.81-6.16,12.69-12.31,9.83-19.87-2-5.23-6.87-7.2-12-7.2a22.3,22.3,0,0,0-4.81.54c-9.68,2.1-19.08,6.95-24.52,8.26a8.56,8.56,0,0,1-2,.27c-2.9,0-4-1.29-3.72-4.78.68-10.58,2.12-31.23.45-50.52-2.29-26.54-10.85-39.69-21-51.32C316.8,101.43,294,77.2,250,77.2S183.23,101.43,178.35,107c-10.18,11.63-18.73,24.78-21,51.32-1.67,19.29-.17,39.93.45,50.52.2,3.32-.82,4.78-3.72,4.78a8.64,8.64,0,0,1-2-.27c-5.43-1.31-14.83-6.16-24.51-8.26a22.3,22.3,0,0,0-4.81-.54c-5.15,0-10,2-12,7.2-2.86,7.56,1,13.71,9.84,19.87,5.33,3.72,24.54,15.6,28.87,19.61,4.48,4.14,3.9,7.34,3.38,11.41-.43,3.41-10.1,48.71-70.7,78-3.55,1.72-9.59,5.36,1.06,11.24,16.72,9.24,27.85,8.25,36.5,13.82,7.34,4.73,3,14.93,8.34,18.61,6.56,4.53,25.95-.32,51,7.95,21,6.92,33.76,26.47,71,26.47s50.37-19.64,71-26.47c25-8.27,44.43-3.42,51-7.95,5.33-3.68,1-13.88,8.34-18.61,8.65-5.57,19.77-4.58,36.5-13.82C427.52,346.07,421.48,342.43,417.93,340.71Z"/><path d="M444.3,337.26c-2.72-7.4-7.9-11.36-13.8-14.64-1.11-.65-2.13-1.17-3-1.57-1.76-.91-3.56-1.79-5.35-2.72-18.39-9.75-32.75-22.05-42.71-36.63a83.06,83.06,0,0,1-7.33-13c-.85-2.43-.81-3.81-.2-5.07a8.25,8.25,0,0,1,2.35-2.45c3.16-2.09,6.42-4.21,8.63-5.64,3.94-2.55,7.06-4.57,9.07-6,7.55-5.28,12.83-10.89,16.13-17.16A34.17,34.17,0,0,0,409.78,204c-5-13.16-17.43-21.33-32.49-21.33a44.75,44.75,0,0,0-9.45,1c-.83.18-1.66.37-2.47.58.14-9-.06-18.5-.86-27.85-2.84-32.87-14.35-50.1-26.35-63.84A105,105,0,0,0,311.37,71C293.16,60.6,272.51,55.32,250,55.32S206.94,60.6,188.71,71a104.62,104.62,0,0,0-26.84,21.6c-12,13.74-23.51,31-26.35,63.84-.8,9.35-1,18.9-.87,27.85-.81-.21-1.63-.4-2.46-.58a44.75,44.75,0,0,0-9.45-1c-15.07,0-27.52,8.17-32.5,21.33a34.21,34.21,0,0,0,1.65,28.41c3.31,6.27,8.59,11.88,16.14,17.16,2,1.4,5.13,3.42,9.07,6,2.13,1.38,5.24,3.4,8.29,5.42a8.9,8.9,0,0,1,2.66,2.67c.64,1.31.66,2.72-.29,5.32a82.29,82.29,0,0,1-7.21,12.73c-9.74,14.25-23.68,26.33-41.48,36-9.43,5-19.23,8.34-23.37,19.59-3.12,8.49-1.08,18.15,6.85,26.29h0a39.63,39.63,0,0,0,10,7.57,108.35,108.35,0,0,0,24.47,9.79,16.16,16.16,0,0,1,4.94,2.21c2.89,2.53,2.48,6.34,6.33,11.92a27.8,27.8,0,0,0,7.24,7.36c8.08,5.58,17.16,5.93,26.78,6.3,8.69.33,18.54.71,29.79,4.42,4.66,1.54,9.5,4.52,15.11,8,13.47,8.28,31.91,19.61,62.77,19.61s49.43-11.39,63-19.7c5.57-3.42,10.38-6.37,14.91-7.87,11.25-3.72,21.1-4.09,29.79-4.42,9.62-.37,18.7-.72,26.78-6.3a27.89,27.89,0,0,0,8.24-9c2.77-4.71,2.7-8,5.3-10.3a15.32,15.32,0,0,1,4.64-2.12,108.76,108.76,0,0,0,24.8-9.88A39,39,0,0,0,437.94,363l.1-.12C445.48,354.92,447.35,345.54,444.3,337.26ZM416.87,352c-16.73,9.24-27.85,8.25-36.5,13.82-7.35,4.73-3,14.93-8.34,18.61-6.56,4.53-25.95-.32-51,7.95-20.66,6.83-33.84,26.47-71,26.47S200,399.25,179,392.33c-25-8.27-44.43-3.42-51-7.95-5.33-3.68-1-13.88-8.34-18.61C111,360.2,99.88,361.19,83.16,352c-10.65-5.88-4.61-9.52-1.06-11.24,60.6-29.34,70.27-74.64,70.7-78,.52-4.07,1.1-7.27-3.38-11.41-4.33-4-23.54-15.89-28.87-19.61-8.82-6.16-12.7-12.31-9.84-19.87,2-5.23,6.88-7.2,12-7.2a22.3,22.3,0,0,1,4.81.54c9.68,2.1,19.08,6.95,24.51,8.26a8.64,8.64,0,0,0,2,.27c2.9,0,3.92-1.46,3.72-4.78-.62-10.59-2.12-31.23-.45-50.52,2.29-26.54,10.84-39.69,21-51.32,4.88-5.59,27.81-29.82,71.66-29.82S316.8,101.43,321.68,107c10.17,11.63,18.73,24.78,21,51.32,1.67,19.29.23,39.94-.45,50.52-.23,3.49.82,4.78,3.72,4.78a8.56,8.56,0,0,0,2-.27c5.44-1.31,14.84-6.16,24.52-8.26a22.3,22.3,0,0,1,4.81-.54c5.15,0,10,2,12,7.2,2.86,7.56-1,13.71-9.83,19.87-5.33,3.72-24.54,15.6-28.87,19.61-4.49,4.14-3.9,7.34-3.38,11.41.43,3.41,10.09,48.71,70.7,78C421.48,342.43,427.52,346.07,416.87,352Z"
//     />
//   </svg>
// );

const useStyles = makeStyles({
  item: {
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    cursor: 'pointer',
  },
  snapChatContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 20,
  },
  snapChatIcon: {
    // width: 40,
    // height: 40,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#FFFC00',
    // borderRadius: '50%',
    // cursor: 'pointer',
    '& > button': {
      transform: 'scale(1.4)',
    },
  },
});

const PeaShareContent = ({ shareText, shareLink, onShare }) => {
  const classes = useStyles();

  // const onSnapChatShare = () => {
  //   const originalSnapContainer = document.getElementsByClassName(
  //     'snapchat-creative-kit-share'
  //   )[0];
  //   originalSnapContainer.setAttribute('data-share-url', shareLink);
  //   setTimeout(() => {
  //     originalSnapContainer.firstChild.click();
  //   }, 100);
  // };

  // React.useEffect(() => {
  //   return () => {
  //   }
  // }, [])

  return (
    <>
      <Helmet>
        <script>
          {`
            (function(d, s, id) {
              var js,
                sjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s);
              js.id = id;
              js.src = "https://sdk.snapkit.com/js/v1/create.js";
              sjs.parentNode.insertBefore(js, sjs);
            })(document, "script", "snapkit-creative-kit-sdk");
          `}
        </script>
      </Helmet>
      <Grid container>
        <EmailShareButton
          url={shareLink}
          subject={shareText}
          className={classes.item}
          onShareWindowClose={onShare('email')}
          openWindow
        >
          <EmailIcon size={40} round />
        </EmailShareButton>

        <FacebookShareButton
          url={shareLink}
          quote={`${shareText} #peapods`}
          className={classes.item}
          onShareWindowClose={onShare('facebook')}
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareLink}
          title={`${shareText} #peapods`}
          className={classes.item}
          onShareWindowClose={onShare('twitter')}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={shareLink}
          quote={`${shareText} #peapods`}
          className={classes.item}
          onShareWindowClose={onShare('linkedin')}
          openWindow
        >
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
        <Grid className={classes.snapChatContainer}>
          <div
            className={`snapchat-creative-kit-share ${classes.snapChatIcon}`}
            data-share-url={'https://kit.snapchat.com/'}
            data-text="false"
            data-size="large"
          />
        </Grid>

        {/* <Snapshare
          dataShareUrl="https://twang.dev/react-snapshare/"
          stickerAssetURL="https://kit.snapchat.com/ckweb/test/image.png"
        /> */}
        {/* <Grid className={classes.snapChatContainer}>
          <Grid
            className={classes.snapChatIcon}
            onClick={onSnapChatShare}
          >
            <SnapChatIcon />
          </Grid>
        </Grid> */}
      </Grid>
    </>
  );
};

PeaShareContent.propTypes = {
  shareText: PropTypes.string.isRequired,
  shareLink: PropTypes.string.isRequired,
  onShare: PropTypes.func.isRequired,
};

PeaShareContent.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaShareContent;
