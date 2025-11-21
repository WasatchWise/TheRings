import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, category, message } = body

    // Validate input
    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Get client IP for spam prevention
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'

    const supabase = await createClient()
    
    // Check if user is logged in
    const { data: { user } } = await supabase.auth.getUser()
    let userId = null

    if (user) {
      // Get user profile ID
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('id')
        .eq('auth_user_id', user.id)
        .single()
      
      if (profile) {
        userId = profile.id
      }
    }

    // Insert feedback submission
    const { data, error } = await supabase
      .from('feedback_submissions')
      .insert({
        name,
        email,
        category,
        message,
        user_id: userId,
        ip_address: ip,
        status: 'new',
      })
      .select()
      .single()

    if (error) {
      console.error('Error submitting feedback:', error)
      return NextResponse.json(
        { error: 'Failed to submit feedback. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, id: data.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing feedback:', error)
    return NextResponse.json(
      { error: 'Failed to process feedback. Please try again.' },
      { status: 500 }
    )
  }
}

