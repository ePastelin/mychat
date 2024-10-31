/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['mychatapi-oxk8.onrender.com']
    },
    webpack(config, options) {
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
