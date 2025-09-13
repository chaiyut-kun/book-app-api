import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { ImgLink } from '@/module/ImgLink';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function BookList({id, title, author}: BookCardProps) {

    return (
    
        <ImageListItem>
          <img
            src={ImgLink[title as keyof typeof ImgLink]}
            alt={title}
            loading="lazy"
          />
          <ImageListItemBar
            title={title}
            subtitle={author}
            actionIcon={
            <Link href={`book/${id}`}>
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${title}`}
                >
                <InfoIcon />
              </IconButton>
            </Link>
            }
          />
        </ImageListItem>
    

    );
}