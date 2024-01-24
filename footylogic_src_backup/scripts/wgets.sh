#!/usr/bin/env bash

set -ex



pushd static/js
rm -rf *
rm -rf .*

cp ../../scripts/extract.php .

wget https://footylogic.com/static/js/main.e65e0e52.chunk.js
wget https://footylogic.com/static/js/main.e65e0e52.chunk.js.map
wget https://footylogic.com/static/js/9.1777b1d2.chunk.js
wget https://footylogic.com/static/js/9.1777b1d2.chunk.js.map
wget https://footylogic.com/static/js/8.64105296.chunk.js
wget https://footylogic.com/static/js/8.64105296.chunk.js.map
wget https://footylogic.com/static/js/7.d562a6cd.chunk.js
wget https://footylogic.com/static/js/7.d562a6cd.chunk.js.map
wget https://footylogic.com/static/js/4.72ac63ad.chunk.js
wget https://footylogic.com/static/js/4.72ac63ad.chunk.js.map
wget https://footylogic.com/static/js/3.cf333e38.chunk.js
wget https://footylogic.com/static/js/3.cf333e38.chunk.js.map
wget https://footylogic.com/static/js/2.b3054b68.chunk.js
wget https://footylogic.com/static/js/2.b3054b68.chunk.js.map
wget https://footylogic.com/static/js/18.14524d87.chunk.js
wget https://footylogic.com/static/js/18.14524d87.chunk.js.map
wget https://footylogic.com/static/js/16.477c031d.chunk.js
wget https://footylogic.com/static/js/16.477c031d.chunk.js.map
wget https://footylogic.com/static/js/15.90d5419e.chunk.js
wget https://footylogic.com/static/js/15.90d5419e.chunk.js.map
wget https://footylogic.com/static/js/14.7aa74f98.chunk.js
wget https://footylogic.com/static/js/14.7aa74f98.chunk.js.map
wget https://footylogic.com/static/js/13.507c63d8.chunk.js
wget https://footylogic.com/static/js/13.507c63d8.chunk.js.map
wget https://footylogic.com/static/js/12.f1345b66.chunk.js
wget https://footylogic.com/static/js/12.f1345b66.chunk.js.map
wget https://footylogic.com/static/js/11.af7bd5d6.chunk.js
wget https://footylogic.com/static/js/11.af7bd5d6.chunk.js.map
wget https://footylogic.com/static/js/10.4a9424c0.chunk.js
wget https://footylogic.com/static/js/10.4a9424c0.chunk.js.map
wget https://footylogic.com/static/js/1.209722d9.chunk.js
wget https://footylogic.com/static/js/1.209722d9.chunk.js.map
wget https://footylogic.com/static/js/0.0c178b13.chunk.js
wget https://footylogic.com/static/js/0.0c178b13.chunk.js.map

for file in "."/*.chunk.js.map; do
    if [ -f "$file" ]; then
        # echo "Processing file: $file"
        php ./extract.php $file
        # Add your logic here to perform operations on each file
    fi
done

# npx prettier --write `find -type d |grep -v chunk`











