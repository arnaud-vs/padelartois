-- Add needs_racket column to registrations table
ALTER TABLE public.registrations 
ADD COLUMN needs_racket boolean NOT NULL DEFAULT false;