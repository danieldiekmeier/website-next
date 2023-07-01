import { getAllSortedPosts } from 'lib/entries'
import { generateFeed } from 'lib/feeds'

export async function GET() {
  const feed = generateFeed({
    entryType: 'posts',
    entries: getAllSortedPosts(),
  })

  return new Response(feed.atom1(), {
    headers: {
      'content-type': 'application/atom+xml; charset=utf-8',
      'cache-control': 'public, s-maxage=600, stale-while-revalidate=1800',
    },
  })
}