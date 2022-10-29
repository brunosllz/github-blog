import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

interface IssuesProps {
  number: number
  title: string
  body: string
  created_at: Date
}

async function fetchIssues() {
  const response = await axios.get(
    'https://api.github.com/search/issues?q=repo:brunosllz/github-blog',
  )

  console.log(response.data.items)
  return response.data.items
}

export function useFetchIssues() {
  return useQuery<IssuesProps[], Error>(['issues'], fetchIssues, {
    staleTime: 60000 * 2, // 2 minutes,
  })
}
