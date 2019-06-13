import Head from 'next/head'

export function CustomHead({
  site_name = 'TheCommunity',
  description = "What's your story? Tell it on TheCommunity Discover some of the world's most powerful written voices.",
  url = '',
  type = 'WebSite',
  title = "TheCommunity: Africa's most powerful written voices",
  dateModified = '',
  datePublished = '',
  dateCreated = '',
  keywords = '',
  image,
  author
}) {
  function fixUrl(url) {
    if (!url) return

    if (!url.substring(0, 5).includes('http')) {
      if (!url.substring(0, 2).includes('//')) return `https://${url}`
      return `https:${url}`
    }

    return url
  }

  const isArticle = type == 'Article'
  let ldjson = {
    '@context': 'https://schema.org',
    name: site_name,
    '@type': type,
    publisher: {
      '@type': 'Organization',
      name: 'TheCommunity',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thecommunity.ng/static/images/logo3.png',
        width: 60,
        height: 60
      }
    },

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://thecommunity.ng/'
    }
  }

  if (type === 'WebSite') {
    if (dateCreated) ldjson.dateCreated = dateCreated
    if (dateModified) ldjson.dateModified = dateCreated
  }

  if (url) ldjson.url = url

  if (image)
    ldjson.image = {
      '@type': 'ImageObject',
      url: fixUrl(image.url),
      width: image.width,
      height: image.height
    }

  if (isArticle) {
    ldjson = {
      ...ldjson,
      author: {
        '@type': 'Person',
        name: author.name,
        url: author.public_url,
        sameAs: author.links ? [].concat(author.links) : []
      },
      headline: title,
      datePublished,
      dateCreated,
      dateModified,
      keywords,
      description
    }

    if (author.profile_picture) {
      ldjson.author.image = {
        '@type': 'ImageObject',
        url: fixUrl(author.profile_picture),
        width: 250,
        height: 250
      }
    }
  }

  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta name="apple-mobile-web-app-title" content={site_name} />

      <meta property="og:site_name" content={site_name} />
      <meta property="og:type" content={type.toLowerCase()} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && (
        <>
          <meta property="og:url" content={url} />
          <link rel="canonical" href={url} />
        </>
      )}
      {isArticle && (
        <>
          <meta property="article:published_time" content={datePublished} />
          <meta property="article:modified_time" content={dateModified} />
          <meta property="article:tag" content={keywords} />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/thecommunity.stories"
          />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      {image && <meta name="twitter:image" content={fixUrl(image.url)} />}
      {isArticle && (
        <>
          <meta name="twitter:label1" content="Written by" />
          <meta name="twitter:data1" content={author.name} />
          <meta name="twitter:label2" content="Filed under" />
          <meta name="twitter:data2" content={keywords} />
          {author.twitter && (
            <meta name="twitter:creator" content={author.twitter} />
          )}
        </>
      )}
      <meta name="twitter:site" content="@thecommunity_ng" />
      {image && (
        <>
          <meta property="og:image:width" content={image.width} />
          <meta property="og:image:height" content={image.height} />
          <meta property="og:image" content={fixUrl(image.url)} />
        </>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldjson) }}
      />
    </Head>
  )
}
