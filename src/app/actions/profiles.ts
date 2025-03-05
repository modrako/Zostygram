"use server";

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

// Fetch all profiles with user information
export const fetchProfiles = async () => {
  try {
    const profiles = await prisma.profile.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return profiles;
  } catch (error) {
    console.error("Error fetching profiles:", error);
    throw new Error("Could not fetch profiles");
  }
};

// Fetch a specific profile by ID
export const fetchProfileById = async (profileId: string) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        id: profileId,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            image: true,
            posts: {
              orderBy: {
                createdAt: 'desc',
              },
            },
          },
        },
      },
    });

    if (!profile) {
      throw new Error("Profile not found");
    }

    return profile;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw new Error("Could not fetch profile");
  }
};

// Search profiles by name or location
export const searchProfiles = async (searchTerm: string) => {
  try {
    const profiles = await prisma.profile.findMany({
      where: {
        OR: [
          {
            user: {
              name: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
          },
          {
            location: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
        ],
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return profiles;
  } catch (error) {
    console.error("Error searching profiles:", error);
    throw new Error("Could not search profiles");
  }
}; 