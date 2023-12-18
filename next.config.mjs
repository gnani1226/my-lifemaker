import withMDX from '@next/mdx';

export default withMDX({
  extension: /\.mdx$/,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/developer:slug*',
        destination: '/:slug*',
        permanent: false,
      },
    ];
  },
});



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   async redirects() {
//     return [
//       {
//         source: '/developer:slug*',
//         destination: '/:slug*',
//         permanent: false,

//       },
//     ]
//   },
// }

// export default nextConfig
