import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export interface UserProps {
  login: string
  id: number
  html_url: string
  avatar_url: string
  name: string
  company: string
  location: string
  bio: string
  public_repos: 15
  followers: 14
  following: 9
}

async function fetchUser() {
  const response = await axios.get('https://api.github.com/users/brunosllz')

  return response.data
}

export function useFetchUser() {
  return useQuery<UserProps, Error>(['user'], fetchUser, {
    staleTime: 60000 * 2, // 2 minutes,
  })
}
