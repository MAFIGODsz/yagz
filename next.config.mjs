/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // As imagens reais da Yá ficam em /public/images/ya-guayanaz e são servidas
  // localmente, então não há necessidade de configurar domínios remotos.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
