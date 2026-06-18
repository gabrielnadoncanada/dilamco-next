<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="s image">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="fr">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap XML — Dilamco</title>
        <style>
          :root { color-scheme: light dark; }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font: 14px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #1a1a1a;
            background: #f6f7f9;
          }
          header {
            padding: 28px 24px;
            background: #111827;
            color: #fff;
          }
          header h1 { margin: 0 0 4px; font-size: 20px; font-weight: 600; }
          header p { margin: 0; font-size: 13px; color: #9ca3af; }
          .wrap { max-width: 1200px; margin: 0 auto; padding: 24px; }
          .count { margin: 0 0 16px; color: #4b5563; font-size: 13px; }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            overflow: hidden;
          }
          th, td {
            text-align: left;
            padding: 10px 14px;
            border-bottom: 1px solid #f0f1f3;
            vertical-align: top;
          }
          th {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: .05em;
            color: #6b7280;
            background: #fafbfc;
          }
          tr:last-child td { border-bottom: 0; }
          tr:hover td { background: #fafbfc; }
          td.url a { color: #1d4ed8; text-decoration: none; word-break: break-all; }
          td.url a:hover { text-decoration: underline; }
          td.num { text-align: right; font-variant-numeric: tabular-nums; color: #6b7280; white-space: nowrap; }
          td.meta { color: #6b7280; white-space: nowrap; }
          .idx td { padding: 12px 14px; }
          @media (max-width: 640px) {
            .hide-sm { display: none; }
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Sitemap XML</h1>
          <p>Cette page est une vue lisible du sitemap. Les moteurs de recherche lisent le XML brut.</p>
        </header>
        <div class="wrap">
          <xsl:apply-templates select="s:sitemapindex"/>
          <xsl:apply-templates select="s:urlset"/>
        </div>
      </body>
    </html>
  </xsl:template>

  <!-- Index de sitemaps -->
  <xsl:template match="s:sitemapindex">
    <p class="count">
      <xsl:value-of select="count(s:sitemap)"/> sitemap(s)
    </p>
    <table>
      <tr>
        <th>Sitemap</th>
        <th class="hide-sm">Dernière modification</th>
      </tr>
      <xsl:for-each select="s:sitemap">
        <tr class="idx">
          <td class="url">
            <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
          </td>
          <td class="meta hide-sm"><xsl:value-of select="s:lastmod"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>

  <!-- Liste d'URLs -->
  <xsl:template match="s:urlset">
    <p class="count">
      <xsl:value-of select="count(s:url)"/> URL(s)
    </p>
    <table>
      <tr>
        <th>URL</th>
        <th class="hide-sm">Fréquence</th>
        <th class="hide-sm">Priorité</th>
        <th class="hide-sm">Dernière modification</th>
      </tr>
      <xsl:for-each select="s:url">
        <tr>
          <td class="url">
            <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
          </td>
          <td class="meta hide-sm"><xsl:value-of select="s:changefreq"/></td>
          <td class="num hide-sm"><xsl:value-of select="s:priority"/></td>
          <td class="meta hide-sm"><xsl:value-of select="substring(s:lastmod, 1, 10)"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>

</xsl:stylesheet>
