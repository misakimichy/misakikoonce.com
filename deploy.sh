# Run ./deploy.sh to update https://github.com/misakimichy/misakikoonce.com/tree/gh-pages
gatsby build --prefix-paths && gh-pages -d public
