"use client";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { ImgLink } from '@/module/ImgLink';
import Link from 'next/link';
import { useAuth } from '@/contexts/AppContext';
import { DeleteBookModal } from './ActionModal';

export default function BookList({ id, title, author, onDeleteSuccess }: BookCardProps & { onDeleteSuccess?: () => void }) {

  const { user } = useAuth();


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
          <>
            {user?.username && <DeleteBookModal id={id} onDeleteSuccess={() => onDeleteSuccess?.()} />}
            
            <Link href={`book/${id}`}>
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${title}`}
              >
                <InfoIcon />
              </IconButton>
            </Link>
          </>
        }
      />
    </ImageListItem>


  );
}