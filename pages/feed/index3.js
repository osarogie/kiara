import React, { Component } from 'react'
import Head from 'next/head'
import { Container } from 'components/_partials/container'
import { AppBar } from 'components/AppBar'

export class DashboardPage extends Component {
  render() {
    return (
      <>
        <AppBar />

        <div className="">
          <div className="">
            <h3 className="line line-1">What's your story?</h3>
            <h2 className="line line-2">Tell it on TheCommunity</h2>
            <h1 className="line line-3">
              Discover Africa's most powerful written voices.
            </h1>
            <a className="button" href="/new-discussion" role="button">
              Share your story
            </a>
            <a className="button" href="/new-culture" role="button">
              Start a culture
            </a>
            <a className="button" href="/new-poll" role="button">
              Create voting forms
            </a>
          </div>
        </div>
        <div className="container">
          <ul className="feed_tabs elevated">
            <li className="<%= @active == 'latest' ? 'active' : '' %>">
              <a href="<%= latest_feed_path %>">Your feed</a>
            </li>
            {/* <% @streams.each do |s| %>
			<li className="<%= s==@active ? 'active' : '' %>">
				<a href="<%= stream_group_path s %>"><%= s.name %></a>
			</li>
		<% end %> */}
          </ul>
          <div className="flex">
            <div className="full-width flex">
              <div className="full-width">
                {/* <%= render 'discussions/discussions', ds: @discussions %> */}
              </div>
              {/* <%= render 'sidebar' %> */}
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .button {
              display: inline-block;
              margin-bottom: 6px;
            }
          `}
        </style>
      </>
    )
  }
}

export default DashboardPage
