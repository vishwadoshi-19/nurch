'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  User,
  Mail,
  Phone,
  Award,
  Briefcase,
  Star,
  Calendar,
  Clock,
  ChevronRight,
  Edit2,
  Check,
} from 'lucide-react';
import { ProfileSection } from '@/components/ProfileSection';
import { StatsCard } from '@/components/StatsCard';
import { TestimonialCard } from '@/components/TestimonialCard';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Dr. Sarah Wilson',
    role: 'Senior Care Specialist',
    email: 'sarah.wilson@healthcare.com',
    phone: '+91 98765 43210',
    photo:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&h=300',
    specializations: ['Geriatric Care', 'Rehabilitation', 'Post-Surgery Care'],
    certifications: [
      { name: 'Registered Nurse', year: 2018 },
      { name: 'Geriatric Care Specialist', year: 2020 },
      { name: 'Advanced Life Support', year: 2021 },
    ],
    experience: [
      {
        role: 'Senior Care Specialist',
        facility: 'City Hospital',
        duration: '2020 - Present',
      },
      {
        role: 'Staff Nurse',
        facility: 'Medicare Center',
        duration: '2018 - 2020',
      },
    ],
    stats: {
      rating: 4.8,
      completedTasks: 1250,
      hoursWorked: 3200,
      onTimeRate: 98,
    },
    testimonials: [
      {
        id: 1,
        patientName: 'John Smith',
        rating: 5,
        comment:
          'Exceptional care and attention to detail. Made my recovery much easier.',
        date: '2 weeks ago',
      },
      {
        id: 2,
        patientName: 'Mary Johnson',
        rating: 5,
        comment: 'Very professional and caring. Highly recommended!',
        date: '1 month ago',
      },
    ],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
      {/* Header Section */}
      <div className="bg-blue-500 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 mb-8">
        <div className="flex items-center gap-6">
          <div className="relative">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
            />
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg">
              <Edit2 className="w-4 h-4 text-blue-500" />
            </button>
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-blue-100">{profile.role}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatsCard
          icon={Star}
          title="Rating"
          value={profile.stats.rating}
          suffix="/5"
        />
        <StatsCard
          icon={Check}
          title="Tasks"
          value={profile.stats.completedTasks}
        />
        <StatsCard
          icon={Clock}
          title="Hours"
          value={profile.stats.hoursWorked}
        />
        <StatsCard
          icon={Calendar}
          title="On Time"
          value={profile.stats.onTimeRate}
          suffix="%"
        />
      </div>

      {/* Profile Sections */}
      <div className="space-y-6">
        <ProfileSection
          icon={User}
          title="Personal Information"
          items={[
            { label: 'Email', value: profile.email },
            { label: 'Phone', value: profile.phone },
          ]}
        />

        <ProfileSection
          icon={Award}
          title="Specializations"
          items={profile.specializations.map((spec) => ({ value: spec }))}
        />

        <ProfileSection
          icon={Award}
          title="Certifications"
          items={profile.certifications.map((cert) => ({
            value: cert.name,
            subtitle: `Obtained ${cert.year}`,
          }))}
        />

        <ProfileSection
          icon={Briefcase}
          title="Work Experience"
          items={profile.experience.map((exp) => ({
            value: exp.role,
            subtitle: `${exp.facility} • ${exp.duration}`,
          }))}
        />

        {/* Testimonials */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="space-y-4">
            {profile.testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
