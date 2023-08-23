import axios from 'axios'
import jwt from 'jsonwebtoken'
import useSWR from 'swr'
import { useAuth } from '../contexts/authintication'
export const apiUrl = process.env.NEXT_PUBLIC_API_URL

export default function useResource() {
  const { tokens, logout } = useAuth()
  
  const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource)

  async function fetchResource() {
    if (!tokens) {
      return
    }

    try {
      const response = await axios.get(apiUrl, config())

      return response.data
    } catch (err) {
      handleError(error)
    }
  }

  async function createResource(info) {
    try {
      await axios.post(apiUrl, info, config())
      mutate() // mutate causes complete collection to be refetched
    } catch (err) {
      handleError(error)
    }
  }

  async function deleteResource(id) {
    try {
      const url = apiUrl + id
      await axios.delete(url, config())
      mutate() // mutate causes complete collection to be refetched
    } catch (err) {
      handleError(error)
    }
  }

  async function updateResource() {
    // STRETCH
    // Add ability for user to update an existing resource
  }

  // helper function to handle getting Authorization headers EXACTLY right
  function config() {
    return {
      headers: {
        'Authorization': 'Bearer ' + tokens.access
      }
    }
  }

  async function handleError(err) {
    console.error(err)
    if (err) {
      console.log(err)
      }
      logout()
    }
    return {
      resources: data,
      error,
      createResource,
      deleteResource,
      updateResource
    }
  }

