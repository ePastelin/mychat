/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const nextConfig = {
    images: {
        domains: ['mychatapi-oxk8.onrender.com']
    },
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, './'),
        };
        config.module.rules.push({
            test: /\.mp3$/,
            use: {
                loader: 'file-loader',
            }
        })

        return config
    }
};

export default nextConfig;
