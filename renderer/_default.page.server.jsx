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

        <title>24 Hour Locksmith San Antonio TX | Affordable Emergency Services</title>
        <meta name="description" content="Are you locked out of your car or home? Our 24 hour locksmith San Antonio services are ready to assist. We also offer affordable and reliable key making and mobile locksmith services in San Antonio, TX.">
        <meta name="keywords" content="Locksmith San Antonio, Locksmith San Antonio TX, Cheap Locksmith San Antonio TX, Emergency Locksmith San Antonio, Car Locksmith San Antonio TX, 24 Hour Locksmith San Antonio, Key Maker San Antonio, Locksmith Near Me San Antonio, Mobile Locksmith San Antonio">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="canonical" href="https://www.sanantoniolockedout.com/"/>

        <link rel="manifest" href="site.webmanifest">
        <link rel="sitemap" type="application/xml" href="sitemap.xml" />
        ${headWithGtagHtml}
      </head>
      <body>
        <div id="page-view">${viewHtml}</div>
      </body>
    </html>`
}
