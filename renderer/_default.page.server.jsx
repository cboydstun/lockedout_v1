export { render }

import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { PageLayout } from './PageLayout'

import HeadWithGtag from '../components/HeadWithGtag'

async function render(pageContext) {
  const { Page } = pageContext
  const viewHtml = dangerouslySkipEscape(
    renderToString(
      <PageLayout>
        <Page />
      </PageLayout>
    )
  )

  const headWithGtagHtml = dangerouslySkipEscape(renderToString(<HeadWithGtag />));

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="index, follow">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <link rel="manifest" href="site.webmanifest">
        <link rel="sitemap" type="application/xml" href="sitemap.xml" />
        ${headWithGtagHtml}
        <title>LOCKED OUT</title>
      </head>
      <body>
        <div id="page-view">${viewHtml}</div>
      </body>
    </html>`
}
