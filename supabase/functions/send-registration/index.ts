import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface RegistrationRequest {
  player1Name: string;
  player2Name?: string;
  teamName?: string;
  teamColor?: string;
  skillLevel: number;
  joinDrinks: boolean;
  isHyped: boolean;
}

const getSkillLabel = (value: number): string => {
  if (value < 20) return "Never played before 🐣";
  if (value < 40) return "Beginner 🎾";
  if (value < 60) return "Intermediate 💪";
  if (value < 80) return "Advanced 🔥";
  return "Padel God 👑";
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: RegistrationRequest = await req.json();
    console.log("Received registration:", data);

    // Validate required fields
    if (!data.player1Name || data.player1Name.trim() === "") {
      throw new Error("Player 1 name is required");
    }

    // Build the email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #b91c1c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">🎾 Nieuwe Inschrijving - Padel Artois Tournament</h1>
        </div>
        
        <div style="background-color: #fef3c7; padding: 20px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #b91c1c; border-bottom: 2px solid #b91c1c; padding-bottom: 10px;">Team Informatie</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Speler 1:</td>
              <td style="padding: 10px 0; color: #1f2937;">${data.player1Name}</td>
            </tr>
            ${data.player2Name ? `
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Speler 2:</td>
              <td style="padding: 10px 0; color: #1f2937;">${data.player2Name}</td>
            </tr>
            ` : ''}
            ${data.teamName ? `
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Team Naam:</td>
              <td style="padding: 10px 0; color: #1f2937;">${data.teamName}</td>
            </tr>
            ` : ''}
            ${data.teamColor ? `
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Teamkleur:</td>
              <td style="padding: 10px 0; color: #1f2937;">${data.teamColor}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Niveau:</td>
              <td style="padding: 10px 0; color: #1f2937;">${getSkillLabel(data.skillLevel)} (${data.skillLevel}%)</td>
            </tr>
          </table>
          
          <h2 style="color: #b91c1c; border-bottom: 2px solid #b91c1c; padding-bottom: 10px; margin-top: 20px;">Voorkeuren</h2>
          
          <p style="color: #1f2937;">
            ${data.joinDrinks ? '✅' : '❌'} Komt naar food & drinks na het tornooi
          </p>
          <p style="color: #1f2937;">
            ${data.isHyped ? '🔥 IS HYPED VOOR HET TORNOOI!' : '😐 Nog niet helemaal hyped'}
          </p>
        </div>
        
        <p style="text-align: center; color: #6b7280; margin-top: 20px; font-size: 12px;">
          Padel Artois Tournament - Zaterdag 18 april 2026
        </p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Padel Artois <onboarding@resend.dev>",
      to: ["arnaud.verstraeten@outlook.com"],
      subject: `🎾 Nieuwe inschrijving: ${data.player1Name}${data.teamName ? ` (${data.teamName})` : ''}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-registration function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
