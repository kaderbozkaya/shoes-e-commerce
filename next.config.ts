import type { NextConfig } from "next";

//amaç dış (remote) bir kaynaktan gelen resimlerin Next.js Image bileşeniyle kullanılmasına izin vermektir
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol:"https", hostname:"utfs.io", port:"",}
    ] /*Sadece HTTPS bağlantılarına izin verir (güvenli).
    hostname: "utfs.io"	Görselin geldiği alan adı bu olmalıdır.
    port: ""	Port belirtilmemişse varsayılan port (443) kullanılır. */
  }
};

export default nextConfig;
