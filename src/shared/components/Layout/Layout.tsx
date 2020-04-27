import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetaData from 'shared/hooks/useSiteMetaData';

interface IProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const Layout = ({ children, title, description, imageUrl }: IProps) => {
  const siteMeta = useSiteMetaData();
  const metaImageUrl = `${siteMeta.url}${imageUrl || siteMeta.imageUrl}`;
  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
