import db from 'db'
import React, { cache } from 'react'
import { NewspaperIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const getBlogs = cache(async () => {
  return db.query.groups.findMany({
    columns: {
      id: true,
      name: true,
      tagline: true,
      coverPhoto: true,
      permalink: true,
      body: true
    },
    orderBy: (groups, { desc }) => [desc(groups.createdAt)]
  })
})

export default async function BlogsPage() {
  const blogs = await getBlogs()

  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Blogs
          </h1>
        </div>
      </header>
      <main className="mt-4">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {blogs.map((blog) => (
              <Link
                href={`/c/${blog.permalink}`}
                key={blog.id}
                className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
              >
                <div className="flex-shrink-0">
                  {blog.coverPhoto ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={blog.coverPhoto}
                      alt=""
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-400">
                      <NewspaperIcon className="h-6 w-6 text-white" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {blog.name}
                  </p>
                  <p className="truncate text-sm text-gray-500">
                    {blog.tagline || blog.body}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
