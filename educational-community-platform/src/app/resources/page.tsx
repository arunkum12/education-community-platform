'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Resource = {
  id: number
  title: string
  description: string
  category: 'lesson_plan' | 'website' | 'coursebook'
  url: string
}

const mockResources: Resource[] = [
  { id: 1, title: 'Intro to Algebra', description: 'A comprehensive lesson plan for introducing algebra', category: 'lesson_plan', url: '#' },
  { id: 2, title: 'Khan Academy', description: 'Free online courses and practice exercises', category: 'website', url: 'https://www.khanacademy.org/' },
  { id: 3, title: 'Python for Beginners', description: 'A beginner-friendly Python programming book', category: 'coursebook', url: '#' },
  { id: 4, title: 'History Timeline Project', description: 'Interactive history lesson plan', category: 'lesson_plan', url: '#' },
  { id: 5, title: 'Coursera', description: 'Online learning platform with various courses', category: 'website', url: 'https://www.coursera.org/' },
  { id: 6, title: 'Introduction to Machine Learning', description: 'Comprehensive guide to ML basics', category: 'coursebook', url: '#' },
]

export default function Resources() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [resources, setResources] = useState(mockResources)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Teaching Resources</h1>
      <div className="mb-4">
        <Label htmlFor="search">Search Resources</Label>
        <Input
          id="search"
          type="text"
          placeholder="Search by title or description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="lesson_plan">Lesson Plans</TabsTrigger>
          <TabsTrigger value="website">Websites</TabsTrigger>
          <TabsTrigger value="coursebook">Coursebooks</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <ResourceList resources={filteredResources} />
        </TabsContent>
        <TabsContent value="lesson_plan">
          <ResourceList resources={filteredResources.filter(r => r.category === 'lesson_plan')} />
        </TabsContent>
        <TabsContent value="website">
          <ResourceList resources={filteredResources.filter(r => r.category === 'website')} />
        </TabsContent>
        <TabsContent value="coursebook">
          <ResourceList resources={filteredResources.filter(r => r.category === 'coursebook')} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ResourceList({ resources }: { resources: Resource[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {resources.map(resource => (
        <Card key={resource.id}>
          <CardHeader>
            <CardTitle>{resource.title}</CardTitle>
            <CardDescription>{resource.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{resource.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">View Resource</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}