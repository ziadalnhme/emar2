/*
  # Create services table

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `features` (text array)
      - `icon` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `services` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  features text[] DEFAULT '{}',
  icon text DEFAULT 'wrench',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are viewable by everyone"
  ON services
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Services are insertable by authenticated users"
  ON services
  FOR INSERT
  TO authenticated
  WITH CHECK (true);