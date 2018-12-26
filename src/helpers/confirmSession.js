import React from 'react'
import { Constants } from './../constants'
import { loginLink } from './links'

export function confirmSession() {
  if (!Constants.user) window.location.href = loginLink()
  return !!Constants.user
}
