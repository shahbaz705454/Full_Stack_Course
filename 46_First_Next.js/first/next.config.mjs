/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.freepik.com/free-photos-vectors/desktop-wallpaper',
            port: '',
            
            
          },
        ],
      },
};

export default nextConfig;
