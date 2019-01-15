import React from 'react'
import Header from '../header/Header'
import { render } from 'react-storefront/renderers'
import AppModel from '../AppModel'
import theme from '../theme'
import createGlobalState from '../globalState'

/**
 * Inserts the PWA header into adapt pages.
 * @param {Object} stats Webpack build stats object for the client build
 */
export default function renderHeader(stats) {
  const { html } = render({
    component: <Header showPromo={false}/>,
    state: AppModel.create(createGlobalState()),
    theme,
    stats,
    clientChunk: 'header' // the name of the entry injected into config/web.dev.*.js
  })

  // remove the existing header
  $body.find('#reb-header-wrapper').remove()

  // add the new header and supporting resources to the document
  const $header = $(tag('div', { class: 'mw-header' })).append(html)
  $body.prepend($header)
}
