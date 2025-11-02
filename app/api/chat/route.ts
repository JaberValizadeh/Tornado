import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Force dynamic rendering - this route should not be statically analyzed during build
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messages } = body

    // Validate API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      )
    }

    // Initialize OpenAI client inside the handler to avoid build-time issues
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Validate messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages are required' },
        { status: 400 }
      )
    }

    // System message to give context about the company
    const systemMessage = {
      role: 'system' as const,
      content: `You are a helpful AI assistant for Tornado Consulting Group (TCG), an AI consulting firm. 
      You help visitors learn about AI consulting services, answer questions about the company, and assist with inquiries.
      Be friendly, professional, and concise. If you don't know something, direct them to contact the company directly.
      Keep responses conversational and helpful.`
    }

    // Add system message to the beginning of messages
    const messagesWithSystem = [systemMessage, ...messages]

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messagesWithSystem,
      temperature: 0.7,
      max_tokens: 500,
    })

    const responseMessage = completion.choices[0]?.message?.content

    if (!responseMessage) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: responseMessage },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error calling OpenAI API:', error)
    
    // Handle specific OpenAI errors
    if (error?.status === 401) {
      return NextResponse.json(
        { error: 'Invalid OpenAI API key' },
        { status: 401 }
      )
    }

    if (error?.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to get response from AI. Please try again.' },
      { status: 500 }
    )
  }
}

