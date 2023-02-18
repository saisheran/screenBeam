import { Typography,Card,CardContent,CardMedia} from '@mui/material';
import {Link} from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl,demoChannelUrl,demoVideoTitle,demoChannelTitle,demoVideoUrl } from '../utils/constants';



const VideoCard = ({video :{id:{
  videoId
},snippet}}) => {
 
  return (
    <Card sx={{ width:{ md:'320px',sm:'358px', xs:"100%"},boxShadow:'none',borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url|| demoThumbnailUrl}
      alt={snippet?.title}
      sx={{width:{xs:'100%',sm:'358px',md:'320px'}, height:180}}
      />

      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E' ,height:'106px'}}>
      <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0,60)|| demoVideoTitle.slice(0,60)}
        </Typography>
       </Link>
       <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight="gray"
        >
          {snippet?.channelTitle|| demoChannelTitle}
          <CheckCircle sx={{ fontSize:"12px",color:'gray',ml:'5px'}}/>
        </Typography>
       </Link>
     </CardContent>
    </Card>
  )
}

export default VideoCard