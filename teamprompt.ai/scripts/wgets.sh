#!/usr/bin/env bash

set -x

rm -rf static/js

set -ex

mkdir -p static/js
pushd static/js

rm -rf *
rm -rf .*

cp ../../scripts/extract.php .

wget https://teamprompt.ai/static/js/main.f7c44204.js
wget https://teamprompt.ai/static/js/main.f7c44204.js.map

wget https://teamprompt.ai/static/js/main.d2687c61.chunk.js
wget https://teamprompt.ai/static/js/main.d2687c61.chunk.js.map

wget https://teamprompt.ai/static/js/2.fc406cb4.chunk.js
wget https://teamprompt.ai/static/js/2.fc406cb4.chunk.js.map

for file in "."/*.js.map; do
    if [ -f "$file" ]; then
        # echo "Processing file: $file"
        php ./extract.php $file
        # Add your logic here to perform operations on each file
    fi
done

# npx prettier --write `find -type d |grep -v chunk`











