<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="Name">
    <xsl:element name="Name">
        <xsl:value-of select="substring(., 1, string-length()-4)"/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="URL">
    <xsl:element name="URL1">
        <xsl:value-of select="."/>
    </xsl:element>
  </xsl:template>

</xsl:stylesheet>