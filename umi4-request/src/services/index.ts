import { request } from '@umijs/max';

export async function fetchUser() {
  return request<string>('/api/user')
}

export async function fetchUserError() {
  return request<string>('/api/userError')
}
