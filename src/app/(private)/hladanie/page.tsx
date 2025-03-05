// src/app/hladanie/page.tsx

"use client";

import { useState, useEffect } from 'react';
import { Typography, Box, TextField, Container, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchProfiles, searchProfiles } from '@/app/actions/profiles';
import ProfileCard from '@/components/ProfileCard';
import { debounce } from 'lodash';
import { Profile } from '@prisma/client';

type ExtendedProfile = Profile & {
  user: {
    name: string | null;
    email: string;
    image: string | null;
  };
};

export default function Search() {
  const [profiles, setProfiles] = useState<ExtendedProfile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Debounced search function
  const debouncedSearch = debounce(async (term: string) => {
    try {
      const results = term ? await searchProfiles(term) : await fetchProfiles();
      setProfiles(results);
    } catch (error) {
      console.error('Error searching profiles:', error);
    } finally {
      setLoading(false);
    }
  }, 300);

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        const initialProfiles = await fetchProfiles();
        setProfiles(initialProfiles);
      } catch (error) {
        console.error('Error loading profiles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfiles();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setLoading(true);
    debouncedSearch(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        width: '100%'
      }}>
        <Typography variant='h4' gutterBottom> Hľadanie </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Hľadať podľa mena alebo lokácie..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 4 }}
        />
        
        <Box sx={{ width: '100%' }}>
          {loading ? (
            <Typography align="center">Načítavam...</Typography>
          ) : profiles.length > 0 ? (
            profiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))
          ) : (
            <Typography align="center">Žiadne profily neboli nájdené</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
