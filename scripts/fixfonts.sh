#!/bin/bash
# fixfonts.sh
# android/app/src/main/res/font
typeset folder="$1"
if [[ -d "$folder" && ! -z "$folder" ]]; then
  pushd "$folder";
  for file in *.ttf; do
    typeset normalized="${file//-/_}";
    normalized="$(tr [A-Z] [a-z] <<< "$normalized")";
    mv "$file" "$normalized";
  done
  popd
fi
