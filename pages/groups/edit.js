import StartCulture from 'renderers/StartCulture'
import { withRouter } from 'next/router'
import { PageContainer } from './../../src/components/_partials/pageContainer'
import React, { Component } from 'react'
import { AppBar } from 'components/AppBar'

export default class EditGroup extends Component {
  render() {
    return (
      <PageContainer>
        <StartCulture
          id={this.props.router.query.id}
          group={{}}
          editing_mode={true}
        />
      </PageContainer>
    )
  }
}

EditGroup = withRouter(EditGroup)
