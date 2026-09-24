-- Carawin Tech — Jobs Portal Schema
-- Run this against the cwt-jobs database

CREATE TABLE IF NOT EXISTS jobs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  department VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  experience_level VARCHAR(100) NOT NULL,
  job_type VARCHAR(100) NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  requirements TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

ALTER TABLE jobs ADD COLUMN IF NOT EXISTS skills TEXT NOT NULL DEFAULT '';

CREATE TABLE IF NOT EXISTS applications (
  id SERIAL PRIMARY KEY,
  job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  linkedin_url TEXT NOT NULL DEFAULT '',
  cv_drive_link TEXT NOT NULL DEFAULT '',
  country VARCHAR(100) NOT NULL DEFAULT '',
  area_of_interest VARCHAR(255) NOT NULL DEFAULT '',
  skills TEXT NOT NULL DEFAULT '',
  cover_letter TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS enquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  organisation VARCHAR(255) DEFAULT '',
  designation VARCHAR(255) DEFAULT '',
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(100) DEFAULT '',
  location VARCHAR(255) DEFAULT '',
  area_of_interest VARCHAR(255) DEFAULT '',
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_jobs_active ON jobs(is_active);
CREATE INDEX IF NOT EXISTS idx_applications_job ON applications(job_id);
CREATE INDEX IF NOT EXISTS idx_applications_created ON applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries(created_at DESC);
