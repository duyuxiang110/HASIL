import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ mode }) => {
  // 获取当前环境的配置
  const config = loadEnv(mode, "./");
  return {
    plugins: [
      react(),
      // ViteImageOptimizer({
      //   enabled: true,
      //   skipIfLarger: false,
      //   // PNG 优化配置
      //   png: {
      //     quality: 10, // 压缩质量范围（越低压缩越大）
      //   },
      //   // JPEG 优化配置
      //   jpeg: {
      //     quality: 10, // 压缩质量 (0 - 100)
      //   },
      //   jpg: {
      //     quality: 10, // 压缩质量 (0 - 100)
      //   },
      //   // SVG 优化配置
      //   svg: {
      //     multipass: true, // 优化多个 SVG 节点
      //   },
      //   // GIF 优化配置
      //   gif: {
      //     optimizationLevel: 3, // 优化级别 (0 - 3)
      //   },
      //   // WebP 转换配置
      //   webp: {
      //     quality: 10, // WebP 压缩质量
      //   },
      // }),
    ],
    base: "./",
    server: {
      host: "0.0.0.0",
      port: 3000,
      // 反向代理
      proxy: {
        "/api": {
          target: config.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
      cors: {
        origin: "*",
      },
    },
    build: {
      assetsDir: "assets", // 静态资源存放目录
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name].[hash].[ext]", // 生成文件名包含哈希
        },
      },
    },
    css: {
      modules: {
        hashPrefix: "prefix",
        generateScopedName: "[name]__[local]__[hash:base64:5]",
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  };
});
