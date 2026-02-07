-- Create registrations table
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  player1_name TEXT NOT NULL,
  player2_name TEXT,
  team_name TEXT,
  team_color TEXT,
  skill_level INTEGER NOT NULL DEFAULT 50,
  join_drinks BOOLEAN NOT NULL DEFAULT false,
  is_hyped BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration form)
CREATE POLICY "Anyone can register"
ON public.registrations
FOR INSERT
WITH CHECK (true);

-- Allow anyone to read registrations (so you can display them if needed)
CREATE POLICY "Anyone can view registrations"
ON public.registrations
FOR SELECT
USING (true);