## How to change plash screen logo

1. Copy image to assets folder
2. Fix params and run CMD

```
yarn react-native generate-bootsplash assets/<image name> \
  --platforms=android,ios \
  --background=FFFFFF \
  --logo-width=150 \
  --assets-output=assets \
  --flavor=main \
```

3. Done
