/*
  # Create projects table

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `category` (text)
      - `location` (text)
      - `date` (text)
      - `image_url` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('residential', 'commercial', 'industrial')),
  location text NOT NULL,
  date text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are viewable by everyone"
  ON projects
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Projects are insertable by authenticated users"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);