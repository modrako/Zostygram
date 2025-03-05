import { Card, CardContent, Typography, Box, Chip, Avatar } from '@mui/material';
import { Profile } from '@prisma/client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  profile: Profile & {
    user: {
      name: string | null;
      email: string;
      image: string | null;
    };
  };
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const [imgError, setImgError] = useState(false);
  
  // Get the best available image URL
  const getImageUrl = () => {
    if (!imgError) {
      if (profile.avatarUrl) return profile.avatarUrl;
      if (profile.user.image) return profile.user.image;
    }
    return null;
  };

  // Get initials from name
  const getInitials = () => {
    const name = profile.user.name || 'Anonymous User';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const imageUrl = getImageUrl();

  return (
    <Link href={`/profil/${profile.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ 
        width: '100%',
        mb: 2,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.01)',
        },
      }}>
        <Box sx={{ display: 'flex', p: 2, alignItems: 'center' }}>
          <Avatar 
            src={imageUrl || undefined}
            alt={profile.user.name || 'User'}
            sx={{ 
              width: 80, 
              height: 80,
              mr: 3,
              fontSize: '1.5rem',
              bgcolor: !imageUrl ? 'primary.main' : undefined
            }}
            imgProps={{
              onError: () => setImgError(true)
            }}
          >
            {!imageUrl && getInitials()}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="div" gutterBottom>
              {profile.user.name || 'Anonymous User'}
            </Typography>
            {profile.location && (
              <Typography variant="body2" color="text.secondary" gutterBottom>
                📍 {profile.location}
              </Typography>
            )}
            {profile.bio && (
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ mb: 1 }}
                noWrap
              >
                {profile.bio}
              </Typography>
            )}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {profile.interests && profile.interests.slice(0, 3).map((interest, index) => (
                <Chip
                  key={index}
                  label={interest}
                  size="small"
                  sx={{ backgroundColor: '#e0e0e0' }}
                />
              ))}
              {profile.interests && profile.interests.length > 3 && (
                <Chip
                  label={`+${profile.interests.length - 3}`}
                  size="small"
                  sx={{ backgroundColor: '#e0e0e0' }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Card>
    </Link>
  );
} 