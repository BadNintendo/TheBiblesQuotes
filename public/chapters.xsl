<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:output method="html" indent="yes"/>
	<xsl:template match="/chapters">
		<html>
			<head><title>Bible Chapters</title></head>
			<body>
				<xsl:for-each select="chapter">
					<h2><xsl:value-of select="@title"/></h2>
					<table border="1" cellpadding="5" cellspacing="0">
						<xsl:for-each select="section">
							<tr>
								<td><strong>Verses</strong></td>
								<td><xsl:value-of select="verses"/></td>
							</tr>
							<tr>
								<td><strong>Summary</strong></td>
								<td><xsl:value-of select="summary"/></td>
							</tr>
						</xsl:for-each>
					</table>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>