<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <!-- Root template -->
  <xsl:template match="/verses">
    <html>
      <head>
        <title>Bible Verse Results</title>
        <!--<style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
          .verse-block { background: #fff; border: 1px solid #ccc; padding: 15px; margin-bottom: 20px; }
          .version { font-weight: bold; font-size: 1.2em; color: #2c3e50; }
          .reference { font-style: italic; color: #7f8c8d; }
          .text { margin-top: 10px; }
          .additional { margin-top: 10px; padding-left: 10px; border-left: 3px solid #ccc; }
          .additional-item { margin-bottom: 5px; }
          .label { font-weight: bold; color: #34495e; }
        </style>-->
        <link rel="stylesheet" href="/css/xml.css"/>
      </head>
      <body>
        <h1>Bible Verse Results</h1>
        <xsl:apply-templates select="*"/>
      </body>
    </html>
  </xsl:template>

  <!-- Template for each version block -->
  <xsl:template match="verses/*">
    <div class="verse-block">
      <div class="version">
        <xsl:value-of select="version"/>
      </div>
      <div class="reference">
        <xsl:value-of select="book"/> <xsl:text> </xsl:text>
        <xsl:value-of select="chapter"/>
        <xsl:if test="verse">
          <xsl:text>:</xsl:text>
          <xsl:value-of select="verse"/>
        </xsl:if>
      </div>
      <div class="text">
        <xsl:value-of select="text"/>
      </div>
      <xsl:if test="additional">
        <div class="additional">
          <h4>Additional Translation Data</h4>
          <xsl:apply-templates select="additional/*"/>
        </div>
      </xsl:if>
    </div>
  </xsl:template>

  <!-- Template for each child of <additional> -->
  <xsl:template match="additional/*">
    <div class="additional-item">
      <span class="label">
        <xsl:value-of select="name()"/>:
      </span>
      <xsl:value-of select="."/>
    </div>
  </xsl:template>

</xsl:stylesheet>