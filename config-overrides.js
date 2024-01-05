const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
    addWebpackModuleRule({
        test: /\.less$/,
        sideEffects: true,
        use: [
            {
                loader: 'source-map-loader',
                options: {
                    filterSourceMappingUrl: (url, resourcePath) => {
                        // Exclude antd less files
                        if (resourcePath.includes('node_modules/antd')) {
                            return false;
                        }
                        return true;
                    },
                },
            },
        ],
    })
);
