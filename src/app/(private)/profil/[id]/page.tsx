// src/app/profil/[id]/page.tsx

"use client";

import { useEffect, useState } from 'react';
import { Container, Box, Typography, Avatar, Grid, Card, CardMedia, CardContent, Chip, Divider } from '@mui/material';
import { fetchProfileById } from '@/app/actions/profiles';
import { useParams } from 'next/navigation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Profile, Post } from '@prisma/client';

type ExtendedProfile = Profile & {
  user: {
    name: string | null;
    email: string;
    image: string | null;
    posts: Post[];
  };
};

export default function ProfileDetail() {
  const params = useParams();
  const [profile, setProfile] = useState<ExtendedProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        if (!params.id) {
          setError('Chýba ID profilu');
          return;
        }

        const profileData = await fetchProfileById(params.id as string);
        console.log('Loaded profile:', profileData); // Debug log
        setProfile(profileData as ExtendedProfile);
      } catch (err) {
        console.error('Error loading profile:', err);
        setError('Profil sa nepodarilo načítať');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [params.id]);

  if (loading) {
    return (
      <Container>
        <Typography align="center" sx={{ mt: 4 }}>Načítavam...</Typography>
      </Container>
    );
  }

  if (error || !profile) {
    return (
      <Container>
        <Typography align="center" color="error" sx={{ mt: 4 }}>
          {error || 'Profil nebol nájdený'}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        {/* Profile Header */}
        <Card sx={{ mb: 4, p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar
              src={profile.avatarUrl || profile.user.image || undefined}
              alt={profile.user.name || 'User'}
              sx={{ width: 120, height: 120, mr: 3 }}
            />
            <Box>
              <Typography variant="h4" gutterBottom>
                {profile.user.name || 'Anonymous User'}
              </Typography>
              
              {profile.location && (
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography color="text.secondary">{profile.location}</Typography>
                </Box>
              )}
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography color="text.secondary">{profile.user.email}</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarTodayIcon sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography color="text.secondary">
                  Členom od {new Date(profile.createdAt).toLocaleDateString('sk-SK')}
                </Typography>
              </Box>
            </Box>
          </Box>

          {profile.bio && (
            <>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ mb: 2 }}>
                {profile.bio}
              </Typography>
            </>
          )}

          {profile.interests && profile.interests.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {profile.interests.map((interest: string, index: number) => (
                <Chip
                  key={index}
                  label={interest}
                  sx={{ backgroundColor: '#e0e0e0' }}
                />
              ))}
            </Box>
          )}
        </Card>

        {/* Posts Section */}
        {profile.user.posts && profile.user.posts.length > 0 ? (
          <>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Príspevky
            </Typography>
            <Grid container spacing={3}>
              {profile.user.posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.imageUrl}
                      alt={post.caption || 'Post image'}
                      sx={{ objectFit: 'cover' }}
                    />
                    {post.caption && (
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {post.caption}
                        </Typography>
                      </CardContent>
                    )}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <Typography align="center" color="text.secondary">
            Žiadne príspevky na zobrazenie
          </Typography>
        )}
      </Box>
    </Container>
  );
}
