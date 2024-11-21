'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Event = {
  id: number
  title: string
  description: string
  date: string
  location: string
  capacity: number
}

const mockEvents: Event[] = [
  { id: 1, title: 'Introduction to React', description: 'Learn the basics of React', date: '2023-07-15', location: 'Online', capacity: 50 },
  { id: 2, title: 'Advanced JavaScript Techniques', description: 'Dive deep into JS', date: '2023-07-20', location: 'New York', capacity: 30 },
  { id: 3, title: 'Data Structures and Algorithms', description: 'Fundamental CS concepts', date: '2023-07-25', location: 'San Francisco', capacity: 40 },
]

export default function Events() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [events, setEvents] = useState(mockEvents)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h1>
      <div className="mb-4">
        <Label htmlFor="search">Search Events</Label>
        <Input
          id="search"
          type="text"
          placeholder="Search by title or description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.date} - {event.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
              <p className="mt-2">Capacity: {event.capacity}</p>
            </CardContent>
            <CardFooter>
              <Button>RSVP</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}