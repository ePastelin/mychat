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
        config.module.rules.push({
            test: /\.mp3$/,
            use: {
                loader: 'file-loader',
            }
        })

        config.resolve.alias['@'] = path.resolve(__dirname);

        return config
    }
};

export default nextConfig;
