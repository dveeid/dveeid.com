import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Schema for request validation
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    // Debug: Check if API key is loaded
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length || 0);
    
    // Parse and validate the request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    console.log('Attempting to send email to:', 'drn.21777@gmail.com');
    console.log('From:', 'Portfolio Contact <onboarding@resend.dev>');

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Using Resend's verified sender
      to: ['drn.21777@gmail.com'], // Your email address
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${validatedData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 5px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This email was sent from your portfolio contact form at dveeid.com
            </p>
          </div>
        </div>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
        New Contact Form Submission
        
        From: ${validatedData.name} <${validatedData.email}>
        Subject: ${validatedData.subject}
        
        Message:
        ${validatedData.message}
        
        ---
        This email was sent from your portfolio contact form at dveeid.com
      `,
    });

    // Check if email was sent successfully
    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      console.error('Full Resend response:', emailResponse);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }
    
    console.log('Email sent successfully! Response:', emailResponse);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
} 