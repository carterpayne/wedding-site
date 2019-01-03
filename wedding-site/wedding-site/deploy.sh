aws s3 sync ./build/ s3://carterandcarrie.com
aws cloudfront create-invalidation --path /index.html --distribution-id E1ES1DTMRYK1ZJ
