import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';
import { getData } from '@/lib/data';

export async function generateMetadata() {
  const c = await getData();
  const domain = c.data.domainName;

  const title = !c.data.title?.trim()
    ? `Welcome to ${domain}`
    : c.data.title;

  const description = !c.data.description?.trim()
    ? `Join a vibrant community of developers, influencers, and entrepreneurs on ${domain}, all using the versatile CONTRIB token to power their token economies!`
    : c.data.description;

  const keywords = !c.data.keywords?.trim()
    ? ['website']
    : c.data.keywords.split(',');

  const author = !c.data.author?.trim()
    ? 'contrib'
    : c.data.author;

  const ogImage = `https://${domain}/images/og-image.jpg`;
  const twitterImage = `https://${domain}/images/twitter-image.jpg`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      siteName: domain,
      type: 'website',
      locale: 'en_US',
      url: `https://${domain}`,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [twitterImage],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="tw-antialiased">{children}</body>
    </html>
  );
}
