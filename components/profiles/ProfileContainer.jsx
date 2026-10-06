"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
  const [allProfiles, setAllProfiles] = useState([]);

  async function fetchProfiles() {
    try {
      const res = await fetch("/api/profiles");
      const data = await res.json();
      setAllProfiles(data.allProfiles);
    } catch (error) {
      console.log(error + "can not fetch data");
    }
  }
  useEffect(() => {
    fetchProfiles();
  }, []);

  if (allProfiles.length === 0)
    return <div className="text-center">No profiles yet.</div>;

  return (
    <div className="flex gap-4">
      {allProfiles.map((profile) => (
        <ProfileCard
          id={profile._id}
          key={profile._id}
          name={profile.name}
          age={profile.age}
          occupation={profile.occupation}
          message={profile.message}
          fetchProfiles={fetchProfiles}
        />
      ))}
    </div>
  );
};

export default ProfileContainer;
