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

interface IssueDetailsProps {
  title: string
  body: string
  html_url: string
  comments: number
  created_at: Date
  user: {
    login: string
  }
}

async function fetchIssueDetails({ queryKey }: any) {
  const response = await axios.get(
    `https://api.github.com/repos/brunosllz/github-blog/issues/${queryKey[1]}`,
  )

  return response.data
}

export function useFetchIssueDetails(issueId: string | undefined) {
  return useQuery<IssueDetailsProps, Error>(
    ['issueDetails', issueId],
    fetchIssueDetails,
    {
      staleTime: 60000 * 2, // 2 minutes,
    },
  )
}
